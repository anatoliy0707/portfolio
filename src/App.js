import './App.css';
import {Header} from "./header/Header";
import {Main} from "./main/Main";
import {Skills} from "./skills/Skills";
import {Progects} from "./progects/Progects";
import {Contacts} from "./contacts/Contacts";
import {Footer} from "./footer/Footer";

function App() {
  return (
    <div className="App">
        <Header/>
        <Main/>
        <Skills/>
        <Progects/>
        <Contacts/>
        <Footer/>
    </div>
  );
}

export default App;
