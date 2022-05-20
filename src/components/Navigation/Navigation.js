import React from 'react';
import { AppBar, Container, Toolbar, Typography } from '@mui/material';

const Navigation = () => {
    return (
        <Container maxWidth="sm">
            <AppBar>
                <Toolbar>
                    <Typography variant="6">
                        Explore the space
                    </Typography>
                </Toolbar>
            </AppBar>
        </Container>
    );
};

export default Navigation;