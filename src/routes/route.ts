
import UserRoute from './user_routes'
import OrganizationRoute from './organization_route'
const Route = (app) => {
    UserRoute(app)
    OrganizationRoute(app)
}
export default Route;