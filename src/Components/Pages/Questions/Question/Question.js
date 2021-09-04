import React , {useState} from 'react';
import { Container , Row , Col , Card , Button , Form } from 'react-bootstrap';

export default function Question(props){
    const [number, setNumber] = useState();

    const handleNumber= (e) => {
      e.preventDefault();
      const value = e.target.value.replace(/\D/g, "");
      setNumber(value);
    };

  return(
    <Container>
        <Row>
        <Col>
            <Card className="mt-2 text-center">
            <Card.Header as="h3" className="p-4 text-weight-bold"> {props.question} </Card.Header>
            <Card.Body>                
                        { 
                            props.answers.map((answer , key )=>
                            <Button 
                            key={key}
                            variant="outline-secondary font-weight-bold mx-4"
                            value ={answer} onClick = {() =>  props.callBack( props.question , answer )}> 
                            <strong> {answer} </strong> </Button>
                            )}

                        {
                            props.withInput === "yes" && props.answer === "yes" ? 
                            <Form.Control
                             size="lg" type="text"
                              placeholder={props.placeholder}
                               className="text-center"
                               value={number} 
                               onChange={(e) =>  { handleNumber(e); props.callBack( props.question , e.target.value ) }}
                            />  : null
                        }

                        
                        {
                            props.withInput === "yes" 
                            && props.answer === "no" ? 
                            <Form.Control size="lg" type="text" placeholder={props.placeholder} className="text-center" disabled /> : null
                        }

                </Card.Body>
                </Card>
            </Col>
            </Row>
     </Container>
 
)
};

