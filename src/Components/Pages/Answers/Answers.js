import React, { useContext  , useCallback ,useState} from 'react';
import { QuestionContext  } from './../../../context/questionContext';
import { Container , Card  } from 'react-bootstrap';
import {  Link  } from 'react-router-dom';
import SubmitPage from '../SubmitPage/SubmitPage';

function Answers() {
const { questionContext } = useContext(QuestionContext);

const [MessgaeRes , setMessgaeRes] = useState(null)

const handleFormSubmit = useCallback(
    (event) => {
      event.preventDefault()
        fetch('/submited', {
        method: 'POST',
        body: JSON.stringify({
            questionContext,
        }),
      })
        .then((res) => res.json())
        .then(setMessgaeRes)
    },
    [questionContext]
  )


  if (MessgaeRes) {
    return (
      <div>
      <SubmitPage message={MessgaeRes.message}/>
      </div>
    )
  }

return questionContext.length > 1 ? (
    <div>
            <Container>
                  <h2 className = "text-center mt-3">  Just check your answers before submitting. </h2>
     {   
     questionContext.map((answer , index)=>
            <Card className = "mt-2"  key={index}>
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
            onClick = { handleFormSubmit } 
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


