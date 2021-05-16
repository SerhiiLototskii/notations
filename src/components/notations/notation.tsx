import React from "react";
import {EditableSpan} from "../editableSpan/EditableSpan";
import {Button, TextField} from "@material-ui/core";
import ButtonGroup from "@material-ui/core/ButtonGroup";

type notationPropsType = {
    notationsTitle: string
    description: string
    notationId: string
}

export const Notation = (props: notationPropsType) => {
    const finctionIsCalled = () => {
        alert('hello')
    }

    return (
        <div>
            <h3><EditableSpan value={props.notationsTitle} onChange={finctionIsCalled}/></h3>
            <div>
                <TextField
                    id="filled-multiline-static"
                    label="Описание"
                    multiline
                    rows={4}
                    defaultValue={props.description}
                    variant="filled"
                />
            </div>
            <div>
                <ButtonGroup color="primary" aria-label="outlined primary button group">
                    <Button>Редактировать</Button>
                    <Button>Удалить</Button>
                </ButtonGroup>

            </div>

        </div>
    )
}