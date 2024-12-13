import './App.css';
import Header from "./Components/Header/Header";
import Footer from "./Components/Footer/Footer";
import {BrowserRouter} from "react-router-dom";
import MyRoutes from "./Routes/Routes";

function App() {

  return (
    <div className="App">
        <BrowserRouter>
            <Header/>
            <MyRoutes/>
            <Footer/>
        </BrowserRouter>
    </div>
  );
}

export default App;
