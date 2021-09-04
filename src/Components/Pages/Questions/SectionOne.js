import React , {useState , useContext } from 'react';
import { Container , Row , Col , Card , Button } from 'react-bootstrap';
import {  Link  } from 'react-router-dom';
import Question from './Question/Question';
import { QuestionContext  } from '../../../context/questionContext';

var sectionOne = [
    {id: '1' ,  question: '1. Is your business model B2C or B2B or both?', answers: ['B2C' , 'B2B' , 'both']},
    {id: '2' ,  question: '2. Do you target all age brackets?', answers: ['yes' , 'no' ]},
    {id: '3' ,  question: '3. Do you target all industries?', answers: ['yes' , 'no' ]}
];


export default function SectionOne(){

const { answerQuestion  } = useContext(QuestionContext);

const [state, setstate] = useState('');
const [answer  , setAnswer] = useState('');

let callBackSubmit= ( question , answer) => answerQuestion( question , answer );

return(
<Container>
      <Row className=" lead mt-4 text-center">
         <h2> Section one </h2>
         <h6> Answer this questions </h6>
      </Row>

      <Row>
      <Col>
      <Card className="mt-4 text-center">
         <Card.Header as="h3" className="p-4"> { sectionOne[0].question} </Card.Header>
         <Card.Body>                
         { sectionOne[0].answers.map((answer)=>
                  <Button 
                  variant="outline-secondary mx-4" 
                  key="{answer}"
                  value ={answer}
                   onClick = {(e) =>{ setstate(answer) ;  
                                     callBackSubmit(sectionOne[0].question, answer );
                                       setAnswer(e.target.value) ;}}> 
                   <strong> {answer} </strong> </Button>
                  
                 )}
      </Card.Body>
      </Card>
      </Col>
    </Row>

    {state === 'B2B' ? (
       <Question question ={sectionOne[1].question} answers = {sectionOne[1].answers} callBack = { callBackSubmit} />
       )
: null }

    {state === 'B2C' ? (
       <Question question ={sectionOne[2].question} answers = {sectionOne[2].answers} callBack = { callBackSubmit}/>
       )
: null }

  {state === 'both' ? (
    <div>
       <Question question ={sectionOne[1].question} answers = {sectionOne[1].answers} callBack = { callBackSubmit}/>
       <Question question ={sectionOne[2].question} answers = {sectionOne[2].answers} callBack = { callBackSubmit}/>
    </div>
       )
: null }

 <Link className="btn btn-lg btn-secondary mt-4 nextBtn mb-3" to="/sectionTwo">next</Link>
</Container>

)
};