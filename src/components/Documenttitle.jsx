import React,{useEffect} from 'react'

const Documenttitle = (count) => {
  useEffect(() => {
    document.title = `The count is ${count}`
  },[count])
}

export default Documenttitle
