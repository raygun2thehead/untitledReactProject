import React from 'react'

export const ThemeContext = React.createContext({
    primaryColor: 'deepskyblue',
    secondaryColor: 'chartreuse'
})

export const StateContext = React.createContext({
    state: {},
    dispatch: () => {}
})