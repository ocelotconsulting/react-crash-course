import React from 'react'
import Table from './Table'

const TableExample = () =>
  <Table headers={['Colors']}>
    <tr>
      <td>Red</td>
    </tr>
    <tr>
      <td>Green</td>
    </tr>
    <tr>
      <td>Blue</td>
    </tr>
  </Table>

TableExample.propTypes = {}

export default TableExample
