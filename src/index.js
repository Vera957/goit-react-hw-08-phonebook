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
import { mode } from '@chakra-ui/theme-tools';
import { Box } from "@chakra-ui/react"


const styles = {
  global: (props) => ({
    body: {
      fontFamily: 'body',
      color: mode('gray.800', 'whiteAlpha.900')(props),
      //bg: mode('white', 'gray.800')(props),
      lineHeight: 'base',
      W: "960px",
      mH: '200px'
    },
    '*::placeholder': {
      color: mode('gray.400', 'whiteAlpha.400')(props),
      p: 2,
      m: 2,
    },
    '*, *::before, &::after': {
      borderColor: mode('gray.200', 'whiteAlpha.300')(props),
      wordWrap: 'break-word',
    },
    '*': {
      m: 2,
    },
    'input': {
      border: '1px'
    }
  }),
}


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <PersistGate loading={null} persistor={persistor}>
          <BrowserRouter basename="goit-react-hw-08-phonebook">
            <ChakraProvider style={styles}>
              <Box w="50%"
                bgGradient="radial(gray.300, yellow.400, pink.200)"
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