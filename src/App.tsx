import { Footer } from "./presentantion/Footer/Footer";
import { Home } from "./presentantion/Home/Home";
import { NavBar } from "./presentantion/NavBar/NavBar";
import "./App.css";

function App() {
  return (
    <div className="app-container">
      <NavBar />
      <Home />
      <Footer />
    </div>
  );
}

export default App;
