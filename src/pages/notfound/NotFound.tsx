import { Button } from '@material-ui/core';
import React from 'react';
import { Link } from 'react-router-dom';
import { DefaultLayout } from '../../layouts';

const NotFound = (): JSX.Element => {
    return (
        <DefaultLayout>
            <>
                <div>Not Found 404</div>
                <br />
                <br />
                <br />
                <Button variant="contained" color="secondary" component={Link} to="/">
                    Home
                </Button>
            </>
        </DefaultLayout>
    );
};

export default NotFound;
