import React, { Fragment } from 'react';
import { Container , Alert , Row , Col } from 'react-bootstrap';
import {  Link  } from 'react-router-dom';

const submitPage = (props) => (
<Fragment>
<Container>

    <Row>
    <Col>
        <Alert variant="success text-center mt-4">
            <Alert.Heading> Hey, nice to use it </Alert.Heading>
            <p>
            {props.message}
            </p>
            </Alert>
        </Col>
    </Row>

    <Row>
        <Col>
        <main className="text-center mt-8">
        <h1 className="mt-4">  Financial Solutions </h1>
            <p className="lead"> Just answer a questionnaire and a business plan will be generated for your startup.</p>
            <p className="lead">
            <Link className="btn btn-lg btn-secondary" to="/">Back to Landing page</Link>
            </p>
            </main>
        </Col>
    </Row>

</Container>
</Fragment>

);

export default submitPage;