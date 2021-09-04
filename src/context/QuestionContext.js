import React , { createContext , useState} from 'react';

export const QuestionContext = createContext();

const QuestionContextProvider =  (props) => 
{
const [ questionContext , setquestionContext ] = useState('');

    const answerQuestion  = ( question , answer ) => {
        if (questionContext.length >= 1 ){
            let filteredquestionContext = questionContext.filter( a => a.question !== question)
            setquestionContext ([...filteredquestionContext   , { question , answer }])   
        }
    else {
        setquestionContext ([...questionContext  , { question , answer }])   
    }
    };

    return (
        <QuestionContext.Provider value = {{ questionContext  , answerQuestion }}>
            {props.children}
        </QuestionContext.Provider>
    )
};

export default QuestionContextProvider;

