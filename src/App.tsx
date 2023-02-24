import { ThemeProvider } from 'styled-components'
import { defaultTheme } from './Styles/Themes/default'
import { GlobalStyle } from './Styles/global'
import { Router } from './Components/Router'
import { BrowserRouter } from 'react-router-dom'

function App() {
  return (
    <div>
      <ThemeProvider theme={defaultTheme}>
        <BrowserRouter>
          <Router />
          <GlobalStyle />
        </BrowserRouter>
      </ThemeProvider>
    </div>
  )
}

export default App
