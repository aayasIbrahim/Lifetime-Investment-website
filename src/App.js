import CardSection from "./componets/CardSection";
import Hero from "./componets/Hero";
import Navber from "./componets/Navber";
import OfferSection from "./componets/OfferSection";

function App() {
  return (
    <div className="p-[20px]">
      <Navber />
      <Hero />
      <OfferSection/>
      <br />
      <CardSection/>
    </div>
  );
}

export default App;
