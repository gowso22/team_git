import Author from "./components/Author";
import ToDoList from "./components/ToDoList";
import NumberMaker from "./components/NumberMaker";
import Gallery from "./components/Gallery";

function App() {
  return(
    <div>
      <Author />
      <hr />
      <ToDoList />
      <hr />
      <NumberMaker />
      <hr />
      <Gallery />
    </div>
  )
}

export default App;
