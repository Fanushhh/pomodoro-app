import "./App.css";
import { Form } from "./components/Form/Form";
import React from "react";
function App() {
  
  const [modal, setModal] = React.useState(false);

  return (
    <>
      <h1>hello there!</h1>
      <button onClick={() => setModal(true)}>open</button>
      <Form openModal={modal} closeModal={() => setModal(false)}/>
     
     
    </>
  );
}

export default App;
