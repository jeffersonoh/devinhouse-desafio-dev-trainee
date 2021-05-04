import React from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route
} from 'react-router-dom';
import PagesIndex from './index/Index';
import { ThemeProvider, createMuiTheme } from '@material-ui/core';
import PagesCliente from './cliente/Cliente';
import PagesAgenda from './agenda/Agenda';
import Respostas from 'components/respostas/Respostas';

const Root = () => {
    const theme = createMuiTheme({
        palette:{
            primary: {
                main: "#b2dfdb"
            }
        }
    });

    return (
        <ThemeProvider theme={theme}>
            <Respostas />
            <Router>
                <Switch>
                    <Route path="/agenda" component={PagesAgenda} />
                    <Route path="/cliente" component={PagesCliente} />
                    <Route path="/" component={PagesIndex} />
                </Switch>
            </Router>
        </ThemeProvider>
    )
}
export default Root;