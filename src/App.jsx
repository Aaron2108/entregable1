import { useState } from 'react';
import './App.css';
import dbQuotes from './db/quote.json';
import {getRandom} from './utils/random';
import QuoteBox from './components/QuoteBox';
import Phrase from './components/Phrase';

const bgImages = ["bg1" ,"bg2" ,"bg3" ,"bg4"]


function App() {
  const [quote, setQuote] = useState(getRandom(dbQuotes))
  const [bgImage, setBgImage] = useState(getRandom(bgImages))

  const handleChangeQuote = () => {
    setQuote(getRandom(dbQuotes))
    setBgImage(getRandom(bgImages))
  };

  return <main className={`app ${bgImage}`}>
      <section className='app__container'>
        <h1>Fortune Cookies</h1>
          
          <div className="containter">
          <QuoteBox handleChangeQuote={handleChangeQuote}/>
          <Phrase phrase={quote.phrase}/>
          </div>
        <footer>
          <h3>Fuente: {quote.author} </h3>
        </footer>
      </section>

    </main>
  
}

export default App
