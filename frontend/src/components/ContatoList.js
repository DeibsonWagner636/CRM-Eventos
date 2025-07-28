import React from "react";

function ContatoList({ contatos, onEdit, onDelete }) {
  return (
    <div>
      <h2>Lista de Contatos</h2>
      <table style={{ width: "100%", borderCollapse: "collapse", marginBottom: 30 }}>
        <thead>
          <tr>
            <th>Nome</th>
            <th>E-mail</th>
            <th>Telefone</th>
            <th>Whatsapp</th>
            <th>Empresa</th>
            <th>Lote</th>
            <th>Atendente</th>
            <th>Metros</th>
            <th>Segmento</th>
            <th>Status</th>
            <th>Observações</th>
            <th>Última atualização</th>
            <th>Ações</th>
          </tr>
        </thead>
        <tbody>
          {contatos.map((contato) => (
            <tr key={contato.id}>
              <td>{contato.nome}</td>
              <td>{contato.email}</td>
              <td>{contato.telefone}</td>
              <td>{contato.whatsapp}</td>
              <td>{contato.empresa}</td>
              <td>{contato.lote}</td>
              <td>{contato.atendente}</td>
              <td>{contato.metros}</td>
              <td>{contato.segmento}</td>
              <td>{contato.status}</td>
              <td>{contato.observacoes}</td>
              <td>{contato.ultima_atualizacao ? new Date(contato.ultima_atualizacao).toLocaleString() : ""}</td>
              <td>
                <button onClick={() => onEdit(contato.id)} style={{ marginRight: 6 }}>
                  Editar
                </button>
                <button onClick={() => window.confirm('Tem certeza?') && onDelete(contato.id)}>
                  Excluir
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default ContatoList;