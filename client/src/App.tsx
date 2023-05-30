import  './App.css'
import { ChakraProvider } from '@chakra-ui/react'
import { UserSignUpPage } from './pages/UserSignUpPage'


export  function App() {
	return (
		<ChakraProvider>
			<UserSignUpPage />
		</ChakraProvider>
	)
}

export default App
