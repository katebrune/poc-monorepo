import React, { FunctionComponent} from 'react'

export interface MyComponentProps {}

export const MyComponent: FunctionComponent<MyComponentProps> = () => {
    return <p>Hello, World!</p>
}
