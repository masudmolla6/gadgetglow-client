import { Helmet } from "react-helmet-async";
import Banner from "./pages/Home/Banner/Banner";

function App() {

  return (
    <div>
      <Helmet>
        <title>GadgetGlow | Home</title>
        <link rel="canonical" href="https://www.tacobell.com/" />
      </Helmet>
      <Banner></Banner>
    </div>
  );
}

export default App
