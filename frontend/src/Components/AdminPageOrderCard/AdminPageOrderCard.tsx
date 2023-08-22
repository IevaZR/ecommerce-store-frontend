import React from 'react'
import "./AdminPageOrderCard.css"

const AdminPageOrderCard = () => {
  return (
    <div className='AdminPageOrderCardWrapper'>
        <div className='AdminPageOrderCardOrderNumberWrapper'>
            <h5 className='AdminPageOrderCardOrderNumber'>Order no. 36136178 | Active</h5>
            <button className='AdminPageOrderCardCompleteButton'>MARK AS COMPLETE</button>
        </div>
        <div className='AdminPageOrderCardMainSectionWrapper'>
            <div className='AdminPageOrderCardCustomerDetailWrapper'>
                <h6 className='AdminPageOrderCardCustomerName'>Name Surname</h6>
                <p className='AdminPageOrderCardCustomerEmail'>test@test.com</p>
                <p className='AdminPageOrderCardCustomerAddress'>8077 Harvey St. Sunnyside, NY 11104</p>
                <p className='AdminPageOrderCardCustomerSum'>Order total: EUR 5000.00</p>
            </div>
            <div className='AdminPageOrderCardPurchasedProductsSectionWrapper'>
                <div className='AdminPageOrderCardPurchasedProductWrapper'>
                    <div className='AdminPageOrderCardPurchasedProductsImageWrapper'>
                        <img src="https://p3.aprimocdn.net/boconcept/fb1336ab-4b34-46a9-a23c-ae3000c41c04/1685500_WEB-FeatureLeftOrRightAlign-D-1300x1100.jpg" alt="" className='AdminPageOrderCardPurchasedProductsImage'/>
                    </div>
                    <div className='AdminPageOrderCardPurchasedProductsInfoWrapper'>
                        <p>BERGAMO SOFA WITH ROUND LOUNGING UNIT</p>
                        <p>Quantity: 3</p>
                    </div>
                </div>
                <div className='AdminPageOrderCardPurchasedProductWrapper'>
                    <div className='AdminPageOrderCardPurchasedProductsImageWrapper'>
                    {/* @ts-ignore */}
                        <img src="https://p3.aprimocdn.net/boconcept/fb1336ab-4b34-46a9-a23c-ae3000c41c04/1685500_WEB-FeatureLeftOrRightAlign-D-1300x1100.jpg" alt="" className='AdminPageOrderCardPurchasedProductsImage'/>
                    </div>
                    <div className='AdminPageOrderCardPurchasedProductsInfoWrapper'>
                        <p>BERGAMO SOFA WITH ROUND LOUNGING UNIT</p>
                        <p>Quantity: 3</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default AdminPageOrderCard