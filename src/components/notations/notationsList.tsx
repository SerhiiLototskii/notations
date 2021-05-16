import React from 'react'
import {Notation} from "./notation";
import {notationType} from "./notations-reducer";
import {Grid, Paper} from "@material-ui/core";
import {AppRootStateType} from "../../app/store";
import {useSelector} from "react-redux";
import {AddItemForm} from "../addItemForm/AddItemForm";

export const NotationsList = () => {
    const notations = useSelector<AppRootStateType, Array<notationType>>(state => state.notations)

    const addNotation = () => {
       alert('function is called')
    }
    return <>
        <Grid container style={{padding: '20px'}}>
            <AddItemForm addItem={addNotation}/>
        </Grid>
        <Grid container spacing={3}>
            {
                notations.map(nt => {
                    return <Grid item >
                        <Paper style={{padding: '10px'}}>
                            <Notation
                                key={nt.notationId}
                                description={nt.description}
                                notationsTitle={nt.notationsTitle}
                                notationId={nt.notationId}
                            />
                        </Paper>
                    </Grid>
                })
            }
        </Grid>
    </>

}