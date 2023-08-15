import Button from "./components/Button";

function App() {
  return (
    <main>
      <Button label="Button" onClickHandler={() => alert("hello")} />
      <Button
        label="Button"
        size="large"
        onClickHandler={() => alert("hello")}
      />
      <Button
        label="Button"
        disabled={true}
        size="large"
        onClickHandler={() => alert("hello")}
      />
      <Button
        label="Button"
        size="small"
        disabled={true}
        type="secondary"
        onClickHandler={() => alert("hello")}
      />
      <Button
        label="Button"
        type="tertiary"
        onClickHandler={() => alert("hello")}
      />
    </main>
  );
}

export default App;
