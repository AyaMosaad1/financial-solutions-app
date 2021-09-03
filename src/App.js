import React , {Fragment } from 'react';
import './App.css';

import Layout from './Components/Layout/Layout';
import LandingPage from './Components/Pages/LandingPage/LandingPage';
import SubmitPage from './Components/Pages/SubmitPage/SubmitPage';
import Answers from './Components/Pages/Answers/Answers';


function App() {
  return (

<Fragment>
 <Layout>

<LandingPage/>
<Answers/>
{/* <SubmitPage/> */}

</Layout>
</Fragment>

  );
}

export default App;
