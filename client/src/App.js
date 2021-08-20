import React, { useEffect, useReducer, useState } from 'react'
import HeaderBar from './pages/HeaderBar'
import HomePage from './pages/HomePage'
import appReducer from './reducers'
import { ThemeContext, StateContext } from './contexts'

export default function App() {
  const [theme, setTheme] = useState({
    primaryColor: 'deepskyblue',
    secondaryColor: 'chartreuse'
  })

  const [state, dispatch] = useReducer(appReducer, { user: '', posts: [], error: '' })
  const { user, error } = state

  useEffect(() => {
    if (user) {
      document.title = `${user} - Reac Moops blah`
    } else {
      document.title = `Reac Moops blah`
    }
  }, [user])

  return (
    <StateContext.Provider value={{ state, dispatch }}>
      <ThemeContext.Provider value={theme}>
        <div style={{ padding: 8 }}>
          <HeaderBar setTheme={setTheme} />
          <br />
          <hr />
          <HomePage />
        </div>
      </ThemeContext.Provider>
    </StateContext.Provider>
  )
}