/*

/////////Product Stuff



const Products = items.map(props => {


    return (
      <div className='Items' key={props.id} >
        <img src={process.env.PUBLIC_URL + props.img} alt={props.imgAlt} className='Images' />
        <div className='Info'>
          
          <p>{props.manufacturer} </p>
          <p>{props.name}</p>
          <hr></hr>
          <p>{props.category}</p>
          <hr></hr>
          <p>${props.price}</p>
          <hr></hr>
          <p>#{props.serial}</p>
          <hr></hr>
          <p>Stock: {props.stock}</p>
          <hr></hr>

          <input placeholder="Add Your Cart" onChange={e=>handleChange(e.target.value)} value={inputvalue} />
          <button onClick={handleButton} > Add New Todo </button>
        </div>
      </div>
    )
  });


export default Products;




const  ProductPage = ({items,setItems,itemsaddedtocart,setItemsaddedtocart}) => {
  return (
    <div>
      <Link to='/shoppingcart' id='cartLink'>
            <button>
              Shopping Cart
            </button>
          </Link>


      {items.map((product, index) => 
      <div key={index} >
        <img src={product.img} style={{width: "200px"}} />
        <p> Name: {product.name} </p>
        <p> Serial#: {product.serialnumber} </p>
        <p> Price: {product.price} </p>
        <p> Quantity: {product.quantity} </p>
        <p> Manufacturer: {product.manufacturer} </p>
        <p> Category: {product.category} </p>
        <button onClick={() => {
          setItemsaddedtocart(itemsaddedtocart.concat(items[index]));
          console.log(itemsaddedtocart)
        }}
>Add to Cart</button>
      </div> 
       
      )}
    </div>
  )
}







*/

