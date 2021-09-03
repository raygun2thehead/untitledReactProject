import React, {useState, useEffect} from 'react'

export default function TimeoutWithEffect() {
    const [ready, setReady] = useState(false)

    useEffect(() => {
        const timeout = setTimeout(() => setReady(true), 5000)
        return () => clearTimeout(timeout)
    })

    return <div>{ready ? 'readys' : 'wait more...'}</div>
}