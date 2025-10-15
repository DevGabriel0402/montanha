import styled from "styled-components";

export const FormContainer = styled.form`
  width: 100%;
  max-width: 400px;
  padding: 24px;
  background: #18181b;
  border-radius: 20px;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 10px;

  h2 {
    text-align: start;
  }
`;

export const Label = styled.label`
  color: #fafafa;
  font-size: 1rem;
  margin-bottom: 8px;
  font-weight: 500;
`;

export const Input = styled.input`
  width: 100%;
  padding: 12px;
  border-radius: 8px;
  border: 1px solid #333;
  background: #23232b;
  color: #fafafa;
  font-size: 1rem;
  margin-bottom: 12px;
  outline: none;
  transition: border 0.2s;
  &:focus {
    border: 1.5px solid #ffffff92;
  }
`;

export const Button = styled.button`
  width: 100%;
  padding: 14px;
  border-radius: 10px;
  border: none;
  background: linear-gradient(90deg, #ff0055 60%, #23232b 100%);
  color: #fff;
  font-size: 1.1rem;
  font-weight: bold;
  cursor: pointer;
`;
