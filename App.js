import "./App.css";
import data from "./data";
import Header from './components/Header'
import Menu from './components/Menu'
import Footer from './components/Footer'

export default function App() {
  return (
    <div className="App">
      <Header />
      <Menu />
      <Footer />
    </div>
  );
}

