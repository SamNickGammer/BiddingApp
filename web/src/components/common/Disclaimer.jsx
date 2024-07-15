import React from 'react';
import { Dialog, DialogTitle, DialogContent, DialogActions, Button, Checkbox, Typography, Box, IconButton } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';

export default function Disclaimer({ open, onClose, onConfirm }) {
  const [checked, setChecked] = React.useState(false);

  const handleCheckboxChange = (event) => {
    setChecked(event.target.checked);
  };

  const handleConfirm = () => {
    if (checked) {
      onConfirm();
    }
  };

  return (
    <Dialog open={open} onClose={onClose}>
      <DialogTitle>
        Disclaimer
        <IconButton
          aria-label="close"
          onClick={onClose}
          sx={{
            position: 'absolute',
            right: 8,
            top: 8,
            color: (theme) => theme.palette.grey[500],
          }}
        >
          <CloseIcon />
        </IconButton>
      </DialogTitle>
      <DialogContent dividers>
        <Typography gutterBottom>
          Please read the terms and conditions before placing a bid.
        </Typography>
      </DialogContent>
      <DialogActions>
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            width: "100%",
            padding: "0 16px",
          }}
        >
          <Box sx={{ display: "flex", alignItems: "center" }}>
            <Checkbox
              checked={checked}
              onChange={handleCheckboxChange}
              sx={{
                color: 'blue',
                '&.Mui-checked': {
                  color: 'blue',
                },
              }}
            />
            <Typography variant="body2">
              I agree to the terms and conditions
            </Typography>
          </Box>
          <Button
            variant="contained"
            sx={{ backgroundColor: 'green', '&:hover': { backgroundColor: 'darkgreen' } }}
            onClick={handleConfirm}
            disabled={!checked}
          >
            Yes
          </Button>
        </Box>
      </DialogActions>
    </Dialog>
  );
}
