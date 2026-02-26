import Contact from './assets/Contact';
import Hello from './assets/Hello';
import Counter from './assets/Conuter'; 
function App() {
  const helloData = [
    { name: 'Ananayot', message: 'Hi nick' },
    { name: 'Tom', message: 'Hello..nick' }
  ];

  return (
    <div className='App'>
       < Counter />
      {helloData.map((data, index) => (
        <Hello
          key={index}
          name={data.name}
          message={data.message}
        />
      ))}

      <Contact email="nick@gmail.com" phone="067061616" />
    </div>
  );
}

export default App;
