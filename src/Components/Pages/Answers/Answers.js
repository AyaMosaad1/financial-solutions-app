import React, { useContext  , useCallback } from 'react';
import { Container , Card  } from 'react-bootstrap';
import {  Link ,useHistory  } from 'react-router-dom';

function Answers() {

return  (
    <div>
            <Container>
    <h2 className = "text-center mt-3">  Just check your answers before submitting  </h2> 
        <div>
            <Card className = "mt-4">
                          <Card.Body>
                              <blockquote className="blockquote mb-0">
                              <p>
                              question
                              </p>
                              <footer className="blockquote-footer">
                              answer
                              </footer>
                              </blockquote>
                         </Card.Body>
            </Card>
        </div>
        <Link 
            className="btn btn-lg btn-secondary mt-4 nextBtn mb-3" 
            to="/submited"
            > Submit </Link>
        </Container>
        </div>

)
};

export default Answers;


