export const jobsCreatedByPromise = (email) => {
  return fetch(`https://job-earth-server.vercel.app/jobs?email=${email}`).then(
    (res) => res.json()
  );
};
