import React, { useState } from 'react'

function ThirdMap(props) {
  const adding = () => {
    props.ans.answeared &&
      (props.array.correct == 1
        ? props.setMarkCounter(props.markCounter + 1)
        : props.setIncMarkCounter(props.incMarkCounter + 1))

    props.ans.answeared = false
  }
  return (
    <div
      className={
        props.ans.answeared
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
