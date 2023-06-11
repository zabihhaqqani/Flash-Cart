// import "../Home/Category.css";
import { useContext } from "react";
import sale from "./sale.png";
import { CategoryContext } from "../../contexts/CategoryContext";
import "../Categories/Category.css";
import { useFilterContext } from "../../contexts/FilterContext";
import { NavLink } from "react-router-dom";



export function Category() {
  const { categoriesData, loading } = useContext(CategoryContext);
  const {dispatch} = useFilterContext();
  const categorySelector = (categoryName) => {
    dispatch({type:"CATEGORY_SELECTOR",payload:categoryName})
  }

  return (
    <>
      <div className="category-container">
        {/* <img height="20%" width="20%" src={sale} alt="saleposter" /> */}
        {loading && <h1>loading........</h1>}
               
      <div  className="categories-container">
    
       {categoriesData.categories?.map(category=>{
        const {_id,categoryName,description,url} = category
        return (<div   className="category-card" key={_id}>
          <NavLink style={{textDecoration:"none",color:"black"}} onClick={()=>categorySelector(categoryName)} to="/products">
          <img style={{borderRadius:"5px"}} height='50%' width="100%" src={url} alt={categoryName} />
          <h3>{categoryName}</h3>
          <p>{description}</p>
          </NavLink>
        </div>)
       })}

      </div> 
      </div>
    </>
  );
}
