import "./style/QuoteBox.css"
import React from 'react'

function Phrase({phrase}) {
  return (
    <article className="quoteBox__phrase">
    <p>{phrase}</p>
  </article>
  )
}

export default Phrase