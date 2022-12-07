import NavBar from './NavBar';
import BackgroundSlider from './BackgroundSlider';
import AboutUs from './AboutUs';


const Dashboard = () => {
    const slides = [
      { url: "dash1.jpg"},
      { url: "dash2.jpg"},
      { url: "dash3.jpg"},
      
    ];
    const containerStyles = {
      width: "1200px",
      height: "400px",
      marginTop: "40px",
      marginLeft: "40px"
    };

    const about = {
        fontSize: '50px',
        marginTop: '100px',
        color: 'rgb(255, 113, 47)'
    }

    const quote = {
        fontStyle: 'italic'
    }

    const footer = {
        marginTop: '20px',
        color:'gray',
        paddingBottom: '20px',
        fontSize: '14px'
    }

    return (
        <div>
        <NavBar />
        <div style={containerStyles}>
          <BackgroundSlider slides={slides} />
          </div>
            <br></br>
            <br></br>
            <br></br> &nbsp;
            <p style={quote}>“The more that you read, the more things you will know. The more that you learn, the more places you’ll go.” - Dr. Seuss</p>

            &nbsp;

            <div>
                <h1 style={about}>About Us</h1>
            </div>

          <div>
            <AboutUs />
          </div>


        <footer style={footer}>
        <br></br>
        <p>TeknoyArchives</p>
        <p>&#169;Copyright 2022</p>
        <p>Power Puff Girls</p>
      </footer>
        </div>

    
    );
  };

  export default Dashboard