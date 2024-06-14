import NavbarComponent from "../components/01/NavbarComponent";
import SideBar from "../components/01/SideBar.js";
import MainContent from "../components/01/MainContent";

export default function DayOnePractice() {
    return (
        <div style={{}}>
            <NavbarComponent/>
            <div style={{display:'flex',height:'100vh' }}>
                <SideBar/>
                <MainContent/>
            </div>
        </div>
    )
}