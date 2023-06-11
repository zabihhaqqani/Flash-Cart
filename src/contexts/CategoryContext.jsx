import { createContext, useEffect, useState } from "react";

export const CategoryContext = createContext();

export function CategoryProvider({ children }) {
  const [categoriesData, setCategoriesData] = useState([]);
  const [loading,setLoading] = useState(false)
  const getCategoriesData = async() => {
      try{
      setLoading(true)
      const response = await fetch("/api/categories")
      setCategoriesData(await response.json() )
      }catch(err){
          console.error(err)
      }finally{
      setLoading(false)

      }
  }

  useEffect(()=>{getCategoriesData()},[])
  


  return (
    <CategoryContext.Provider value={{categoriesData,loading}}>{children}</CategoryContext.Provider>
  );
}
