import React from 'react'
import {useOnMount, useOnUnmount} from 'react-hookedup'

export default function UseLifecycleHooksSeparate() {
    useOnMount(() => console.log('separte lifecycle mounted'))
    useOnUnmount(() => console.log('separate lifecycle unmounting'))

    return <div>console/buttons</div>
}