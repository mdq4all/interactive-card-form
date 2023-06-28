
const CardFront = ({ dataCard }) => {

    const {cardName, cardNumber, expMonth, expYear} = dataCard;
    return (
    <div className="absolute w-72 h-40 top-[125px] right-[18%] bg-front-card 
            bg-contain bg-no-repeat text-almost-white tracking-wider 
            md:w-96 md:h-52 md:top-[25%] md:right-0 md:left-[10%]">
        <img src="/images/card-logo.svg" alt="logo tarjeta"
            className="absolute top-[10%] left-[7%] w-14" />
       <article className="absolute top-[52%] left-[7%] text-[20px] md:text-[26px]">
            {cardNumber ? cardNumber.toString().replace(/(.{4})/g, '$1 ') : '0000 0000 0000 0000'}</article>
       <article className="absolute bottom-[11%] left-[7%] text-[10px] uppercase md:text-[14px]">
            {cardName ? cardName : 'jane appleseed'}</article>
       <article className="absolute bottom-[11%] right-[8%] text-[10px] md:text-[14px]">
            {expMonth ? expMonth : '00'}/{expYear ? expYear.toString().slice(-2) : '00'}</article>
    </div>
   )
}

export default CardFront
