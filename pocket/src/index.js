/* ========================================================================== */
/* React-Redux                                                                */
/* ========================================================================== */
import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from "react-router-dom";

/* ========================================================================== */
/* Databases                                                                  */
/* ========================================================================== */
import db from './database/db';

/* ========================================================================== */
/* App Routers                                                                */
/* ========================================================================== */
import DBTestRouter from './apps/dbtest/DBTestRouter';
import HomeRouter from './apps/home/HomeRouter';

ReactDOM.render(
    <React.StrictMode>
        <BrowserRouter basename={process.env.PUBLIC_URL}>
            <HomeRouter />
            <DBTestRouter db={db} />
        </BrowserRouter>
    </React.StrictMode>,
    document.getElementById('root')
);
