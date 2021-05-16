import React, {ChangeEvent, useState} from 'react';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import {TextField} from "@material-ui/core";
import {makeStyles} from "@material-ui/core/styles";
import AlertDialogSlide from "../confirmationOfAction/confirmationOfAction";

const useStyles = makeStyles({
    root: {
        minWidth: 500,
    },
    media: {
        height: 140,
    },
});

type editableNotation = {
    notationsTitle: string
    description: string
    notationId: string
    removeNotation: (notationId: string) => void
    handleCloseEditMode?: () => void
    changeNotationTitle: (notationId: string, notationTitle: string) => void
    changeNotationDescription: (notationId: string, description: string) => void
}

export const EditableNotation = React.memo((props: editableNotation) => {
    const classes = useStyles();
    const removeNotation = () => {
        props.removeNotation(props.notationId)
    }
    const changeNotationTitle = () => {
        props.changeNotationTitle(props.notationId, notationTitle)
    }
    const changeNotationDescription = () => {
        props.changeNotationDescription(props.notationId, description)
    }
    let [notationTitle, setTitle] = useState(props.notationsTitle);
    const changeTitle = (e: ChangeEvent<HTMLInputElement>) => {
        setTitle(e.currentTarget.value)
    }
    let [description, setDescription] = useState(props.description);
    const changeDescription = (e: ChangeEvent<HTMLInputElement>) => {
        setDescription(e.currentTarget.value)
    }
    const performAnActionEdit = () => {
        changeNotationTitle()
        changeNotationDescription()
    }
    return (
        <Card className={classes.root}>
            <TextField style={{marginBottom: '40px'}} id="standard-basic"
                       onChange={changeTitle}
                       autoFocus
                       defaultValue={notationTitle}/>
            <div>
                <TextField style={{minWidth: '500px'}}
                           id="outlined-multiline-static"
                           label="Описание"
                           multiline
                           rows={10}
                           variant="outlined"
                           value={description}
                           onChange={changeDescription}
                />
            </div>
            <CardActions>
                <AlertDialogSlide
                    handleCloseEditMode={props.handleCloseEditMode}
                    performAnAction={performAnActionEdit}
                    alertTitleValue={"Сохранить изменение нотации?"}
                    buttonValue={"Сохранить изменения"}/>
                <AlertDialogSlide
                    handleCloseEditMode={props.handleCloseEditMode}
                    alertTitleValue={"Отменить редактирование?"}
                    buttonValue={"Отменить редактирование"}/>
                <AlertDialogSlide
                    handleCloseEditMode={props.handleCloseEditMode}
                    performAnAction={removeNotation}
                    alertTitleValue={"Удалить нотацию?"}
                    buttonValue={"Удалить"}/>
            </CardActions>
        </Card>
    );
})
