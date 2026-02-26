import './App.css'
import Index from './Routes/Index.jsx'
import { ThemeProvider } from './Context/ThemeContext'
import GlobalTranslator from './Components/GlobalTranslator.jsx'


function App() {
  return (
    <ThemeProvider>
      <GlobalTranslator />
      <Index />
    </ThemeProvider>
  )
}

export default App
