import ModalPopup from "./common/ModalPopup";
import React from "react";

export default function SignInModal({open = false, onClose}) {
    return (
        <ModalPopup open={open} onClose={onClose} className='w-[400px] p-4 rounded-md'>
            Hello world
        </ModalPopup>
    )
}