import './App.css';
import Header from './Components/Header/Header';
import 'bootstrap/dist/css/bootstrap.min.css';
import Banner from './Components/Banner/Banner';
import ServiceSection from './Components/ServiceSection/ServiceSection';
import Foorter from './Components/Footer/Foorter';

function App() {
  return (
    <div className='App'>
      <Header></Header>
      <Banner></Banner>
      <ServiceSection></ServiceSection>
      <Foorter></Foorter>
    </div>
  );
}

export default App;
