import React from 'react'; 
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import Home from './components/Home';

const App = () => {
       return (
            <Router>

               <Routes>

                <Route exact path='/' element={<Home />} /> 
                <Route path='/search' element={<Home />} /> 


               </Routes>

            </Router>



       )
 
  
}

export default App;
