import { Button, TomatoButton } from "./components/Button.styled";
import Container from "./components/Container.styled";

const App = () => {
  return (
    <Container bg="grey">
      <Button primary>Save</Button>
      <Button>Clear</Button>
      <TomatoButton>Send</TomatoButton>
      <TomatoButton primary>Submit</TomatoButton>
    </Container>
  );
};

export default App;
