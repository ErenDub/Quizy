import React, { useState } from 'react'

function ThirdMap(props) {
  const adding = () => {
    localStorage.getItem(props.localAns)
      ? parseInt(localStorage.getItem(props.localAns)) != 0 &&
        (props.array.correct == 1
          ? props.setMarkCounter(props.markCounter + 1)
          : props.setIncMarkCounter(props.incMarkCounter + 1))
      : props.ans.answeared &&
        (props.array.correct == 1
          ? props.setMarkCounter(props.markCounter + 1)
          : props.setIncMarkCounter(props.incMarkCounter + 1))

    props.ans.answeared = false
    localStorage.setItem(props.localAns, 0)
  }
  return (
    <div
      className={
        localStorage.getItem(props.localAns)
          ? parseInt(localStorage.getItem(props.localAns)) == 0
            ? props.array.correct === 1
              ? ' correctans'
              : ' incorrectans'
            : 'values'
          : props.ans.answeared
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
