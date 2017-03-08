import React from 'react'
import {shallow} from 'enzyme'
import MineField from '../../src/examples/MineField'

describe('MineField', () => {
  let component

  beforeEach(() => {
    component = shallow(<MineField/>)
  })

  it('renders two LandMines', () =>
    component.find('LandMine').length.should.equal(2)
  )
})

