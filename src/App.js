
import './App.css';
import image from './grocery.jpg';
import imageTwo from './buyer.jpg'
import { GroceryList } from './GroceryList';
function App() {
  return (
    <div className="App">
      <div className='container'>
      <img src={image} width="200px" alt="food"/>
      </div>
      <div className='container'>
        <h1>GROCERY LIST</h1>
        </div>
      <GroceryList/>
      <div className='container'>
      <img src={imageTwo} width="200px" alt="buyer"/>
      </div>
    </div>
  );
}

export default App;
