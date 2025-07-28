# Backend - CRM Eventos

## Como rodar

1. Instale as dependências:
   ```
   pip install -r requirements.txt
   ```

2. Configure o banco de dados PostgreSQL.  
   Altere a variável no arquivo `database.py` ou crie um arquivo `.env` com:
   ```
   DATABASE_URL=postgresql://usuario:senha@host:5432/nomedobanco
   ```

3. Rode o servidor local:
   ```
   uvicorn app.main:app --reload
   ```

- A API estará disponível em: http://localhost:8000
- Documentação automática da API: http://localhost:8000/docs

---