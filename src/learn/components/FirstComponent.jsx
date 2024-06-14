import {currentDateAndTime} from "../utils/dateandtime";
import SecondComponent from "./SecondComponent";

function FirstComponent() {

    const date = currentDateAndTime()
    return (
        <>
            <div>Hello</div>
            <FirstComponentSubComp1/>
            <SecondComponent/>
            <div>{date}</div>
        </>
    )
}

function FirstComponentSubComp1(){
    return (
        <div>I am Sub component of First component</div>
    )
}

export { FirstComponent , FirstComponentSubComp1 }