import React, {PropTypes as T} from 'react'
import classnames from 'classnames'

const Table = ({className, headers, children}) =>
  <table className={classnames('table-striped', className)}>
    <thead>
      <tr>
        {headers.map((label, i) =>
          <th>{label}</th>
        )}
      </tr>
    </thead>
    {children}
  </table>

Table.propTypes = {
  className: T.string,
  headers: T.arrayOf(T.string).isRequired
}

export default Table

