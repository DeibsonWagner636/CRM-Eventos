import React, { useState, useEffect } from "react";

const campos = [
  { name: "nome", label: "Nome", required: true },
  { name: "email", label: "E-mail", required: true },
  { name: "telefone", label: "Telefone" },
  { name: "whatsapp", label: "Whatsapp" },
  { name: "empresa", label: "Empresa" },
  { name: "lote", label: "Lote" },
  { name: "atendente", label: "Atendente" },
  { name: "metros", label: "Metros" },
  { name: "segmento", label: "Segmento" },
  { name: "status", label: "Status" },
  { name: "observacoes", label: "Observações" },
];

const inicial = campos.reduce((acc, c) => ({ ...acc, [c.name]: "" }), {});

function ContatoForm({ onSave, editing, contatos, cancelEdit }) {
  const [form, setForm] = useState(inicial);

  useEffect(() => {
    if (editing) {
      const contato = contatos.find((c) => c.id === editing);
      setForm(contato || inicial);
    } else {
      setForm(inicial);
    }
  }, [editing, contatos]);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const dados = { ...form };
    delete dados.id;
    onSave(dados);
    setForm(inicial);
  };

  return (
    <form onSubmit={handleSubmit} style={{ marginBottom: 30, background: "#eee", padding: 20, borderRadius: 8 }}>
      <h2>{editing ? "Editar Contato" : "Novo Contato"}</h2>
      <div style={{ display: "flex", flexWrap: "wrap", gap: 12 }}>
        {campos.map((campo) => (
          <div key={campo.name} style={{ flex: "1 1 220px" }}>
            <label>
              {campo.label}
              {campo.required && <span style={{ color: "red" }}>*</span>}
              <input
                type="text"
                name={campo.name}
                value={form[campo.name] || ""}
                required={campo.required}
                onChange={handleChange}
                style={{ width: "100%", padding: 6, marginTop: 2 }}
              />
            </label>
          </div>
        ))}
      </div>
      <div style={{ marginTop: 12 }}>
        <button type="submit" style={{ padding: "8px 20px", background: "#008cff", color: "#fff", border: 0, borderRadius: 4 }}>
          {editing ? "Salvar Alterações" : "Adicionar"}
        </button>
        {editing && (
          <button type="button" onClick={cancelEdit} style={{ marginLeft: 12, padding: "8px 20px" }}>
            Cancelar
          </button>
        )}
      </div>
    </form>
  );
}

export default ContatoForm;