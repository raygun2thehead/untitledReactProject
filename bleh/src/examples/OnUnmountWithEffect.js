import React, {useEffect} from 'react'

export default function OnUnmountWithEffect() {
    useEffect(() => {
        return () => console.log ('unmounting with effect')
    }, [])

    return <div>click the 'unmount' button abover and look at the console</div>
}