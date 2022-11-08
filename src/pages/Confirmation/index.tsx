import { Header } from "../../componentes/Header";
import { ConfirmationImage, Container, Wrapper } from "./styles";
import confirmationImage from "../../assets/images/confirmation.svg";
import { useNavigate } from "react-router-dom";
import { Button } from "../../componentes/Button";

export function Confirmation() {
  const navigate = useNavigate();
  return (
    <Wrapper>
      <Header />
      <Container>
        <h1>Compra realizada com sucesso!</h1>
        <ConfirmationImage src={confirmationImage} />
        <Button onClick={() => navigate("/")}>Voltar</Button>
      </Container>
    </Wrapper>
  );
}
