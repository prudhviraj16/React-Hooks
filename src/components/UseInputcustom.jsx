import React from 'react'

const UseInputcustom = (initialValue) => {

    const [value,setValue] = React.useState(initialValue)

    const reset = () => {
        setValue(initialValue)
    }

    const bind = {
        value,
        onChange : e => {
            setValue(e.target.value)
        }
    }

  return [value,reset,bind]
}

export default UseInputcustom
