import Appname from "./components/appname";
import addtodo from "./components/addtodo";
import Addtodo from "./components/addtodo";
import Todoitemm from "./components/todoitemm";
import "./App.css";

function App() {
  return (
    <center className="todo-container">
      <Appname />
      <Addtodo />
      
      <div className="items-container">
        <Todoitemm tododate="4-2-2020" todoname="Buy Milk"></Todoitemm>
      </div>
      <div className="items-container2">
        <Todoitemm todoname="Go to Colledge" tododate="5-12-2021"></Todoitemm>
      </div>
    </center>
  );
}

export default App;
