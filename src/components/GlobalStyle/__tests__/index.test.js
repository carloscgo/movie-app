import React from 'react'
import { render } from '@testing-library/react'

import GlobalStyle from '..'

const getRenderedComponent = ({ ...args }) => render(<GlobalStyle {...args} />)

describe('<GlobalStyle/>', () => {
  it('Must render the component', () => {
    const container = getRenderedComponent({})

    expect(container.baseElement).toMatchSnapshot()
  })
})
