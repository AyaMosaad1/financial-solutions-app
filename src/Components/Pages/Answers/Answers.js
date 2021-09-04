import React, { useContext  , useCallback } from 'react';
import { QuestionContext  } from '../../../context/questionContext';
import { Container , Card  } from 'react-bootstrap';
import {  Link ,useHistory  } from 'react-router-dom';

function Answers() {
const { questionContext } = useContext(QuestionContext);


return questionContext.length > 1 ? (
    <div>
            <Container>
                  <h2 className = "text-center mt-2">  Just check your answers before submitting.</h2>
     {   
     questionContext.map((answer)=>
            <Card className = "mt-4"  key={answer} >
                          <Card.Body>
                              <blockquote className="blockquote mb-0">
                              <p>
                              {answer.question}
                              </p>
                              <footer className="blockquote-footer">
                              {answer.answer}
                              </footer>
                              </blockquote>
                         </Card.Body>
            </Card> 
             )}


            <Link 
            className="btn btn-lg btn-secondary mt-4 nextBtn mb-3" 
            to="/submited"
            > Submit </Link>
        </Container>
        </div>

)
:
(
    <div>
        <Container>
        <Card className = "mt-4">
                          <Card.Body>
                              <blockquote className="blockquote mb-0">
                                  <p className="lead text-center">
                              <strong >     
                                 No answers yet! , Just go Back and answer the questions.
                              </strong>
                              </p>
                              </blockquote>
                         </Card.Body>
            </Card>
        </Container>

    </div>
)
};

export default Answers;
