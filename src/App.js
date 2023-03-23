import { useState } from 'react';
import data from './components/data';
import Tours from './components/Tours';

function App() {
  const [tours, setTours] = useState(data);

  function removetour (id) {
    const newTours = tours.filter((item) => item.id !== id);
    setTours(newTours);
  }

  return (
    <>
    <h1>Cities For Trip</h1>
    <Tours tours={tours} removetour={removetour}></Tours>
    </>
  );
}

export default App;
