import Routes from "./RoutesNav";
import {BrowserRouter} from 'react-router-dom';

const BiddingApp = () => {
    return (
        <div className="mx-auto max-w-screen-xl px-4 sm:px-6 lg:px-8">
            <BrowserRouter>
                <Routes/>
            </BrowserRouter>
        </div>
    )
}

export default BiddingApp