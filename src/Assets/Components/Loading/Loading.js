import React from 'react'
import classes from './Loading.module.css';
import {PuffLoader} from 'react-spinners';
const Loading = () => {
  return (
    <div className={classes.Overlay}>
      <div>
        <PuffLoader color="#fff" speedMultiplier={5} />
      </div>
    </div>
  )
}

export default Loading;