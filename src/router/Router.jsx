import { createBrowserRouter } from "react-router";
import RootLayouts from "../layouts/RootLayouts";
import Home from "../pages/Home/Home";
import Register from "../pages/Register/Register";
import Login from "../pages/Login/Login";
import Error from "../pages/Error/Error";
import JobDetails from "../pages/JobDetails/JobDetails";
import PrivateRoute from "../routes/PrivateRoute";
import JobApply from "../pages/JobApply/JobApply";
import MyApplications from "../pages/MyApplications/MyApplications";
import ContactPage from "../pages/Contact/ContactPage";
import AboutPage from "../pages/About/AboutPage";
import AddJob from "../pages/AddJob/AddJob";

const router = createBrowserRouter([
  {
    path: "/",
    Component: RootLayouts,
    children: [
      {
        index: true,
        Component: Home,
      },
      {
        path: "register",
        Component: Register,
      },
      {
        path: "login",
        Component: Login,
      },
      {
        path: "addJob",
        element: (
          <PrivateRoute>
            <AddJob></AddJob>
          </PrivateRoute>
        ),
      },
      {
        path: "jobs/:id",
        Component: JobDetails,
        loader: async ({ params }) => {
          try {
            const response = await fetch(
              `http://localhost:3000/jobs/${params.id}`
            );
            if (!response.ok) {
              throw new Response("Job not found", { status: response.status });
            }
            return response.json();
          } catch (error) {
            throw new Response("Failed to load job", { status: 500 });
          }
        },
      },
      {
        path: "contact",
        Component: ContactPage,
      },
      {
        path: "about",
        Component: AboutPage,
      },
      {
        path: "jobApply/:id",
        element: (
          <PrivateRoute>
            <JobApply></JobApply>
          </PrivateRoute>
        ),
      },
      {
        path: "myApplications",
        element: (
          <PrivateRoute>
            <MyApplications></MyApplications>
          </PrivateRoute>
        ),
      },
      {
        path: "/*",
        Component: Error,
      },
    ],
  },
]);

export default router;
