import Navigation from "../components/Navigaion";
import {Route, Routes} from 'react-router-dom'
import HomePage from "../pages/HomePage";
import AboutPage from "../pages/AboutPage";
import BiddingPage from "../pages/BiddingPage";
import React, {Suspense} from "react";
import SignInModal from "../components/SignInModal";
import SignUpModal from "../components/SignUpModal";


const BiddingDetailsLazy = React.lazy(() => import("../pages/BiddingDetails"));


const RoutesNav = () => {
    const [openModalSignIn, setOpenModalSignIn] = React.useState(false);
    const [openModealSignUp, setOpenModalSignUp] = React.useState(false);
    const openSignupModalFromSignIn = () => {
        setOpenModalSignIn(false);
        setOpenModalSignUp(true);
    }
    return (
        <>
            <Navigation setOpenModalSignIn={setOpenModalSignIn} setOpenModalSignUp={setOpenModalSignUp} />
            <Routes>
                <Route path="/" element={<HomePage/>}/>
                <Route path="/about" element={<AboutPage/>}/>
                <Route path="/biding" element={<BiddingPage/>}/>
                <Route path="/biding/:id" element={
                    <Suspense fallback={<h1 className=" p-10 bg-blue-200 text-center m-5">Loading...</h1>}>
                        <BiddingDetailsLazy/>
                    </Suspense>
                }/>
            </Routes>
            <SignInModal open={openModalSignIn} onClose={() => setOpenModalSignIn(false)} openSignupModalFromSignIn={openSignupModalFromSignIn}/>
            <SignUpModal open={openModealSignUp} onClose={() => setOpenModalSignUp(false)} />
        </>
    )
}

export default RoutesNav;