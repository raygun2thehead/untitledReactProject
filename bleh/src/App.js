import React from 'react';
import './App.css';
import Header from './Header'

export const ThemeContext = React.createContext ({ primaryColor: 'deepskyblue' })

const App = () => (
  <ThemeContext.Provider value={{ primaryColor: 'magenta'}}>
      <Header text="Hello Word" />
      <ThemeContext.Provider value={{ primaryColor: 'deepskyblue'}}>
        <Header text='this is test' />
      </ThemeContext.Provider>
  </ThemeContext.Provider>
)

export default App;
