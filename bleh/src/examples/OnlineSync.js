import React, {useEffect} from 'react'
import {useOnlineStatus, usePrevious} from 'react-hookedup'

export default function OnlineSync() {
    const {online} = useOnlineStatus()
    const prevOnline = usePrevious(online)
    
    useEffect(() => {
        if (prevOnline === false && online === true) {
            alert('syncing data')
        }
    }, [prevOnline, online])

    return <div>you are {online ? 'online' : 'not online dummy'}!!!</div>
}