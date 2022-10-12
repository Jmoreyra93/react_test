import "bootstrap/dist/css/bootstrap.css";
import { BrowserRouter, Link, Routes, Route } from "react-router-dom";
import Header from "./components/Headers";
import Inicio from "./components/Index";
import Pagination from "./components/StarWarsPagination"

function App() {
    return (
        <BrowserRouter >
            <Header title="Api Client Demo" />
            <nav>
                <ul className="nav">
                    <li className="nav-item">
                        <Link className="nav-link" to="/">Inicio</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" to="/starwarspagination">Api Star Wars Pagination</Link>
                    </li>
                </ul>
            </nav>
            <main className="container" >
                <Routes>
                    <Route path="/" element={<Inicio />} />
                    <Route path="/starwarspagination" element={<Pagination />}/>

                </Routes>
            </main>
        </BrowserRouter>
    );
}

export default App;
