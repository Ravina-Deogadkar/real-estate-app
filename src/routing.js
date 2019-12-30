import React, {lazy} from 'react'
import ReactDOM from 'react-dom'
import { Route, Link, BrowserRouter as Router } from 'react-router-dom'
import CreateAdds from './templates/create-adds'
import ShowAdds from './templates/show-adds'
// const CreateAdds = lazy(() => import("./templates/create-adds"));
// const ShowAdds = lazy(() => import("./templates/show-adds"));
const routing = (
  <Router>
    <div>
    <ul>
        <li>
          <Link to="/aa">Home</Link>
        </li>
        <li>
          <Link to="/cr">Users</Link>
        </li>
       
      </ul>
      <Route path="/aa" component={ShowAdds} />
      <Route path="/cr" component={CreateAdds} />
    </div>
  </Router>
)

ReactDOM.render(routing, document.getElementById('root'))