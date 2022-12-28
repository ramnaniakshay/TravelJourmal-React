import logo from './logo.svg';
import './App.css';
import Header from './components/Header';
import TCard from './components/TCard';
import Timg1 from "../src/Asset/Timg1.png"
import Timg2 from "../src/Asset/Timg2.png"
import Timg3 from "../src/Asset/Timg3.png"


function App() {
  return (
    <div>
      <Header/>
      <TCard Timg={Timg1} TLocation2='Mount Fuji' TLocation='J A P A N' TDay='12 Jan, 2021 - 24 Jan, 2021'  TCaption='Mount Fuji is the tallest mountain in Japan, standing at 3,776 meters (12,380 feet). Mount Fuji is the single most popular tourist site in Japan, for both Japanese and foreign tourists.' />
      <br/>
      <TCard Timg={Timg2} TLocation2='Sydney Opera House' TLocation='A U S T R A L I A' TDay='27 May, 2021 - 8 Jun, 2021'  TCaption="The Sydney Opera House is a multi-venue performing arts centre in Sydney. Located on the banks of the Sydney Harbour, it is often regarded as one of the 20th century's most famous and distinctive buildings" />
      <br/>
      <TCard Timg={Timg3} TLocation2='Geirangerfjord' TLocation='N O R W A Y' TDay='01 Oct, 2021 - 18 Nov, 2021'  TCaption='The Geiranger Fjord is a fjord in the Sunnmøre region of Møre og Romsdal county, Norway. It is located entirely in the Stranda Municipality.' />
    </div>
  );
}

export default App;
