import { useState } from "react"
import CardBack from "./components/CardBack"
import CardFront from "./components/CardFront"
import Form from "./components/Form"
import SuccessNotification from "./components/SuccessNotification";

const initialState={
  cardName: '',
  cardNumber: '',
  expMonth: '',
  expYear: '',
  securityCode: ''
};

function App() {

  const [dataCard, setDataCard] = useState(initialState);
  const [success, setSuccess] = useState(false);
  //console.log(dataCard.cardName)
  return (
    <div className='font-spaceGrotesk'>
     <div className="relative md:flex">
      <header className="md:basis-4/12">
        <img src="/images/bg-main-mobile.png" alt="fondo pantalla principal"
          className='w-full h-64 md:h-screen '/>
      </header>
      <CardBack securityCode={dataCard.securityCode} />
      <CardFront dataCard={dataCard} />
      {success ? <SuccessNotification setSuccess={setSuccess} setDataCard={setDataCard} /> 
        : 
        <Form setDataCard={setDataCard} dataCard={dataCard} setSuccess={setSuccess} />}
     </div>
    </div>
    )
}

export default App
