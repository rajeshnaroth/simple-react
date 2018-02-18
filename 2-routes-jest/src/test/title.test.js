import React from 'react'
import renderer from 'react-test-renderer'

import Title from '../js/header/title'

test('Title gets created', () => {
    const component = renderer.create(<Title />)
    expect(component.toJSON()).toMatchSnapshot()
})