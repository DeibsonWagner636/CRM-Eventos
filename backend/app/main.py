from fastapi import FastAPI, HTTPException, Depends
from sqlalchemy.orm import Session
from fastapi.middleware.cors import CORSMiddleware
from .database import SessionLocal, engine, Base
from .models import Contato
from . import schemas
from typing import List

Base.metadata.create_all(bind=engine)

app = FastAPI()

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

def get_db():
    db = SessionLocal()
    try:
        yield db
    finally:
        db.close()

@app.get("/contatos", response_model=List[schemas.ContatoOut])
def listar_contatos(skip: int = 0, limit: int = 100, db: Session = Depends(get_db)):
    return db.query(Contato).offset(skip).limit(limit).all()

@app.post("/contatos", response_model=schemas.ContatoOut)
def criar_contato(contato: schemas.ContatoIn, db: Session = Depends(get_db)):
    db_contato = Contato(**contato.dict())
    db.add(db_contato)
    db.commit()
    db.refresh(db_contato)
    return db_contato

@app.put("/contatos/{contato_id}", response_model=schemas.ContatoOut)
def editar_contato(contato_id: int, contato: schemas.ContatoIn, db: Session = Depends(get_db)):
    contato_db = db.query(Contato).filter(Contato.id == contato_id).first()
    if not contato_db:
        raise HTTPException(status_code=404, detail="Contato não encontrado")
    for key, value in contato.dict().items():
        setattr(contato_db, key, value)
    db.commit()
    db.refresh(contato_db)
    return contato_db

@app.delete("/contatos/{contato_id}")
def deletar_contato(contato_id: int, db: Session = Depends(get_db)):
    contato_db = db.query(Contato).filter(Contato.id == contato_id).first()
    if not contato_db:
        raise HTTPException(status_code=404, detail="Contato não encontrado")
    db.delete(contato_db)
    db.commit()
    return {"ok": True}