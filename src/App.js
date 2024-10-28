import React, { useEffect, useState } from 'react'
import './App.css'
import Header from './Components/Header';
import News from './Components/News';
import Info from './Components/Info';

const App = () => {
  const [val, setVal] = useState();
  const [inp, setInp] = useState();
  const changeFun = (e) => {

    setInp(e.target.value)
  }
  const fatchFun = async () => {
    try {
      let fetching = await fetch(`https://hn.algolia.com/api/v1/search?query=${inp}`)
      let Api = await fetching.json();
      setVal(Api.hits)
    } catch (error) {
      console.log(error)
    }

  }
  useEffect(() => {
    fatchFun();
  })
  return (
    <>
      <div className="appMain">
        <Header cFun={changeFun} />
        <Info/>
        <div className="mainDiv">
          <div className="news">
            {val && val.map((value) => {
              return (<News {...value} />)
            })}
          </div>
        </div>
      </div>
    </>
  )
}

export default App