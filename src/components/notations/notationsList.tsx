import React, {useCallback} from 'react'
import {
    addNotationTC,
    changeNotationDescriptionTC,
    changeNotationTitleTC,
    notationType,
    removeNotationTC
} from "./notations-reducer";
import {Grid} from "@material-ui/core";
import {AppRootStateType} from "../../app/store";
import {useDispatch, useSelector} from "react-redux";
import {AddItemForm} from "../addItemForm/AddItemForm";
import {Notation} from "../notation/notation";

export const NotationsList = React.memo(() => {
    const dispatch = useDispatch()
    const notations = useSelector<AppRootStateType, Array<notationType>>(state => state.notations)

    const removeNotation = useCallback(function (notationId: string) {
        const thunk = removeNotationTC(notationId)
        dispatch(thunk)
    }, [dispatch])

    const addNotation = useCallback(function (notationTitle: string) {
        const thunk = addNotationTC(notationTitle)
        dispatch(thunk)
    }, [dispatch])

    const changenotationTitle = useCallback(function (notationId: string, notationTitle: string) {
        const thunk = changeNotationTitleTC(notationId, notationTitle)
        dispatch(thunk)
    }, [dispatch])

    const changeNotationDescription = useCallback(function (notationId: string, description: string) {
        const thunk = changeNotationDescriptionTC(notationId, description)
        dispatch(thunk)
    }, [dispatch])

    return <>
        <Grid container style={{padding: '20px'}}>
            <AddItemForm addItem={addNotation}/>
        </Grid>
        <Grid container spacing={3}>
            {
                notations.map(nt => {
                    return <Grid item>
                        <Notation
                            key={nt.notationId}
                            description={nt.description}
                            notationsTitle={nt.notationTitle}
                            notationId={nt.notationId}
                            removeNotation={removeNotation}
                            changeNotationTitle={changenotationTitle}
                            changeNotationDescription={changeNotationDescription}
                        />
                    </Grid>
                })
            }
        </Grid>
    </>

})