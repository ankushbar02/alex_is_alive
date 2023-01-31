import './App.css'
import pic1 from './p1.jpg'
import pic2 from './p2.jpg'
import pic3 from './p3.jpg'
import pic4 from './p4.jpg'
import pic5 from './p5.jpg'
function App() {
  return (
    <div className="App">

      <div className="digital">
        <p>DIGITAL_ARTIST</p>
      </div>

      <div className="name">
        <p>ALEX_IS_ALIVE</p>
      </div>



      <div className="imagestack">
        <div className="img1">
          <img src={pic1} alt="hi" />
          <div className='im1d'>
            <div>
              <p>I DON'T LIKE THE VOID</p>

            </div>
            <p>INR 25,000</p>
          </div>
        </div>
        <div className="img2">
          <img src={pic2} alt="" />
          <div className='im1d'>
            <div>
              <p>FLYING DEAD INSIDE THE OCEAN</p>

            </div>
            <p>INR 30,000</p>
          </div>
        </div>
        <div className="img3">
          <img src={pic3} alt="" />
          <div className='im1d'>
            <div>
              <p>SHADOWS NOT LEAVING ME BEHIND</p>

            </div>
            <p>INR 75,999</p>
          </div>
        </div>
        <div className="div4">
          <div className="imgbox">
            <div className="img4">
              <img src={pic4} alt="" />
              <div className='im1d'>
                <div>
                  <p>EYES SO DARK</p>

                </div>
                <p>INR 20,000</p>
              </div>
            </div>
            <div className="img5">
              <img src={pic5} alt="" />
              <div className='im1d'>
                <div>
                  <p>RUB THE MOIST OF MY EYES</p>
                  {/* <p>dsh</p> */}
                </div>
                <p>INR 1,50,000</p>
              </div>

            </div>
          </div>
          <div className='text'>
            <p>CHILDREN OF THE</p>
            <p>FORGOTTEN</p>
            <p>GOD</p>
          </div>
        </div>

      </div>
      <div className="footer">
        <p>Made with ♥ by Ayush Kumar Bar</p>
      </div>
    </div>


  );
}

export default App;
