import React, { useState } from 'react'

function ThirdMap(props) {
  const adding = () => {
    props.answearedCheck &&
      props.setMarkCounter(props.markCounter + props.array.correct)
  }
  return (
    <div
      className={
        props.answearedCheck
          ? 'values'
          : props.array.correct === 1
          ? ' correctans'
          : ' incorrectans'
      }
      onClick={() => adding()}
    >
      {props.array.value}
    </div>
  )
}

export default ThirdMap
