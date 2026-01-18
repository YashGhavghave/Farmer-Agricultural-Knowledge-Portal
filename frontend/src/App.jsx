import './App.css'
import Index from './Routes/Index.jsx'
import { ThemeProvider } from './Context/ThemeContext'


function App() {
  return (
    <ThemeProvider>
      <Index />
    </ThemeProvider>
  )
}

export default App
