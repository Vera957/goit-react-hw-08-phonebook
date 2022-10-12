import React from 'react';
import ReactDOM from 'react-dom/client';
import { App } from 'components/App';
import { Provider } from 'react-redux';
import './index.css';
import { ThemeProvider } from 'styled-components';
import { theme } from './components/theme';
import { store, persistor } from './redux/store';
import { BrowserRouter } from 'react-router-dom';
import { PersistGate } from 'redux-persist/integration/react';
import { ChakraProvider } from '@chakra-ui/react';
import { Box } from "@chakra-ui/react";
import { extendTheme } from "@chakra-ui/react"


const themeChakra= extendTheme({
  styles: {
    global: {
      'html, body': {
        color: 'black',
        lineHeight: 'tall',
        bg: 'grey.500',
        //maxW: '50vw',
        ml: 'auto',
        mr: 'auto',
      },
      '*':{
        p: '2px',
        gap: '5px'

      },
      'input': {
        //placeholder: 'medium size, smallsize',
        //size: 'md sm',
        border: '2px',
        p: '2px',

      },
      'button': {
        border: '2px',
        p: '2px',
        bg: 'lightgreen'
      },
    
    },
  },
})



ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <PersistGate loading={null} persistor={persistor}>
          <BrowserRouter basename="goit-react-hw-08-phonebook">
            <ChakraProvider theme={themeChakra}>
              <Box w="100%"
                bgGradient="radial(red.300, green.400, pink.200)"
                p="2"
                ml='auto'
                mr='auto'
              ><App />
              </Box>
            </ChakraProvider>
          </BrowserRouter>
        </PersistGate>
      </ThemeProvider>
    </Provider>
  </React.StrictMode>
);
/**/