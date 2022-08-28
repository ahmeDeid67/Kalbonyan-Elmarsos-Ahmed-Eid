import { Route, Routes /*Redirect*/, Navigate } from "react-router-dom";

import Welcome from "./pages/Welcom";
import Products from "./pages/Products";
import MainHeader from "./component/MainHeader";
import ProductDetail from "./pages/ProductDetail";

function App() {
  return (
    <div>
      <MainHeader />
      <main>
        <Routes>
          {/* <Route path="/" exact>
            <Redirect to="/welcome" />
          </Route> */}
          <Route path="/" exact element={<Navigate replace to="/welcome" />} />
          <Route path="/welcome/*" element={<Welcome />}>
            <Route path="new-user" element={<p>Welcome, new user!</p>} />
          </Route>
          <Route path="/products" /*exact*/ element={<Products />} />
          <Route path="/products/:productId" element={<ProductDetail />} />
        </Routes>
      </main>
    </div>
  );
}

export default App;
