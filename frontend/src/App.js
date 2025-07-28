import React, { useEffect, useState } from "react";
import { getContatos, createContato, updateContato, deleteContato } from "./api";
import ContatoForm from "./components/ContatoForm";
import ContatoList from "./components/ContatoList";

function App() {
  const [contatos, setContatos] = useState([]);
  const [editing, setEditing] = useState(null);

  const fetchContatos = () => {
    getContatos().then(setContatos);
  };

  useEffect(() => {
    fetchContatos();
  }, []);

  const handleCreate = (data) => {
    createContato(data).then(() => fetchContatos());
  };

  const handleUpdate = (id, data) => {
    updateContato(id, data).then(() => {
      setEditing(null);
      fetchContatos();
    });
  };

  const handleDelete = (id) => {
    deleteContato(id).then(() => fetchContatos());
  };

  return (
    <div style={{ maxWidth: 900, margin: "40px auto", fontFamily: "sans-serif" }}>
      <h1>CRM Eventos</h1>
      <ContatoForm
        onSave={editing ? (data) => handleUpdate(editing, data) : handleCreate}
        editing={editing}
        contatos={contatos}
        cancelEdit={() => setEditing(null)}
      />
      <ContatoList
        contatos={contatos}
        onEdit={setEditing}
        onDelete={handleDelete}
      />
    </div>
  );
}

export default App;