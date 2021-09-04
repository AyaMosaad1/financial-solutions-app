import React , {Fragment } from 'react';
import './App.css';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import Layout from './Components/Layout/Layout';
import LandingPage from './Components/Pages/LandingPage/LandingPage';
import SubmitPage from './Components/Pages/SubmitPage/SubmitPage';
import SectionOne from './Components/Pages/Questions/SectionOne';
import Answers from './Components/Pages/Answers/Answers';
import SectionTwo from './Components/Pages/Questions/SectionTwo';
import BookContextProvider from './context/questionContext';



function App() {
  return (

<Fragment>
 <Layout>
    <BrowserRouter>
      <Switch>
        <BookContextProvider>

          <Route exact path="/" >
              <LandingPage/> 
          </Route>
  
          <Route path="/sectionOne">
            <SectionOne />
          </Route>

          <Route path="/sectionTwo">
            <SectionTwo/>
          </Route>

          <Route path="/checkAnswers">
             <Answers/>
          </Route>

          <Route path="/Submited">
            <SubmitPage/>
          </Route>

        </BookContextProvider>

      </Switch>
     </BrowserRouter>
    </Layout>
</Fragment>

  );
}

export default App;
