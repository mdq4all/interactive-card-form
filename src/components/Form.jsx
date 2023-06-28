
import { Formik, Form, Field, ErrorMessage } from "formik"

const FormComponent = ({ setDataCard, setSuccess }) => {

     //Evita que se puedan escribir mas caracteres en el input 
      const handleOnKeyDown = (e, maxLength) => {
        const inputValue = e.target.value;
        
        if (e.target.value.length > maxLength) {
            e.target.value = inputValue.slice(0, maxLength);
        }
 
      };
      // Expresión regular para detectar números o caracteres especiales
      function containsNumbers(str) {
        const regex = /^\d+$/;
      
        return regex.test(str);
      }
   
  return (
    <Formik
        initialValues={{
            cardName: '',
            cardNumber: '',
            expMonth: '',
            expYear: '',
            securityCode: ''
        }}
        validate={(values) => {
            let errors = {};
            //Nombre vacio
            if (!values.cardName) {
                errors.cardName = "Can't be blank"
            } 
            //Numero de trajeta vacio
            if (!values.cardNumber) {
                errors.cardNumber = "Can't be blank";
            //Debe contener 16 digitos
            } else if (values.cardNumber.length !== 16)
                errors.cardNumber = "Must have 16 digits";
            //Evalua caracteres especiales y letras
              else if(!containsNumbers(values.cardNumber))  
                errors.cardNumber = "Wrong format, numbers only"
            //Mes de expiracion vacio
            if (!values.expMonth) {
                errors.expMonth = "Can't be blank";
            } else {
            //Mes mayor a 12
                   if (values.expMonth > '12') {
                    errors.expMonth = "Invalid Month";
                    }    
            }
            //Anio vacio
            if (!values.expYear) {
                errors.expYear = "Can't be blank";
                }
            //Evalua el codigo de seguridad en blanco
            if (!values.securityCode.toString()) {
                    errors.securityCode = "Can't be blank";
            }
            return errors;
        }}
        onSubmit={(value, { resetForm }) => {
                setDataCard(value)
                setSuccess(true);
                resetForm();
            }}
    >
    {/* {({ values, errors, touched, handleSubmit, handleChange, handleBlur }) => ( */}
    {({ errors, touched }) => (
        <Form className="mt-10 w-full p-8 md:flex md:justify-center md:items-center md:mt-0">
            <div className="max-w-[375px]">
                <label htmlFor="card-name" className="block uppercase text-[13px] tracking-widest py-2">
                    cardholder name</label>
                <Field 
                    type="text" 
                    id="card-name" 
                    name="cardName" 
                    placeholder="e.g. Jane Appleseed"
                    onKeyDown={(e) => handleOnKeyDown(e, 19)}
                    className={`w-full p-2 border-solid border-[1px] 
                        ${errors.cardName ? 'border-input-errors' : 'border-light-grayish-violet'} 
                        rounded-lg text-lg mb-2 focus:outline-none focus:border-very-dark-violet
                        cursor-pointer`}
                />
                <ErrorMessage name="cardName" component={() => (
                    <div className="error-class">{errors.cardName}</div>
                )}/>

                {/* {touched.cardName && errors.cardName && <div>{errors.cardName}</div>} */}
                <label htmlFor="card-number" className="block uppercase text-[13px] tracking-widest py-2">
                    card number</label>
                <Field 
                    type="text" 
                    id="card-number" 
                    name="cardNumber" 
                    placeholder="e.g. 1234 5678 9123 0000"
                    onKeyDown={(e) => handleOnKeyDown(e, 15)}
                    className={`w-full p-2 border-solid border-[1px] 
                    ${touched.cardName && errors.cardNumber ? 'border-input-errors' : 'border-light-grayish-violet'} 
                    rounded-lg text-lg mb-2 focus:outline-none focus:border-very-dark-violet
                    cursor-pointer`}
                />
                <ErrorMessage name="cardNumber" component={() => (
                    <div className="error-class">{errors.cardNumber}</div>
                )}/>

                {/*Alternativa a ErrorMessage*/}
                {/* {touched.cardNumber && errors.cardNumber && <div>{errors.cardNumber}</div>} */}

                <div className="flex w-full">
                    <div className="flex-1">
                        <label htmlFor="expiration-date" className="block uppercase text-[13px] tracking-widest py-2">
                            exp. date (mm/yy)</label>
                        <div className="flex">
                            <div className="">
                                <Field
                                    type="text" 
                                    name="expMonth" 
                                    id="expiration-date" 
                                    placeholder="MM"
                                    className={`w-[95%] p-2 border-solid border-[1px] 
                                        ${touched.expMonth && errors.expMonth ? 'border-input-errors' : 'border-light-grayish-violet'} 
                                        rounded-lg text-lg mb-2 mr-2 focus:outline-none focus:border-very-dark-violet
                                        cursor-pointer`}
                                />
                                <ErrorMessage name="expMonth" component={() => (
                                    <div className="error-class">{errors.expMonth}</div>
                                )}/>
                            </div>
                            <div className="">
                                <Field
                                    type="text" 
                                    name="expYear" 
                                    placeholder="YY"
                                    className={`w-[95%] p-2 border-solid border-[1px] 
                                    ${touched.expYear && errors.expYear ? 'border-input-errors' : 'border-light-grayish-violet'} 
                                    rounded-lg text-lg mb-2 mr-2 focus:outline-none focus:border-very-dark-violet 
                                    cursor-pointer`}                               
                                />
                                <ErrorMessage name="expYear" component={() => (
                                    <p className="error-class">{errors.expYear}</p>
                                )}/>
                            </div>
                        </div>
                    </div>
                    <div className="flex-1">
                        <label htmlFor="secCode" className="block uppercase text-[13px] tracking-widest py-2 ml-2">
                            cvc</label>
                        <Field
                            type="text" 
                            name="securityCode" 
                            id="secCode" 
                            placeholder="e.g. 123"
                            onKeyDown={(e) => handleOnKeyDown(e, 2)}
                            className={`w-[100%] p-2 border-solid border-[1px] 
                            ${touched.securityCode && errors.expMonth ? 'border-input-errors' : 'border-light-grayish-violet'} 
                            rounded-lg text-lg mb-2  focus:outline-none focus:border-very-dark-violet 
                            cursor-pointer`}                      
                        />
                        <ErrorMessage name="securityCode" component={() => (
                        <div className="error-class">{errors.securityCode}</div>
                    )}/>
                    </div>
                </div>
                <input type="submit" value="Confirm" className="w-full bg-very-dark-violet text-white 
                        p-3 rounded-lg text-[18px] mt-7 cursor-pointer" />
            </div>
        </Form>
    )}
    </Formik>
  )
}

export default FormComponent
