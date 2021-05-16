import React, {ChangeEvent, KeyboardEvent, useState} from 'react';
import {Button, Paper, TextField} from '@material-ui/core';


type AddItemFormPropsType = {
    addItem: (title: string) => void

}

export const AddItemForm = React.memo(function({addItem}: AddItemFormPropsType) {

    let [title, setTitle] = useState("")
    let [error, setError] = useState<string | null>(null)

    const addItemHandler = () => {
        if (title.trim() !== "") {
            addItem(title);
            setTitle("");
        } else {
            setError("Title is required");
        }
    }

    const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
        setTitle(e.currentTarget.value)
    }

    const onKeyPressHandler = (e: KeyboardEvent<HTMLInputElement>) => {
        if (error !== null) {
            setError(null);
        }
        if (e.charCode === 13) {
            addItemHandler();
        }
    }

    return <div>
        <Paper style={{padding: '10px'}}>
        <TextField variant="outlined"
                   error={!!error}
                   value={title}
                   onChange={onChangeHandler}
                   onKeyPress={onKeyPressHandler}
                   label="Заголовок"
                   helperText={error}
        />
        <Button  style={{padding: '20px'}}
                 onClick={addItemHandler}
            color={'primary'}>Добавить новую нотацию
        </Button>
        </Paper>
    </div>
})
