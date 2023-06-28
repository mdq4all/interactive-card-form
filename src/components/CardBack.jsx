
const CardBack = ({ securityCode}) => {
  return (
    <div className="absolute w-72 h-40 top-[35px] right-[5%] bg-back-card bg-contain bg-no-repeat
        md:w-96 md:h-52 md:top-[52%] md:right-0 md:left-[20%]">
       <article className="absolute top-[44%] right-[14%] text-[10px] text-almost-white md:text-[14px]">
            {securityCode ? securityCode : '000'}</article>
    </div>
  )
}

export default CardBack
