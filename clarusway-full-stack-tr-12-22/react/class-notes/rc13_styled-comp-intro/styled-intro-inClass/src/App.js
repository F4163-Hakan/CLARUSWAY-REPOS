import { Button, TomatoButton } from "./components/Button.styled";

const App = () => {
  return (
    <>
      <Button primary>Save</Button>
      <Button>Clear</Button>
      <TomatoButton>Send</TomatoButton>
      <TomatoButton primary>Submit</TomatoButton>
    </>
  );
};

export default App;
