import "./AboutShopSection.css"

const AboutShopSection = () => {
  return (
    <div className='AboutShopSectionWrapper'>
        <div className="AboutShopImageWrapper">
            <img src="https://images.demandware.net/dw/image/v2/BBBV_PRD/on/demandware.static/-/Sites-master-catalog/default/dw11f1771f/images/2060000/2068772.jpg?sw=2000&sh=1125" alt="furniture" className="AboutShopImage" />
        </div>
        <div className="AboutShopInfoWrapper">
            <h1 className="AboutShopHeading">About "accent"</h1>
            <p className="AboutShopText"></p>
        </div>
    </div>
  )
}

export default AboutShopSection