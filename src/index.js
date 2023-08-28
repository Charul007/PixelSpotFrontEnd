import React, { useState } from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import { createContext } from 'react';
import Main from './Main';
import { ChakraProvider } from '@chakra-ui/react';

const root = ReactDOM.createRoot(document.getElementById('root'));


export const AppContext = createContext(null);

function App() {
    const [user, setUser] = useState(JSON.parse(localStorage.getItem('login')) || null);


    return (
        <AppContext.Provider value={{ user, setUser }}>

            <BrowserRouter>
                <Main />
            </BrowserRouter>

        </AppContext.Provider>
    )
}

root.render(
    <ChakraProvider>
        <App />
    </ChakraProvider>
)
