import React from 'react'
import T from 'prop-types'

// values might be ['X', '', 'O'] for example
export const TicTacToeRow = props =>
  <tr>
    {props.values.map((value, i) =>
      <td key={i}>{value}</td>
    )}
  </tr>

TicTacToeRow.propTypes = {
  values: T.arrayOf(T.string).isRequired
}

const TicTacToe = props =>
  <table className='table-striped table-bordered'>
    <tbody>
    {props.valueRows.map((values, i) =>
      <TicTacToeRow key={i} values={values}/>
    )}
    </tbody>
  </table>

TicTacToe.propTypes = {
  valueRows: T.arrayOf(T.arrayOf(T.string)).isRequired
}

export default TicTacToe
