import { Outlet /*Route, Routes*/ } from "react-router-dom";

const Welcome = () => {
  return (
    <section>
      <h1>The welcome page</h1>
      {/* <Routes>
        <Route path="new-user" element={<p>Welcome, new user!</p>} />
      </Routes> */}
      <Outlet />
    </section>
  );
};

export default Welcome;
