import "./App.css";
import Body from "./components/Body";
import Header from "./components/Header";

/**
 *Header
  - Logo
   -Nav Items : Home, About, Cart
  *Body
   -Input Search Box
   -Search Button
  *Restaurant Container
   -* Restaurant Card
    - Image
     - Name of Res, Star Rating, cuisine, delivery time etc.
  * Footer
    - Copyright
    - Links
    - Address
    - Contact

 *
 */

function App() {
  return (
    <div className="font-bold">
      <Header />
      <Body />
    </div>
  );
}

export default App;
