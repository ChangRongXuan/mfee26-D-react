import React from 'react';

function TagCheckboxArea(props) {
  const { value, handleCheckedArea, areas } = props
  return (
    <>
      <div className="checkbox">
        <label>
          <input
            type="checkbox"
            className="icheck"
            value={value}
            checked={areas.includes(value)}
            onChange={handleCheckedArea}
          />{' '}
          {value}
        </label>
      </div>
    </>
  )
}

export default TagCheckboxArea;