import './CheckoutShippingAddressForm.css';

const CheckoutShippingAddressForm = () => {
  return (
    <div className='CheckoutShippingAddress FormWrapper'>
        <div className="ShippingAddress FormTitle">
                Shipping address
            </div>
        <div className="ShippingAddress FormContainer">
            <form className="ShippingAddress Form">
                <label >
                    <span>Street Adress</span>
                    <input type="text" 
                        // value={}
                        // onChange={}
                    />
                </label>
                <label >
                    <input type="text" 
                        // value={}
                        // onChange={}
                    />
                </label>
                <label >
                    <span>City</span>
                    <input type="text" 
                        // value={}
                        // onChange={}
                    />
                </label>
                <label >
                    <span>State/Province</span>
                    <input type="text" 
                        // value={}
                        // onChange={}
                    />
                </label>
                <label >
                    <span>Postal Code</span>
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

export default CheckoutShippingAddressForm