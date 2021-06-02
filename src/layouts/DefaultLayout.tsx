import React from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';

const DefaultLayout = (props: TLayoutProps): JSX.Element => {
    return (
        <React.Fragment>
            <CssBaseline />
            <Container maxWidth="lg" style={{ minHeight: '100vh' }}>
                <Typography component="div" style={{ height: '5vh' }} />
                {props.children}
            </Container>
        </React.Fragment>
    );
};

export { DefaultLayout };
