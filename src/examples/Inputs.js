import React, {PropTypes as T} from 'react'

const Inputs = ({id, description, onDescriptionChanged, onSubmit}) =>
  <form onSubmit={onSubmit}>
    <div className='form-group'>
      <label>ID:</label>
      <input type='text' className='form-control' value={id}/>
    </div>
    <div className='form-group'>
      <label>Description:</label>
      <input type='text' className='form-control' value={description} onChange={onDescriptionChanged}/>
    </div>
    <button className='btn btn-primary' type='submit'>Submit</button>
  </form>

Inputs.propTypes = {
  id: T.string.isRequired,
  description: T.string.isRequired,
  onDescriptionChanged: T.func.isRequired,
  onSubmit: T.func.isRequired
}

export default Inputs
