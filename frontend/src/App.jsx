import './App.css'
import WeatherComponent from './components/WeatherComponent';
import ToDoComponent from './components/ToDoComponent';


function App() {
   
    return (
        <div className='pageContainer'>
            <WeatherComponent />
            <ToDoComponent />
        </div>
    )
}

export default App;
