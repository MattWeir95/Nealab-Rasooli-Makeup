import { Navigate } from "react-router-dom";
import { useAuth } from "../contexts/AuthContext";
export default function LogoutButton(){
    const { logout } = useAuth();

    async function handleLogout() {
        try {
          await logout();
          Navigate("/");
        } catch (e) {
          console.log(e);
        }
      }

    return (
        <div className="">
            <button onClick={handleLogout} className="">Log out</button>
        </div>
    )
}