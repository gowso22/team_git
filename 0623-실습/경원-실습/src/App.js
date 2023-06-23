import Login from "./components/실습1";
import Test5 from "./components/실습2";
import Random from "./components/실습3";
import Slider from "./components/실습4";
function App() {
  return (
    <div>
     <Login></Login>
     <Test5></Test5>
     <Random min ={1} max={100}></Random>
     <Slider></Slider>
    </div>
  );
}

export default App;
