import React from 'react'
import ModalPopup from './common/ModalPopup'

export default function SignUpModal({open = false, onClose}) {
    return (
        <ModalPopup open={open} onClose={onClose} className='w-[400px] p-4 rounded-md;'>
            This is Registration
        </ModalPopup>
    )
}