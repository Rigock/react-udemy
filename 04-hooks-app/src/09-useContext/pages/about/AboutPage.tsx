import { UserContext } from "@/09-useContext/context/UserContext"
import { Button } from "@/components/ui/button"
import { use } from "react"
import { Link } from "react-router"

export const AboutPage = () => {

  const {isAuthenticated, logout} = use(UserContext)

  return (
    <div className="flex flex-col items-center justify-center min-h-screen">
      <h1 className="text-4xl font-bold">Page about me</h1>
      <hr />

      <div className="flex flex-col gap-2">
        
        {/* Perfil de usuario si tiene sesion */}
        {
          isAuthenticated && (
            <Link to="/profile" className="hover:text-blue-500 underline text-2xl">Profile</Link>
          )
        }
        {/* Login logoutzs */}
        {isAuthenticated? (
          <Button variant="destructive" className="mt-4" onClick={logout}>
            Exit
          </Button>
        ): (
          <Link to="/login" className="hover:text-blue-500 underline text-2xl">Login</Link>

        )}
      </div>
    </div>
  )
}
