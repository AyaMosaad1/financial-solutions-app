import React from 'react';
import { Container , Row , Col  } from 'react-bootstrap';
import {  Link  } from 'react-router-dom';

const landingPage = () => (
    <Container>
        <Row>
            <Col>
                <main className="text-center mt-8">
                    <h1 className="mt-4"> Financial Solutions </h1>
                    <p className="lead">Just answer a questionnaire and a business plan will be generated for your startup.</p>
                    <p className="lead">
                        <Link className="btn btn-lg btn-secondary" to="/sectionOne"> generate business plan </Link>
                    </p>
                </main>
            </Col>
        </Row>
    </Container>
);
export default landingPage;