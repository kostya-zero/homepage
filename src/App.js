import React from 'react';
import { ChakraProvider } from '@chakra-ui/react';
import theme from './theme/theme';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Home from './pages/Home';
import NotFound from './pages/NotFound';
import Projects from './pages/Projects';
import Workspace from './pages/Workspace';

function App() {
    return (
        <ChakraProvider theme={theme}>
        <Router>
            <Routes>
                <Route path='/' element={<Home/>} />
                <Route path='/projects' element={<Projects/>} />
                <Route path='/workspace' element={<Workspace/>} />
                <Route path='*' element={<NotFound/>}/>
            </Routes>
        </Router>
        </ChakraProvider>
    );
}

export default App;
