import React from 'react';
import './App.css';
import {AppBar, Container, Toolbar, Typography} from "@material-ui/core";
import {Editing} from '../components/notations/editing';
import {Route, Switch} from 'react-router-dom';
import {NotationsList} from "../components/notations/notationsList";

function App() {

  return (
    <div className="App">
        <AppBar  color={"default"} position="static">
            <Toolbar>
                <Typography  variant="h5">
                    Notations
                </Typography>
            </Toolbar>
        </AppBar>
        <Container fixed>
            <Switch>
                <Route exact path={'/'} render={() => <NotationsList/>}/>
                <Route path={'/editing'} render={() => <Editing/>}/>

                <Route path={'/404'} render={() => <h1>404: PAGE NOT FOUND</h1>}/>
            </Switch>
        </Container>
      </div>
  );
}

export default App;
