import { lazy, memo, Suspense, useEffect } from "react";
import { useSelector } from "react-redux";
import { Navigate, Route, Routes } from "react-router-dom";
import ProtectedRoute from "./ProtectedRoute";

// Lazy loading the Login component
const LazyLogin = lazy(() => import("../Pages/Login"));

const Routings = () => {
    useEffect(()=> {
    }, []);
    
    const loggedIn = useSelector((state: any) => state?.Common?.loggedIn);
    
    const routes = [
        {
            path: "", // Add the lazy loaded route path
            element:
                <Suspense fallback={<div>Loading...</div>}>
                    <LazyLogin />
                </Suspense>,
            protectedRoute: false
        },

        {
            path: "login", // Add the lazy loaded route path
            element:
                <Suspense fallback={<div>Loading...</div>}>
                    <LazyLogin />
                </Suspense>,
            protectedRoute: false
        }
    ];

    return (
        <Routes>
            {routes.map((item: any, index: number) => {
                if (item.protectedRoute) {
                    return (
                        <Route key={index} element={<ProtectedRoute loggedIn={loggedIn} />}>
                            <Route path={item.path} element={item.element} />
                        </Route>
                    );
                } else {
                    return (
                        <Route key={index} path={item.path} element={item.element} />
                    );
                }
            })}
        </Routes>
    );
}

export default memo(Routings);
