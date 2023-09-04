import './CheckoutPersonalInfoForm.css';

const CheckoutPersonalInfoForm = () => {

    // const [customer, setCustomer] = useState({
    //     name: inputFields.
    // });

    // const handleCheckoutInput = (event) => {
    //     setOrderData((prev) => ({
    //       ...prev,
    //       [event.target.name]: event.target.value,
    //     }));
    // };

  return (
    <div className='CheckoutPersonalInfo FormWrapper'>
        <div className="CheckoutPersonalInfo FormTitle">
                Personal information
            </div>
        <div className="CheckoutPersonalInfo FormContainer">
            <form className="CheckoutPersonalInfo Form">
                <label >
                    <span>First name</span>
                    <input type="text" 
                        // value={}
                        // onChange={}
                    />
                </label>
                <label >
                    <span>Last Name</span>
                    <input type="text" 
                        // value={}
                        // onChange={}
                    />
                </label>
                <label >
                    <span>Email</span>
                    <input type="text" 
                        // value={}
                        // onChange={}
                    />
                </label>
            </form>
        </div>
    </div>
  )
}

export default CheckoutPersonalInfoForm