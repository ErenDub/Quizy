import React, { useState } from 'react'
import ThirdMap from './thirdMap'
function SecondMap(props) {
  const [checking, setChecking] = useState(true)
  const [showAnswers, setShowAnswers] = useState(true)
  return (
    <div>
      <div className="question">{props.array.question}</div>
      <div className="answersFlex">
        {showAnswers &&
          props.array.answers.map((e) => (
            <ThirdMap
              array={e}
              markCounter={props.markCounter}
              setMarkCounter={props.setMarkCounter}
              checking={checking}
              setChecking={setChecking}
            />
          ))}
      </div>
    </div>
  )
}

export default SecondMap
