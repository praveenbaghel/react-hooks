import React from 'react'
import "./Navigation.css"
import { Link } from 'react-router-dom'


const Navigation = () => {
  return (
    <div className='Nav'>
      <Link to = "/"><button className="logo"><h3>React-hooks</h3></button></Link>
      <Link to ="/usestate"><button className='item'>useState</button></Link>
      <Link to ="/usereducer"><button className='item'>useReducer</button></Link>
      <Link to ="/useeffect"><button className='item'>useEffect</button></Link>
      <Link to ="/uselayouteffect"><button className='item'>useLayoutEffect</button></Link>
     <Link to ="/useref"> <button className='item'>useRef</button></Link>
      <Link to ="/usecontext"><button className='item'>useContext</button></Link>
      <Link to ="/usememo"><button className='item'>useMemo</button></Link>
      <Link to ="/usecallback"><button className="item">useCallback</button></Link>
      <Link to ="/useimperative"><button className="item">useImperative</button></Link>
    </div>
  )
}

export default Navigation
