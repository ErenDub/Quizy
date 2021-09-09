import React, { useState, useEffect } from 'react'
import SecondMap from './secondMap'
import ThirdMap from './thirdMap'
function FirstMap(props) {
  const [markCounter, setMarkCounter] = useState(0)
  const [checking, setChecking] = useState(true)
  const [showAnswers, setShowAnswers] = useState(true)
  const [outputIndex, setOutputIndex] = useState(0)
  const [answearedCheck, setAnswearedCheck] = useState(
    props.array.questions[outputIndex].answeared,
  )
  useEffect(() => {
    markCounter === 0
      ? props.setMarkSummer(0)
      : props.setMarkSummer(props.markSummer + markCounter - (markCounter - 1))
  }, [markCounter])
  return (
    <div>
      <div className="topic">{props.array.topic}</div>
      {/* {props.array.questions.map((e) => (
        <SecondMap
          array={e}
          markCounter={markCounter}
          setMarkCounter={setMarkCounter}
        />
      ))} */}

      <div>
        <div className="question">
          {props.array.questions[outputIndex].question}
        </div>
        <div className="answersFlex">
          {showAnswers &&
            props.array.questions[outputIndex].answers.map((e) => (
              <ThirdMap
                array={e}
                markCounter={markCounter}
                setMarkCounter={setMarkCounter}
                answearedCheck={answearedCheck}
                setAnswearedCheck={setAnswearedCheck}
              />
            ))}
        </div>
      </div>

      {outputIndex > 0 ? (
        <button
          onClick={() => {
            props.array.questions[outputIndex].answeared = false
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
            props.array.questions[outputIndex].answeared = false
            setOutputIndex(outputIndex + 1)
          }}
        >
          Next
        </button>
      ) : (
        ''
      )}

      <div className="topicsum">
        {props.array.topic} - {markCounter}
      </div>
    </div>
  )
}

export default FirstMap
