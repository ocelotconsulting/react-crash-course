import React from 'react'
import TicTacToe from './TicTacToe'

const valueRows = [
  ['X', '', 'O'],
  ['', 'X', ''],
  ['', '', 'O']
]

const TicTacToeExample = () =>
  <TicTacToe valueRows={valueRows}/>

TicTacToeExample.displayName = 'TicTacToeExample'

TicTacToeExample.propTypes = {}

export default TicTacToeExample
