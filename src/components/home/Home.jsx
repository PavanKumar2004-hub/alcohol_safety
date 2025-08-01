import AlcoholReadings from '../comps/AlcoholReadings';
import Header from '../comps/Header';
import Requesting from '../comps/Requesting';

const Home = () => {
  return (
    <div>
      <Header />
      <AlcoholReadings />
      <br />
      <hr className='w-[21rem] !mx-auto text-gray-400 ' />
      <br />
      <Requesting />
    </div>
  );
};

export default Home;
