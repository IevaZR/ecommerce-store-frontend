import React from 'react'
import "./AdminPageAddProduct.css"

const AdminPageAddProduct = () => {
  return (
    <div className='AdminPageAddProductWrapper'>
        <h3 className='AdminPageAddProductHeading'>To add a new product, please fill out the form below</h3>
        <form className='AdminPageAddProductsForm'>
            <label className="AdminPageAddProductsLabel">TITLE</label>
            <input/>
            <label className="AdminPageAddProductsLabel">CATEGORY</label>
            <input/>
            <label className="AdminPageAddProductsLabel">PRICE</label>
            <input/>
            <label className="AdminPageAddProductsLabel">DESCRIPTION</label>
            <input/>
            <label className="AdminPageAddProductsLabel">COLOR</label>
            <input/>
            <label className="AdminPageAddProductsLabel">QUANTITY</label>
            <input/>
            <label className="AdminPageAddProductsLabel">DIMENSIONS CM</label>
            <input/>
            <label className="AdminPageAddProductsLabel">FEATURES</label>
            <input/>
            <label className="AdminPageAddProductsLabel">KEYWORDS</label>
            <input/>
            <label className="AdminPageAddProductsLabel">IMAGE</label>
            <input/>
        </form>
    </div>
  )
}

export default AdminPageAddProduct

//TODO: finish the add product component as popup