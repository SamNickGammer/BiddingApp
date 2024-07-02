import React from "react"
import './App.css';
import {BrowserRouter} from "react-router-dom";
import Routes from "./routes/RoutesNav";

function App() {
    return (
        <div className="mx-auto max-w-screen px-4 sm:px-6 lg:px-8 ">
            <BrowserRouter>
                <Routes/>
            </BrowserRouter>
        </div>
    );
}

export default App;
