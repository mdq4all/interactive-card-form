
const SuccessNotification = ({ setSuccess }) => {
    const handleClick = () => setSuccess(false);
  return (
    <div className="flex flex-col justify-center items-center w-full mt-20 px-7">
      <img src="/images/icon-complete.svg" alt="logo de aceptacion"
        className="w-20 pb-7" />
      <p className="text-[26px] pb-3 tracking-widest">THANK YOU!</p>
      <p className="text-dark-grayish-violet text-[18px] pb-10 ">
            {"We've added your card details"}</p>
      <button onClick={handleClick}
        className="w-full bg-very-dark-violet text-white 
                    p-3 rounded-lg text-[18px] cursor-pointer md:w-96">Continue</button>
    </div>
  )
}

export default SuccessNotification
