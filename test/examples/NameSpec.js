import React from 'react'
import { shallow } from 'enzyme'
import Name from '../../src/examples/Name'

describe('Name', () => {
  let component, props

  beforeEach(() => {
    props = {
      prompt: 'Your name please'
    }
    component = shallow(<Name {...props}/>)
  })

  const addFieldSuite = (property, i) => {
    describe(`${property} input field`, () => {
      const input = () => component.find('input').at(i)

      const value = 'test value'

      it('updates component on state change', () => {
        component.setState({ [property]: value })

        input().prop('value').should.equal(value)
      })

      it('updates state when component changes', () => {
        input().simulate('change', { target: { value } })

        component.state(property).should.equal(value)
      })
    })
  }

  addFieldSuite('firstName', 0)
  addFieldSuite('lastName', 1)
})
