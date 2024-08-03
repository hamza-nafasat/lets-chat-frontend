import { BrowserRouter, Route, Routes } from "react-router-dom";
import { lazy, Suspense } from "react";
import ProtectedRoutes from "./components/auth/ProtectedRoutes";
import LayoutLoader from "./components/layout/Loaders";

const Home = lazy(() => import("./pages/Home"));
const Login = lazy(() => import("./pages/Login"));
const Chat = lazy(() => import("./pages/Chat"));
const Groups = lazy(() => import("./pages/Groups"));
const NotFound = lazy(() => import("./pages/NotFound"));

const user = true;
const App = () => {
    return (
        <BrowserRouter>
            <Suspense fallback={<LayoutLoader />}>
                <Routes>
                    <Route element={<ProtectedRoutes user={user} redirectUrl="/login" />}>
                        <Route path="/" element={<Home />} />
                        <Route path="/chat/:id" element={<Chat />} />
                        <Route path="/groups" element={<Groups />} />
                    </Route>
                    <Route
                        path="/login"
                        element={
                            <ProtectedRoutes user={!user} redirectUrl="/">
                                <Login />
                            </ProtectedRoutes>
                        }
                    />
                    <Route path="*" element={<NotFound />} />
                </Routes>
            </Suspense>
        </BrowserRouter>
    );
};

export default App;