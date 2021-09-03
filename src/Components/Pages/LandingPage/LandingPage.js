import React, { Fragment } from 'react';
import { Container , Row , Col  } from 'react-bootstrap';
import {  Link  } from 'react-router-dom';

const landingPage = () => (
    <Fragment>
            <Container>
            <Row>

            <Col>
                <main className="text-center mt-8">
                    <h1 className="mt-4"> Financial Solutions </h1>
                    <p className="lead">Just answer a questionnaire and a business plan will be generated for your startup.</p>
                    <p className="lead">
                    </p>
                </main>
            </Col>
            </Row>
            </Container>
    </Fragment>
);

export default landingPage;