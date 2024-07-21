import PatientList from './PatientList';
import AnalogClock from './Clock';



const App: React.FC = () => {

  return (
    <div className="flex flex-col md:flex-row-reverse">
      <div className="p-4 flex-shrink-0">
        <AnalogClock />
        <div className="mt-4 p-4 bg-gray-100 border border-gray-300 rounded-lg shadow-md">
          <h3 className="text-md font-semibold mb-2">Vitamin and Supplement Recommendations</h3>
          <ul className="list-disc list-inside text-gray-700">
            <li>Loading advertisements...</li>
          </ul>
        </div>
      </div>
      <div className="flex-grow p-4">
        <div className="flex flex-col  mt-8 leading-9 tracking-tight text-gray-900 p-4 gap-2">
          <h1 className='text-3xl md:text-4xl lg:text-5xl'>Ontop-Health</h1>
          <h2 className='text-xl md:text-2xl'>Data, Driven, Workflows</h2>
        </div>
        <PatientList />
      </div>
    </div>
  );
}

export default App;
