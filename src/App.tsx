import { BrowserRouter as Router, Routes, Route, } from "react-router-dom";
import RequireAuth from "./components/RequireAuth.tsx";
import PersistenLogin from "./components/PersistentLogin.js";
import LogIn from "./components/Login.tsx";
import { Suspense } from "react";
import SignIn from "./components/Signup.tsx";
import Navbar from "./components/Navbar.tsx";
import Home from "./components/Home.tsx";
import Topcis from "./components/Topcis..tsx";
import 'react-toastify/dist/ReactToastify.css';
import CreateRoom from "./components/CreateRoom.tsx";
import { ToastContainer } from "react-toastify";
import Room from "./components/Room.tsx";
import Delete from "./components/Delete.tsx";
const ROLES = {
  'User': 2001,
  'Editor': 1984,
  'Admin': 5150
}
export default function App() {
  return (
    <>
      <Router>
        <ToastContainer
          position="top-right"
          autoClose={5000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
          theme="colored"
        />
        <Navbar />
        <Routes>
          {/* Public route */}
          <Route element={<PersistenLogin />}>
            <Route caseSensitive={true} path="/login" element={
              <Suspense fallback={
                // You can use React Loading by
                // https://www.npmjs.com/package/react-loading
                // <ReactLoading type="bars" color="#4338ca" className="flex justify-center items-center align-middle m-auto" />
                // You are free to use any package or your own implementation
                <h1>Loading</h1>
              }>
                <LogIn />
              </Suspense>
            } />

            <Route caseSensitive={true} path="/register" element={
              <Suspense fallback={
                // You can use React Loading by
                // https://www.npmjs.com/package/react-loading
                // <ReactLoading type="bars" color="#4338ca" className="flex justify-center items-center align-middle m-auto" />
                <h1>Loading</h1>
              }>
                <SignIn />
              </Suspense>
            } />
            <Route caseSensitive={true} path="/" element={
              <Suspense fallback={
                // You can use React Loading by
                // https://www.npmjs.com/package/react-loading
                // <ReactLoading type="bars" color="#4338ca" className="flex justify-center items-center align-middle m-auto" />
                <h1>Loading</h1>
              }>
                <Home />
              </Suspense>
            } />
            <Route caseSensitive={true} path="/topics" element={
              <Suspense fallback={
                // You can use React Loading by
                // https://www.npmjs.com/package/react-loading
                // <ReactLoading type="bars" color="#4338ca" className="flex justify-center items-center align-middle m-auto" />
                <h1>Loading</h1>
              }>
                <Topcis />
              </Suspense>
            } />

            {/* Protected route */}
            <Route element={<RequireAuth allowedRoles={[ROLES.Admin]} />}>
              <Route caseSensitive={true} path="/create-room" element={
                <Suspense fallback={
                  // You can use React Loading by
                  // https://www.npmjs.com/package/react-loading
                  // <ReactLoading type="bars" color="#4338ca" className="flex justify-center items-center align-middle m-auto" />
                  <h1>Loading</h1>
                }>
                  <CreateRoom update={false} />
                </Suspense>
              } />
              <Route caseSensitive={true} path="/room/:id" element={
                <Suspense fallback={
                  // You can use React Loading by
                  // https://www.npmjs.com/package/react-loading
                  // <ReactLoading type="bars" color="#4338ca" className="flex justify-center items-center align-middle m-auto" />
                  <h1>Loading</h1>
                }>
                  <Room />
                </Suspense>
              } />
              <Route caseSensitive={true} path="/update-room/:id" element={
                <Suspense fallback={
                  // You can use React Loading by
                  // https://www.npmjs.com/package/react-loading
                  // <ReactLoading type="bars" color="#4338ca" className="flex justify-center items-center align-middle m-auto" />
                  <h1>Loading</h1>
                }>
                  <CreateRoom update={true} />
                </Suspense>
              } />
              <Route caseSensitive={true} path="/delete-room/:id/:name" element={
                <Suspense fallback={
                  // You can use React Loading by
                  // https://www.npmjs.com/package/react-loading
                  // <ReactLoading type="bars" color="#4338ca" className="flex justify-center items-center align-middle m-auto" />
                  <h1>Loading</h1>
                }>
                  <Delete />
                </Suspense>
              } />
            </Route>
          </Route>
        </Routes>
      </Router>


    </>
  )
}