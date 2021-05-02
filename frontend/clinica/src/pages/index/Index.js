import { Button } from '@material-ui/core';
import MenuTopBar from 'components/menu/TopBar';
import React, { Fragment } from 'react';

import { makeStyles } from '@material-ui/core/styles';
import { Link } from 'react-router-dom';

const useStyles = makeStyles((theme) => ({
    buttons: {
        width: "100%",
        height: 50,
        marginBottom: 8,
        fontWeight: "bolder"
    },
    menu: {
        maxWidth: "500px",
        marginTop: 70,
    },
    body: {
        display: "flex",
        alignItems: "top",
        justifyContent: "center",
        padding: 8,
        backgroundColor: "#e0f2f1",
        height: "100vh"
    }
}));

const PagesIndex = () => {
    const classes = useStyles();

    return (
        <Fragment>
            <MenuTopBar />
            <div className={classes.body}>
                <div className={classes.menu}>
                <Link to="/agenda" style={{ textDecoration: 'none' }}>
                    <Button variant="contained" color="primary" className={classes.buttons}>
                        Agendamento
                    </Button>
                    </Link>
                    <Link to="/cliente" style={{ textDecoration: 'none' }}>
                        <Button variant="contained" color="primary" className={classes.buttons}>
                            Cliente
                        </Button>
                    </Link>
                </div>

            </div>
        </Fragment>
    )
}

export default PagesIndex;