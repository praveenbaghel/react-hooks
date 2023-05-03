import "./App.css";
import Navigation from "./Header/Navigation";
import UseCallback from "./UseCallback/UseCallback";
import UseContext from "./UseCotext/UseContext";
import UseEffect from "./useEffect/UseEffect";
import UseImperative from "./UseImperative/UseImperative";
import UseLayoutEffect from "./UseLayoutEffect/UseLayoutEffect";
import UseMemo from "./UseMemo/UseMemo";
import UseReducer from "./UseReducer/UseReducer";
import UseRef from "./UseRef/UseRef";
import Usestate from "./useState/Usestate";
import { Router, Route, Routes } from "react-router-dom";
import Home from "./Home";
function App() {
  return (
    <div className="App">
      <div className="Header">
        <Navigation />
      </div>
      <div className="items">
        <Routes>
          <Route path="/" exact element={<Home />} />
          <Route path="/usestate" element={<Usestate />} />
          <Route path="/usereducer" element={<UseReducer />} />
          <Route path="/useeffect" element={<UseEffect />} />
          <Route path="/useref" element={<UseRef />} />
          <Route path="/uselayouteffect" element={<UseLayoutEffect />} />
          <Route path="/useImperative" element={<UseImperative />} />
          <Route path="/usecontext" element={<UseContext />} />
          <Route path="/useMemo" element={<UseMemo />} />
          <Route path="/usecallback" element={<UseCallback />} />
          <Route path="*" element={<UseCallback />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
