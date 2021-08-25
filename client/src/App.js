import React, { useEffect, useReducer, useState } from 'react'
import {Router, View} from 'react-navi'
import {mount, route} from 'navi'
import HeaderBar from './pages/HeaderBar'
import HomePage from './pages/HomePage'
import PostPage from './pages/PostPage'
import appReducer from './reducers'
import { ThemeContext, StateContext } from './contexts'

const routes = mount({
  '/': route({ view: <HomePage />}),
  '/view/:id': route(req => {
    return { view: <PostPage id={req.params.id} /> }
  })
})

export default function App() {
  const [theme, setTheme] = useState({
    primaryColor: 'deepskyblue',
    secondaryColor: 'chartreuse'
  })

  const [state, dispatch] = useReducer(appReducer, { user: '', posts: [], error: '' })
  const { user } = state

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
        <Router routes={routes}>
        <div style={{ padding: 8 }}>
          <HeaderBar setTheme={setTheme} />
          <br />
          <hr />
          <View />
        </div>
        </Router>
      </ThemeContext.Provider>
    </StateContext.Provider>
  )
}