import React, { Fragment } from 'react';
import classes from './Layout.css';
import { 
Navbar , 
Container ,
Card
} from 'react-bootstrap';

const layout = ( props ) => (
    <Fragment>
        <Navbar expand="lg" variant="light" bg="light">
        <Container>
            <Navbar.Brand as="h3">Xpovi</Navbar.Brand>
        </Container>
        </Navbar>
        <main className={classes.Content}>
            {props.children}
        </main>

        <Card className = "fixed-bottom text-center" variant="light" bg="light">
        <Card.Header as="h5" className="pt-3">Xpovi © 2021 Copyright. </Card.Header>
        </Card>
    </Fragment>
);

export default layout;