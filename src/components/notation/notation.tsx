import React from 'react';
import {makeStyles} from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import {EditModeNotation} from "../modal/editModeNotation";
import AlertDialogSlide from "../confirmationOfAction/confirmationOfAction";

export const useStyles = makeStyles({
    root: {
        maxWidth: 345,
    },
    media: {
        height: 140,
    },
});
export type notationPropsType = {
    notationsTitle: string
    description: string
    notationId: string
    removeNotation: (notationId: string) => void
    changeNotationTitle: (notationId: string, notationTitle: string) => void
    changeNotationDescription: (notationId: string, description: string) => void
}

export const Notation = React.memo((props: notationPropsType) => {
    const classes = useStyles();

    const removeNotation = () => {
        props.removeNotation(props.notationId)
    }
    return (
        <Card className={classes.root}>
            <CardActionArea>
                <CardContent>
                    <Typography gutterBottom variant="h5" component="h2">
                        {props.notationsTitle}
                    </Typography>
                    <Typography variant="body2" color="textSecondary" component="p">
                        {props.description}
                    </Typography>
                </CardContent>
            </CardActionArea>
            <CardActions>
                <span style={{marginLeft: '10px'}}>
                    <EditModeNotation
                        removeNotation={props.removeNotation}
                        description={props.description}
                        notationsTitle={props.notationsTitle}
                        notationId={props.notationId}
                        changeNotationTitle={props.changeNotationTitle}
                        changeNotationDescription={props.changeNotationDescription}
                    />
                </span>
                <AlertDialogSlide
                    performAnAction={removeNotation}
                    alertTitleValue={"Удалить нотацию?"}
                    buttonValue={"Удалить"}/>
            </CardActions>
        </Card>
    );
})
