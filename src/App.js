import './App.css';
import {LeftMenu} from './Components/LeftMenu/LeftMenu';
import {MainContainer} from './Components/MainContainer/MainContainer';
import {RightBar} from './Components/RightMenu/RIghtBar';
import { BottomContainer } from './Components/BottomContainer/BottomContainer';


function App() {
  return (
    <div className="App">
      <LeftMenu />
      <MainContainer />
      <RightBar />
      <BottomContainer />
      <div className='background'></div>
    </div>

  );
}

export default App;
