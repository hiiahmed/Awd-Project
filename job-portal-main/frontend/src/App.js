import { createContext, useState } from "react";
import { createBrowserRouter,RouterProvider, BrowserRouter, Route, Routes } from "react-router-dom";
import { Grid, makeStyles } from "@material-ui/core";

import Welcome, { ErrorPage } from "./component/Welcome";
import Navbar from "./component/Navbar";
import Login from "./component/Login";
import Logout from "./component/Logout";
import Signup from "./component/Signup";
import Home from "./component/Home";
import Applications from "./component/Applications";
import Profile from "./component/Profile";
import CreateJobs from "./component/recruiter/CreateJobs";
import MyJobs from "./component/recruiter/MyJobs";
import JobApplications from "./component/recruiter/JobApplications";
import AcceptedApplicants from "./component/recruiter/AcceptedApplicants";
import RecruiterProfile from "./component/recruiter/Profile";
import MessagePopup from "./lib/MessagePopup";
import isAuth, { userType } from "./lib/isAuth";

const useStyles = makeStyles((theme) => ({
  body: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    minHeight: "98vh",
    paddingTop: "64px",
    boxSizing: "border-box",
    width: "100%",
  },
}));

export const SetPopupContext = createContext();


// const router =createBrowserRouter([

//   {
//     path: "/",
//     element: <Welcome></Welcome>
//   },
//   {
//     path: "/login",
//     element: <Login></Login>
//   },
//   {
//     path: "/signup",
//     element: <Signup></Signup>
//   },
//   {
//     path: "/logout",
//     element: <Logout></Logout>
//   },
//   {
//     path: "/home",
//     element: <Home></Home>
//   },
//   {
//     path: "/applications",
//     element: <Applications></Applications>
//   },

//   <Route 
//   path="/profile" 
//   element={userType() === 'recruiter' ? <RecruiterProfile /> : <Profile />} 
//   />,
//   {
//     path: "/addjob",
//     element: <CreateJobs></CreateJobs>
//   },
//   {
//     path: "/myjobs",
//     element: <MyJobs></MyJobs>
//   },
//   {
//     path: "/job/applications/:jobId",
//     element: <JobApplications></JobApplications>
//   },
//   {
//     path: "/applications",
//     element: <Applications></Applications>
//   },
//   <Route>
//   <ErrorPage />
//   </Route>
// ])


function App() {
  const classes = useStyles();
  const [popup, setPopup] = useState({
    open: false,
    severity: "",
    message: "",
  });
  return (
    <BrowserRouter>
      <SetPopupContext.Provider value={setPopup}>
        <Grid container direction="column">
          <Grid item xs>
            <Navbar />
          </Grid>
          <Grid item className={classes.body}>
          <Routes>
              {/* Define your custom routes using the Route component */}
              <Route path="/" element={<Welcome />} />
              <Route path="/login" element={<Login />} />
              <Route path="/signup" element={<Signup />} />
              <Route path="/logout" element={<Logout />} />
              <Route path="/home" element={<Home />} />
              <Route path="/applications" element={<Applications />} />
              <Route
                path="/profile"
                element={
                  userType() === 'recruiter' ? (
                    <RecruiterProfile />
                  ) : (
                    <Profile />
                  )
                }
              />
              <Route path="/addjob" element={<CreateJobs />} />
              <Route path="/myjobs" element={<MyJobs />} />
              <Route path="/job/applications/:jobId" element={<JobApplications />} />
              <Route path="/applications" element={<Applications />} />
              <Route element={<ErrorPage />} />
            </Routes>
          {/* <RouterProvider router={router} /> */}
          </Grid>
        </Grid>
        <MessagePopup
          open={popup.open}
          setOpen={(status) =>
            setPopup({
              ...popup,
              open: status,
            })
          }
          severity={popup.severity}
          message={popup.message}
        />
      </SetPopupContext.Provider>
     </BrowserRouter>
  );
}

export default App;
