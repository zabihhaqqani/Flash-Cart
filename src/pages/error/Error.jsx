import { useNavigate } from "react-router-dom";

export const  Error = () =>{
    const navigate = useNavigate()
  return (
    <div>
      <h3 style={{margin:"1rem"}}>Error page not found</h3>
      <p onClick={()=>navigate("/")} style={{color:"blue"}}>Go Home</p>
    </div>
  );
}
