import "./App.css";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
function App() {
  return (
    <>
      <div className="max-h-screen">
        <Navbar></Navbar>
        <Hero></Hero>
      </div>
    </>
  );
}

export default App;
