import "./style/QuoteBox.css"
const QuoteBox = ({handleChangeQuote}) => {
  return (
    <section className="quoteBox">
    <button className="quoteBox__btn" onClick={handleChangeQuote}>Try your luck</button>

  </section>
  )
}

export default QuoteBox