import { useContext } from "react";
import About from './components/about/About';
import Contact from "./components/Contact/Contact";
import Intro from './components/intro/Intro';
import ProductList from './components/ProductList/ProductList';
import Toggle from './components/toggle/Toggle';
import { ThemeContext } from "./context";

function App() {
  const theme = useContext(ThemeContext);
  const darkMode = theme.state.darkMode;
  return (
    <div style={{
      backgroundColor: darkMode ? "#222" : "white",
      color: darkMode && "white",
    }} 
    >
      <Toggle></Toggle>
      <Intro></Intro>
      <About></About>
      <ProductList></ProductList>
      <Contact></Contact>
    </div>
  );
}

export default App;