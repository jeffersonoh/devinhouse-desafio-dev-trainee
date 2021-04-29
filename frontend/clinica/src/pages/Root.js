import React from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route
} from 'react-router-dom';
import PagesIndex from './index/Index';
import { ThemeProvider, createMuiTheme } from '@material-ui/core';

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
            <Router>
                <Switch>
                    <Route path="/" component={PagesIndex} />
                </Switch>
            </Router>
        </ThemeProvider>
    )
}
export default Root;