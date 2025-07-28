from pydantic import BaseModel
from typing import Optional

class ContatoIn(BaseModel):
    nome: str
    email: str
    telefone: Optional[str] = None
    whatsapp: Optional[str] = None
    empresa: Optional[str] = None
    lote: Optional[str] = None
    atendente: Optional[str] = None
    metros: Optional[str] = None
    segmento: Optional[str] = None
    status: Optional[str] = None
    observacoes: Optional[str] = None

class ContatoOut(ContatoIn):
    id: int
    ultima_atualizacao: Optional[str]
    class Config:
        orm_mode = True