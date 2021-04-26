import "./styles.css";
import Dropdown from "./atoms/dropdown";

export default function App() {
  return (
    <div className="App">
      <header>
        <h1>React custom dropdown</h1>
      </header>
      <Dropdown
        name="numbers"
        options={[
          { key: 1, value: 1 },
          { key: 2, value: 2 },
          { key: 3, value: 3 }
        ]}
        label="Choose a number: "
      />
    </div>
  );
}
