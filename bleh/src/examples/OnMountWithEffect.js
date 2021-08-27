import React, {useEffect} from 'react'

export default function OnMountWithEffect () {
    useEffect(() => console.log('mounted with effect'), [])

    return <div> look ate the control (K""</div>
}