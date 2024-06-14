import * as React from 'react';
import Modal from '@mui/material/Modal';
import Box from "@mui/material/Box";

const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    bgcolor: 'background.paper',
    boxShadow: 24,
};

export default function ModalPopup({children, open, onClose, className}) {
    return (
        <Modal
            open={open}
            onClose={onClose}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
        >
            <Box sx={style} className={className}>
                {children}
            </Box>
        </Modal>
    );
}
