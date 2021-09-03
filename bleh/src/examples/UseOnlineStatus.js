import React from 'react'
import {useOnlineStatus} from 'react-hookedup'

export default function UseOnlineStatus() {
    const {online} = useOnlineStatus()

    return <div>you are {online ? 'online' : 'offfline'}!</div>
}