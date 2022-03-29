import { useEffect } from "react";
import logo from "./logo.svg";
import "./App.css";
import { useDispatch, useSelector } from "react-redux";
import { fetchDogs } from "./store/dog.slice";

function App() {
  // const { status, data, errorMessage } = useSelector((state) => state.dog.dog);
  const { status, data, errorMessage } = useSelector((state) => state.dog.dog);
  const dispatch = useDispatch();

  console.log(data, "data");
  console.log(status, "status");
  console.log(errorMessage, "errorMessage");

  useEffect(() => {
    dispatch(fetchDogs());
  }, [dispatch]);

  const handleClick = () => {
    dispatch(fetchDogs());
  };

  return (
    <div className="App">
      <header className="App-header">
        <div onClick={handleClick}>Click me</div>
        <img src={logo} className="App-logo" alt="logo" />
        {status === "fulfilled" && <h1>I am new</h1>}

        {status === "loading" && <h1>Loaaaading...</h1>}

        {status === "erro" && <h1>{errorMessage}</h1>}

        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
      </header>
    </div>
  );
}

export default App;
