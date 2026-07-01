import React from 'react'
import { Outlet } from 'react-router-dom';

const PrivateRoute = () => {

    //logic
    //validation
    //authorization
    //authenticaction
    //isLogin

    // if (!isAuthenticated , isLogin , ...) {
        // return <Navigate to={'/'} />
// }

    return <Outlet />;
    {/* بالا منطق ورود و دسترسی و موارد مختلف رو بررسی میکنیم و اینجا Outlet رو return میکنیم */}
        
}

export default PrivateRoute