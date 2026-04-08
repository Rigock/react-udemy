import { RouterProvider } from "react-router"
import { professionalRouter } from "./router/app.router"
import { UserContextProvider } from "./context/UserContext"

export const ProfessionalApp = () => {
  return (

    <UserContextProvider>
      <div className="bg-gradient">
        <RouterProvider router={professionalRouter} />
      </div>
    </UserContextProvider>

  )
}
