// import "../Home/Category.css";
import { useEffect, useState } from "react";

// import { CategoryContext } from "../../contexts/CategoryContext";
import "../Categories/Category.css";
import { useFilterContext } from "../../contexts/FilterContext";
import { NavLink } from "react-router-dom";
import { useProductContext } from "../../contexts/ProductsContext";
import { Loader } from "../../utils/Loader";



export function Category() {
  // const { categoriesData, loading } = useContext(CategoryContext);
    const [showLoader,setShowLoader] = useState()
    const {categoriesData} = useProductContext()
  const {dispatch} = useFilterContext();
  
  const categorySelector = (categoryName) => {
    dispatch({type:"CATEGORY_SELECTOR",payload:categoryName})
  }
  
    useEffect(()=>{ setShowLoader(true);
    setTimeout(() => {
      setShowLoader(false);
    }, 500)},[])

  return (
    <div>
    {
    showLoader && <Loader />
  }

               
   <img className="sale-img" src="https://www.techlekh.com/wp-content/uploads/2021/09/Sastodeal-The-Great-Electronics-Sale.jpg" alt="sale" height='50%' width="50%"  />
      
       

      <div  className="categories-container-mains">
        {/* <div> */}
        {/* </div> */}

       {categoriesData?.map(category=>{
        const {_id,categoryName,description,url} = category
        return (<div   className="category-card-container" key={_id}>
          <NavLink style={{textDecoration:"none",color:"black"}} onClick={()=>categorySelector(categoryName)} to="/products">
              
          <img  style={{borderRadius:"5px"}} height='250px' width="400px" src={url} alt={categoryName} />
          <h3>{categoryName}</h3>
          <p>{description}</p>
          <button className="add-to-cart-btn">Explore</button>
          </NavLink>
        </div>)
       })}

      </div> 
     
    </div>
  );
}
