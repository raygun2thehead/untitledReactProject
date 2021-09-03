import React, {useEffect} from 'react'

export default function LifecycleHooksWithEffect() {
    useEffect(() => {
        console.log('lifecycle mounted with effect')
        return () => console.log('lifecyccle unmounting with effect')
    }, [])

    return <div>console/click</div>
}