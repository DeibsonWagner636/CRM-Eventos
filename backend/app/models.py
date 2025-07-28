from sqlalchemy import Column, Integer, String, DateTime, Text
from sqlalchemy.sql import func
from .database import Base

class Contato(Base):
    __tablename__ = "contatos"
    id = Column(Integer, primary_key=True, index=True)
    nome = Column(String(255), nullable=False)
    email = Column(String(255), nullable=False, unique=True)
    telefone = Column(String(50))
    whatsapp = Column(String(50))
    empresa = Column(String(255))
    lote = Column(String(100))
    atendente = Column(String(100))
    metros = Column(String(50))
    segmento = Column(String(100))
    status = Column(String(50))
    observacoes = Column(Text)
    ultima_atualizacao = Column(DateTime(timezone=True), server_default=func.now(), onupdate=func.now())