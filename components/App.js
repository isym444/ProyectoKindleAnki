import React from "react"
import Signup from "./Signup"
import { AuthProvider } from "../contexts/AuthContext"
import { BrowserRouter as Router, Switch, Route } from "react-router-dom"
import Dashboard from "./Dashboard"
import Login from "./Login"
import PrivateRoute from "./PrivateRoute"
import ForgotPassword from "./ForgotPassword"
import UpdateProfile from "./UpdateProfile"
import Bookshelf from "./Bookshelf"
import Firstpage from "./Firstpage"
import KenshuuiShow from"../Compounds/KenshuuiShow"
import Hp2esShow from "../Compounds/Hp2esShow"
import Eldioseroshow from "../Compounds/eldioseroshow"
import Testpage from "../Compounds/Testpage"

function App() {
  return (

      <div /* className="w-100" style={{ maxWidth: "400px" }} */>
        <Router>
          <AuthProvider>
            <Switch>
                <PrivateRoute exact path="/" component={Dashboard} />
                <PrivateRoute path="/update-profile" component={UpdateProfile} />
                <PrivateRoute path="/bookshelf" component={Bookshelf} />
                <PrivateRoute path="/firstpage" component={Firstpage} />
                <PrivateRoute path="/KenshuuiShow" component={KenshuuiShow} />
                <PrivateRoute path="/Hp2esShow" component={Hp2esShow} />
                <PrivateRoute path="/eldiosero" component={Eldioseroshow} />
                <PrivateRoute path="/testpage" component={Testpage} />
              <div className="d-flex align-items-center justify-content-center"
              style={{ minHeight: "100vh"}}>
                <div className=" w-100" style={{ maxWidth: "400px" }}>
                  {/* <Route path="/signup" component={Signup} /> */}
                  <Route path="/login" component={Login} />
                  <Route path="/forgot-password" component={ForgotPassword} />
                </div>
              </div>
            </Switch>
          </AuthProvider>
        </Router>
      </div>

  )
}

export default App
