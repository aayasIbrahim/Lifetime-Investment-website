import Benifits from "./componets/Benifits";
import CardSection from "./componets/CardSection";
import ClientSection from "./componets/ClientSection";
import Expert from "./componets/Expert";
import Hero from "./componets/Hero";
import Navber from "./componets/Navber";
import OfferSection from "./componets/OfferSection";

function App() {
  console.log("App component rendered");
  return (
    <>
      <Navber  />
      <Hero />
      <OfferSection/>
      <CardSection/>
      <ClientSection/>
      <Benifits/>
      <Expert/>
    
      
    </>
  );
}

export default App;
