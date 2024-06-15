import './App.css';
import {BrowserRouter} from "react-router-dom";
import Routes from "./routes/RoutesNav";

function App() {
    // const isLearning = false;
    return (
        <div className="mx-auto max-w-screen-xl px-4 sm:px-6 lg:px-8">
            <BrowserRouter>
                <Routes/>
            </BrowserRouter>
        </div>
    );
}

export default App;
