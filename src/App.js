import "./App.css";
import Ability from "./components/ability/Ability";
import Footer from "./components/footer/Footer";
import Home from "./components/home/Home";
import Nav from "./components/nav/Nav";
import Services from "./components/services/Services";
function App() {
  const globalStyles = {
    "*": {
      boxSizing: "border-box",
      overflow :"hidden",
      margin :'0',
      padding :'0'
    },
  };
  return (
    <div className="App" style={globalStyles}>
      <Nav />
      <Home />
      <Services/>
      <Ability />
      <Footer/>
    </div>
  );
}

export default App;
