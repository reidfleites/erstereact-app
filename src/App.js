
import './App.scss';
import imag1 from './images/clement-helardot-95YRwf6CNw8-unsplash.jpg';
import imag2 from './images/freddie-marriage-vSchPA-YA_A-unsplash.jpg';

function App() {
  return (
    <div className="App">
      <div>
      <div>
          <ul>
              <li>
                  <a href="index.html">Home</a> 
              </li>
              <li>
                  <a href="">DCI-Projekte</a> 
              </li>
              <li>
                  <a href="">Personal-Projekte</a> 
              </li>
          </ul>
       </div>
       <div>
         <img src={imag1} alt=""/>
       
       </div>
  </div> 
  <div id="section-2">
        <div id="element-1">
        
            <div id="sub-element-1-1">
                <h2>Learning Plan</h2>
            </div>
            <div>
                <ol>
                    <li><a href="http://">HTML5</a></li>
                    <li><a href="http://">CSS3</a></li>
                    <li><a href="http://">JAVA SCRIPT ES6</a></li>
                    <li><a href="http://">REACT</a></li>
                </ol>
            </div>
        </div>
        

        <div id="element-2">
            <img  src={imag2} alt=""/>
        </div>
  </div>
    </div>

  );
}

export default App;
