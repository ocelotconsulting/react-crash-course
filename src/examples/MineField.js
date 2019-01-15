import React from 'react'
import LandMine from './LandMine'

const MineField = () =>
  <div>
    <LandMine message='pow'/>
    <LandMine message='bam'/>
  </div>

MineField.propTypes = {}

export default MineField
