import { useNavigate } from "react-router-dom";

export function Error() {
    const navigate = useNavigate()
  return (
    <>
      <h3 style={{margin:"1rem"}}>Error page not found</h3>
      <p onClick={()=>navigate("/")} style={{color:"blue"}}>Go Home</p>
    </>
  );
}
