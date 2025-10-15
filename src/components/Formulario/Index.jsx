import { useState } from "react";
import { FormContainer, Label, Input, Button, Select, TextArea } from "./Style";

export default function Formulario() {
  const [nome, setNome] = useState("");
  const [contato, setContato] = useState("");
  const [horario, setHorario] = useState(null);
  const [descricao, setDescricao] = useState("");

  const opçoesHorario = ["Manhã", "Tarde", "Noite"];

  const handleSubmit = (e) => {
    e.preventDefault();

    console.log("Nome:", nome);
    console.log("Contato:", contato);
    console.log("Horário:", horario);
    console.log("Descrição:", descricao);

    setNome("");
    setContato("");
    setHorario(null);
    setDescricao("");
  };

  return (
    <FormContainer onSubmit={handleSubmit}>
      <h2>AGENDE UM HORÁRIO</h2>
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
      <Select value={horario || ""} onChange={(e) => setHorario(e.target.value)}>
        <option value="" disabled>
          Escolha um horário
        </option>
        {opçoesHorario.map((item) => (
          <option key={item} value={item}>
            {item}
          </option>
        ))}
      </Select>
      <TextArea
        placeholder="Descreva sua tatuagem..."
        rows={4}
        value={descricao}
        onChange={(e) => setDescricao(e.target.value)}
      />
      <Button type="submit">Enviar</Button>
    </FormContainer>
  );
}
