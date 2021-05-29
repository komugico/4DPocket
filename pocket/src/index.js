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

ReactDOM.render(
    <React.StrictMode>
        <BrowserRouter basename={process.env.PUBLIC_URL}>
            <DBTestRouter db={db} />
        </BrowserRouter>
    </React.StrictMode>,
    document.getElementById('root')
);
