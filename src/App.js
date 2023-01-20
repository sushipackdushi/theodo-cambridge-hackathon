import "./App.css";
import Header from "./components/molecules/Header";
import Footer from "./components/molecules/Footer";
import Home from "./pages/home";
import Test from "./pages/test";
import Theodo from "./pages/theodo";
import { Routes, Route } from "react-router-dom";
import {useState, useEffect} from "react"

function App() {

  // const [counter, setCounter] = useState(0);
  // useEffect(() => {
  //   setCounter(counter+1)
  //   console.log(counter)
  // }, []);

  // const [counter, setCouter] = useState(0)

  // function someFunction() {setCouter(1)};
  // useEffect(() => {
  //   someFunction();
  //   console.log(counter);
  // },[])

  return (
    <div className="app">
      <div className="app-header">
        <Header />
      </div>
      <div className="app-body">
        <div className="app-content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="test" element={<Test />} />
            <Route path="theodo" element={<Theodo />} />
          </Routes>
        </div>
        <div className="app-footer">
          <Footer />
        </div>
        
      </div>
    </div>
  );
}

export default App;
