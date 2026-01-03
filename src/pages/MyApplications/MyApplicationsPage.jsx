import React, { Suspense } from "react";
import ApplicationList from "./ApplicationList";
import UseAuth from "../../hooks/UseAuth";
import { MyApplications } from "../../api/MyApplications"; // ✅ named import

const MyApplicationsPage = () => {
  const { user } = UseAuth();

  return (
    <div>
      <Suspense
        fallback={
          <div className="text-center mt-10 text-lg font-medium">
            Loading applications...
          </div>
        }
      >
        <ApplicationList MyApplications={MyApplications(user.email)} />
      </Suspense>
    </div>
  );
};

export default MyApplicationsPage;
