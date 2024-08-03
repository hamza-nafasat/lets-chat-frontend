/* eslint-disable react/prop-types */
import { Button, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle } from "@mui/material";

const ConfirmDeleteDialog = ({ open, handleClose, deleteHandler, text }) => {
    return (
        <Dialog open={open} onClose={handleClose}>
            <DialogTitle>Confirm Delete</DialogTitle>
            <DialogContent>
                <DialogContentText>{text}</DialogContentText>
            </DialogContent>
            <DialogActions>
                <Button color="primary" variant="contained" onClick={handleClose}>
                    No
                </Button>
                <Button color="error" variant="outlined" onClick={deleteHandler}>
                    yes
                </Button>
            </DialogActions>
        </Dialog>
    );
};

export default ConfirmDeleteDialog;
