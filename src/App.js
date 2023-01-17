import "./App.css";
import Header from "./components/molecules/Header/Header";
import Footer from "./components/molecules/Footer/Footer";
import { Rotate } from "react-animated-components";
import NoughtsAndCrosses from "./components/molecules/NoughtsAndCrosses/NoughtsAndCrosses";

const BoringPie = () => <div>🥧</div>;

function App() {
  return (
    <div className="app">
      <div className="app-header">
        <Header />
      </div>
      <div className="app-body">
        <h1>Welcome to the Theodo UK Hackathon!</h1>
        <h2>This is the skeleton repository containing:</h2>
        <ul>
          <li>An example component (Header and Footer)</li>
          <li>An example image (Theodo Logo)</li>
          <li>An example button </li>
          <li>An example text input: </li>
        </ul>
        <h3>
          {" "}
          An example of an animated pie:{" "}
          <div>
            <Rotate inline>
              {" "}
              <BoringPie />
            </Rotate>
          </div>
        </h3>
      </div>
      <div>
        <h3>An example game of Noughts and Crosses:</h3>
        <NoughtsAndCrosses />
      </div>
      <div className="app-footer">
        <Footer />
      </div>
    </div>
  );
}

export default App;
