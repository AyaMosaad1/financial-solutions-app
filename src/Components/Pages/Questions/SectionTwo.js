import React , {useState , useContext } from 'react';
import { Container , Row , Col , Card , Button } from 'react-bootstrap';
import {  Link  } from 'react-router-dom';
import   Question from './Question/Question';
import { QuestionContext  } from '../../../context/questionContext';


var sectionTwo = [
    {id: '1' ,  question: '1. Did you have an investment?', answers: ['yes' , 'no']},
    {id: '2' ,  question: '2. how much was the investment?', answers: []}
];

export default function SectionTwo(){

const { answerQuestion  } = useContext(QuestionContext);

const [state, setstate] = useState('');
const [answer  , setAnswer] = useState('');


let callBackSubmit = (  question , answer ) => answerQuestion( question , answer );

return(
<Container>
   <Row className=" lead mt-4 text-center">
        <h2> Section Two </h2>
        <h6> Answer this questions </h6>
    </Row>

    <Row>
    <Col>
    <Card className="mt-4 text-center">
        <Card.Header as="h3" className="p-4"> {sectionTwo[0].question} </Card.Header>
        <Card.Body>                
        {  sectionTwo[0].answers.map((answer)=>
                <Button
                key="{answer}"
                variant="outline-secondary mx-4" 
                value ={answer}
                onClick = {(e) =>{ setstate(answer) ;  
                                   callBackSubmit(sectionTwo[0].question, answer );
                                    setAnswer(e.target.value) ;}}
                > <strong> {answer} </strong> </Button>
                )}
   </Card.Body>
   </Card>
    </Col>
    </Row>

 {state === 'yes' ? 

 ( 
   <Question 
    question ={sectionTwo[1].question} 
    answers = {sectionTwo[1].answers} 
    withInput ="yes" answer="yes" 
    placeholder ="only positive numbers" 
    callBack = { callBackSubmit }/>  
    )

:  <Question question ={sectionTwo[1].question} answers = {sectionTwo[1].answers} withInput ="yes" answer="no" placeholder ="only positive numbers" />
 }

        <Link 
        className="btn btn-lg btn-secondary mt-4 nextBtn mb-3" 
        to="/checkAnswers" >
            next
        </Link>

</Container>
)

};