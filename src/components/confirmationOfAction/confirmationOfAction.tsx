import React from 'react';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogTitle from '@material-ui/core/DialogTitle';
import Slide from '@material-ui/core/Slide';
import {TransitionProps} from '@material-ui/core/transitions';

const Transition = React.forwardRef(function Transition(
    props: TransitionProps & { children?: React.ReactElement<any, any> },
    ref: React.Ref<unknown>,
) {
    return <Slide direction="up" ref={ref} {...props} />;
});
type confirmationOfActionPropsType = {
    buttonValue: string
    alertTitleValue: string
    performAnAction?: () => void
    handleCloseEditMode?: () => void
}


export default function AlertDialogSlide(props: confirmationOfActionPropsType) {
    const [open, setOpen] = React.useState(false);
    const performAnAction = () => {
        if (props.performAnAction) {
            props.performAnAction()
        }
        if (props.handleCloseEditMode) {
            props.handleCloseEditMode()
        }

        handleClose()
    }

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    return (
        <div>
            <Button color="primary" onClick={handleClickOpen}>
                {props.buttonValue}
            </Button>
            <Dialog
                open={open}
                TransitionComponent={Transition}
                keepMounted
                onClose={handleClose}
                aria-labelledby="alert-dialog-slide-title"
                aria-describedby="alert-dialog-slide-description"
            >
                <DialogTitle id="alert-dialog-slide-title">{props.alertTitleValue}</DialogTitle>
                <DialogActions>
                    <Button style={{marginRight: '30px'}} onClick={performAnAction} color="primary">
                        Да
                    </Button>
                    <Button style={{marginRight: '40px'}} onClick={handleClose} color="primary">
                        Нет
                    </Button>
                </DialogActions>
            </Dialog>
        </div>
    );
}
