import React, { useState, useEffect } from 'react'
import ThirdMap from './thirdMap'
function FirstMap(props) {
  const [markCounter, setMarkCounter] = useState(0)
  const [incMarkCounter, setIncMarkCounter] = useState(0)
  const [outputIndex, setOutputIndex] = useState(0)
  const [answearedCheck, setAnswearedCheck] = useState(
    props.array.questions[outputIndex].answeared,
  )
  useEffect(() => {
    markCounter === 0
      ? props.setMarkSummer(props.markSummer)
      : props.setMarkSummer(props.markSummer + 1)
  }, [markCounter])
  useEffect(() => {
    incMarkCounter === 0
      ? props.setIncMarkSummer(props.incMarkSummer)
      : props.setIncMarkSummer(props.incMarkSummer + 1)
  }, [incMarkCounter])
  return (
    <div>
      <div className="topic">{props.array.topic}</div>
      <div>
        <div className="question">
          {props.array.questions[outputIndex].question}
        </div>
        <div className="answersFlex">
          {props.array.questions[outputIndex].answers.map((e) => (
            <ThirdMap
              array={e}
              markCounter={markCounter}
              setMarkCounter={setMarkCounter}
              incMarkCounter={incMarkCounter}
              setIncMarkCounter={setIncMarkCounter}
              ans={props.array.questions[outputIndex]}
            />
          ))}
        </div>
      </div>

      {outputIndex > 0 ? (
        <button
          onClick={() => {
            setOutputIndex(outputIndex - 1)
          }}
        >
          Back
        </button>
      ) : (
        ''
      )}
      {outputIndex < props.array.questions.length - 1 ? (
        <button
          onClick={() => {
            setOutputIndex(outputIndex + 1)
          }}
        >
          Next
        </button>
      ) : (
        ''
      )}

      <div className="topicsum">
        {props.array.topic} - სწორი: {markCounter} - არასწორი: {incMarkCounter}
      </div>
    </div>
  )
}

export default FirstMap
