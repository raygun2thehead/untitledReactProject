import React, {useContext} from 'react'
import CreatePost from '../post/CreatePost'
import UserBar from '../user/UserBar'
import Header from '../Header'
import ChangeTheme from '../ChangeTheme'
import {ThemeContext, StateContext} from '../contexts'

export default function HeaderBar ({setTheme}) {
    const theme = useContext(ThemeContext)

    const {state} = useContext(StateContext)
    const {user} = state
    
    return (
        <div>
        <Header text='Reac Moops blah' />
        <ChangeTheme theme={theme} setTheme={setTheme} />
        <React.Suspense fallback={'Loading...'}>
          <UserBar />
        </React.Suspense>
        <br />
        {user && <CreatePost />}
        </div>
    )
}