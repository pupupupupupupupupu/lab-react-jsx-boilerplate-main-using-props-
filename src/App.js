import "./App.css";

function App(props) {
  // code here

  return (
    <div className="App">
      <h1>Kalvium Gallery</h1>

      <div className="image">
        <img src={props.data[0].img} alt="" />
        <img src={props.data[1].img} alt="" />
      </div>
      <div className="image">
        <img src={props.data[2].img} alt="" />
        <img src={props.data[3].img} alt="" />
      </div>
    </div>
  );
}

export default App;
