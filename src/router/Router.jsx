import { createBrowserRouter } from "react-router";
import RootLayouts from "../layouts/RootLayouts";
import Home from "../pages/Home/Home";
import Register from "../pages/Register/Register";
import Login from "../pages/Login/Login";
import Error from "../pages/Error/Error";
import JobDetails from "../pages/JobDetails/JobDetails";
import PrivateRoute from "../routes/PrivateRoute";
import JobApply from "../pages/JobApply/JobApply";
import ContactPage from "../pages/Contact/ContactPage";
import AboutPage from "../pages/About/AboutPage";
import AddJob from "../pages/AddJob/AddJob";
import { MdYard } from "react-icons/md";
import MyPostedJob from "../pages/MyPostedJob/MyPostedJob";
import MyApplicationsPage from "../pages/MyApplications/MyApplicationsPage";
import EditApplication from "../pages/EditApplication/EditApplication";

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
        path: "myPostedJob",
        element: (
          <PrivateRoute>
            <MyPostedJob></MyPostedJob>
          </PrivateRoute>
        ),
      },
      {
        path: "jobs/:id",
        Component: JobDetails,
        loader: async ({ params }) => {
          try {
            const response = await fetch(
              `https://job-earth-server.vercel.app/jobs/${params.id}`
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
        path: "applications/:id",
        element: (
          <PrivateRoute>
            <EditApplication></EditApplication>
          </PrivateRoute>
        ),
      },

      {
        path: "myApplications",
        element: (
          <PrivateRoute>
            <MyApplicationsPage></MyApplicationsPage>
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
