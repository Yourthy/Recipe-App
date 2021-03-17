import './App.css';

function App() {

  const APP_ID = "89d94235";
  const APP_KEY = "534773668dae75297f457a5109a2a95c";


  const exampleReq = "https://api.edamam.com/search?q=chicken&app_id=${YOUR_APP_ID}&app_key=${APP_KEY}&from=0&to=3&calories=591-722&health=alcohol-free";

  return (
    <div className="App">
      <h1>Hello React!</h1>
    </div>
  );
}

export default App;
