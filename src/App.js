import Benifits from "./componets/Benifits";
import CardSection from "./componets/CardSection";
import ClientSection from "./componets/ClientSection";
import Hero from "./componets/Hero";
import Navber from "./componets/Navber";
import OfferSection from "./componets/OfferSection";

function App() {
  return (
    <>
      <Navber />
      <Hero />
      <OfferSection/>
      <CardSection/>
      <ClientSection/>
      <Benifits/>
    </>
  );
}

export default App;
