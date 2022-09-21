import { useSelector } from "react-redux/es/exports";
import { useDispatch } from "react-redux/es/hooks/useDispatch";
import { plus, minus, change } from "../Slice/createSlice";
import { hi, hell } from "../Slice/hello";
import { active, remove } from "../Slice/toggle";
import "./App.css";

function App() {
  const { value, inputData } = useSelector((store) => store.count);
  const { text } = useSelector((store) => store.hello);
  const { isToggled } = useSelector((state) => state.toggle);

  const disPatch = useDispatch();

  return (
    <>
      <input
        type="number"
        onChange={(e) => disPatch(change(e.target.value))}
      ></input>
      <hr></hr>
      <button onClick={() => disPatch(plus(inputData))}>더하기</button>
      <span style={{ fontSize: "50px", margin: "20px" }}>{value}</span>
      <button onClick={() => disPatch(minus(inputData))}>빼기</button>
      <br></br>
      <hr></hr>
      <button onClick={() => disPatch(hi("bye"))}>하이</button>
      <hr></hr>
      <button onClick={() => disPatch(hell("good"))}>헬로우</button>
      <hr></hr>
      <h2>{text}</h2>
      {isToggled ? (
        <button
          className="toggle active"
          onClick={() => disPatch(remove())}
        ></button>
      ) : (
        <button className="toggle" onClick={() => disPatch(active())}></button>
      )}
    </>
  );
}

export default App;
