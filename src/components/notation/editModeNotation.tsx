import React from 'react';
import {createStyles, makeStyles, Theme} from '@material-ui/core/styles';
import Modal from '@material-ui/core/Modal';
import Backdrop from '@material-ui/core/Backdrop';
import Fade from '@material-ui/core/Fade';
import {Button} from "@material-ui/core";
import {EditableNotation} from "./editableNotation";


const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        modal: {
            borderRadius: '100x',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
        },
        paper: {
            textAlign: 'center',
            radius: '100px',
            backgroundColor: theme.palette.background.paper,
            boxShadow: theme.shadows[5],
            padding: theme.spacing(3, 10, 5),
        },
    }),
);

export type editModeNotation = {
    notationsTitle: string
    description: string
    notationId: string
    removeNotation: (notationId: string) => void
    changeNotationTitle: (notationId: string, notationTitle: string) => void
    changeNotationDescription: (notationId: string, description: string) => void
}

export const EditModeNotation = React.memo((props: editModeNotation) => {
    const classes = useStyles();
    const [open, setOpen] = React.useState(false);

    const handleOpen = () => {
        setOpen(true);
    };

    const handleCloseEditMode = () => {
        setOpen(false);
    };

    return (
        <div>
            <Button
                style={{marginRight: '50px'}}
                onClick={handleOpen}
                color={'primary'}>Редактировать
            </Button>
            <Modal
                aria-labelledby="transition-modal-title"
                aria-describedby="transition-modal-description"
                className={classes.modal}
                open={open}
                onClose={handleCloseEditMode}
                closeAfterTransition
                BackdropComponent={Backdrop}
                BackdropProps={{
                    timeout: 500,
                }}
            >
                <Fade in={open}>
                    <div className={classes.paper}>
                        <h3>Режим редактирования</h3>
                        <EditableNotation notationsTitle={props.notationsTitle}
                                          description={props.description}
                                          notationId={props.notationId}
                                          removeNotation={props.removeNotation}
                                          handleCloseEditMode={handleCloseEditMode}
                                          changeNotationTitle={props.changeNotationTitle}
                                          changeNotationDescription={props.changeNotationDescription}
                        />

                    </div>
                </Fade>
            </Modal>
        </div>
    );
})
