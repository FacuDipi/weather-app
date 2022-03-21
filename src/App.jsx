import { ChakraProvider } from '@chakra-ui/react'
import Header from './components/header';
import Body from './components/body';

function App() {
  return (
    <ChakraProvider >
 
   <Header  />
  <Body/>
</ChakraProvider>
  )

  }

export default App;
