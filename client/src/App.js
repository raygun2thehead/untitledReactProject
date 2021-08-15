import React, { useEffect, useReducer, useState } from 'react'
import PostList from './post/PostList'
import CreatePost from './post/CreatePost'
import UserBar from './user/UserBar'
import appReducer from './reducers'
import Header from './Header'
import { ThemeContext, StateContext } from './contexts'
import ChangeTheme from './ChangeTheme'

const defaultPosts = [
  { title: "React Hooks", content: "The greatest thing since sliced bread", author: "blehbleh" },
  { title: "React Moops", content: "The worst thing since sliced bread", author: "blehbleah" }
]

export default function App() {
  const [ theme, setTheme ] = useState({
    primaryColor: 'deepskyblue',
    secondaryColor: 'chartreuse'
  })

  const [ state, dispatch ] = useReducer(appReducer, { user: '', posts: defaultPosts })
  const { user, posts } = state

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
      <Header text='Reac Moops blah' />
      <ChangeTheme theme={theme} setTheme={setTheme} />
      <UserBar />
      <br />
      {user && <CreatePost />}
      <br />
      <hr />
      <PostList />
    </div>
    </ThemeContext.Provider>
    </StateContext.Provider>
  )
}