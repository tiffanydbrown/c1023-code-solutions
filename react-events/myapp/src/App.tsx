import './App.css';
import { CustomButton } from './CustomButton';

function App() {
  function handleCustomClick(text: string) {
    alert(text);
  }
  return (
    <div>
      <CustomButton text="I" color="red" onCustomClick={handleCustomClick} />
      <CustomButton
        text="Know"
        color="green"
        onCustomClick={handleCustomClick}
      />
      <CustomButton
        text="React"
        color="lightblue"
        onCustomClick={handleCustomClick}
      />
    </div>
  );
}

export default App;
