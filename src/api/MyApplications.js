export const MyApplications = (email) => {
  return fetch(
    `https://job-earth-server.vercel.app/applications?email=${email}`
  ).then((res) => res.json());
};
