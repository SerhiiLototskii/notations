import {EditableSpan} from "../editableSpan/EditableSpan";
import {Button, TextField} from "@material-ui/core";
import ButtonGroup from "@material-ui/core/ButtonGroup";
import React from "react";

export const Editing = () => {
    const finctionIsCalled = () => {
        alert('hello')
    }

    return (
        <div>
            <h3><EditableSpan value={'Редактирование '} onChange={finctionIsCalled}/></h3>

        </div>
    )
}