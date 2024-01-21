import { ChakraProvider } from '@chakra-ui/react'
import ReactDOM from 'react-dom/client'
import theme from './theme/theme.ts'
import App from './App.tsx'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <ChakraProvider theme={theme}>
    <App />
  </ChakraProvider>
)
