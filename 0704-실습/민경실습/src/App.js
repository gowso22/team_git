import CountRedux from "./countRedux";
import AuthRedux from "./authRedux";
import TodosRedux from "./todosRedux";
import CartRedux from "./cartRedux";

function App() {
  return (
    <>
      <CountRedux />
      <AuthRedux />
      <TodosRedux />
      <CartRedux />
    </>
  );
}

export default App;
