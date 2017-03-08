import Name from './Name'
import TicTacToeExample from './TicTacToeExample'
import TableExample from './TableExample'
import InputsExample from './InputsExample'
import JsxFree from './JsxFree'
import SearchField from './SearchField'

const all = {
  component: Name,
  composition: TicTacToeExample,
  children: TableExample,
  binding: InputsExample,
  noJsx: JsxFree,
  lifeCycleMethods: SearchField
}

export default all

