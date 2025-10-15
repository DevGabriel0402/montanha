import { useState } from "react";
import { FormContainer, Label, Input, Button } from "./Style";

export default function Formulario() {
  const [nome, setNome] = useState("");
  const [contato, setContato] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    // Aqui você pode enviar os dados ou tratar como quiser
    console.log("Nome:", nome);
    console.log("Contato:", contato);
  };

  return (
    <FormContainer onSubmit={handleSubmit}>
      <h2 style={{ fontSize: 22 }}>AGENDE UM HORÁRIO</h2>
      <Input
        id="nome"
        placeholder="Informe seu nome..."
        type="text"
        value={nome}
        onChange={(e) => setNome(e.target.value)}
      />

      <Input
        placeholder="Informe seu WhatsApp..."
        id="contato"
        type="text"
        inputMode="numeric"
        value={contato}
        onChange={(e) => setContato(e.target.value)}
        onKeyPress={(e) => {
          if (!/[0-9]/.test(e.key)) {
            e.preventDefault();
          }
        }}
      />
      <Button type="submit">Enviar</Button>
    </FormContainer>
  );
}
