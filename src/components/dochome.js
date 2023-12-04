import React from 'react';
import { useNavigate } from 'react-router-dom';  
import '../styles/HomePage.css';
import CarouselSlider from "react-carousel-slider";
import { Link } from 'react-router-dom';





const Dochome = () => {

    const script = document.createElement('script');
    script.src = 'https://tools.cdc.gov/1M1B';
    script.async = true;

    script.onload = () => {
      // The CDC widget script has loaded, you can now use it.
    };

    document.body.appendChild(script);

    let data = [
        {
          id: "1",
          imgSrc: "https://i.ibb.co/fnJ3Xtx/img1-3.jpg"
        },
        {
          id: "2",
          imgSrc: "https://i.ibb.co/XCRD4tt/img2.png"
        },
        {
          id: "3",
          imgSrc: "https://i.ibb.co/1bBkfYk/ezgif-com-webp-to-jpg-3.jpg"
        },
        {
          id: "4",
          imgSrc: "https://i.ibb.co/LkjNyq4/img4.jpg"
        },
        {
          id: "5",
          imgSrc: "https://i.ibb.co/58rMHCx/fin-2.jpg"
        }
      ];
      let manner = {
        autoSliding: { interval: "2s" }
      };
      let buttonSetting = {
        placeOn: "bottom-beneath",
        //hoverEvent: true,
        style: {
          left: {
            margin: "0px 10px 0px 10px"
          },
          right: {
            margin: "0px 10px 0px 0px"
          }
        }
      };
      let itemsStyle = {
        margin: "0px 0px",
        padding: "0px",
        height:"500px",
        
        
      };

    const navigate = useNavigate();

    const handleLogout = () => {
        navigate('/', { replace: true });
    };

    return (
        <div className="home-page-container">
            

            <nav className="top-navbar">
                <div className="menu-dropdown">
                    <p className="menu-icon">☰<b>Menu</b></p>
                    

                    <div className="side-menu">
                        <ul>
                            <li ><Link to="/DProfile" style={{ textDecoration: 'none' ,color: 'black'}}>Profile Page</Link></li>

                            <li ><Link to="/patientData" style={{ textDecoration: 'none' ,color: 'black'}}>Fetch Patients Data</Link></li>
                            <li onClick={handleLogout}>Logout</li>
                        </ul>
                    </div>
                </div>

                <div className="nav-title">
                    <span className="stethoscope-icon">🩺</span>
                    Healthcare Analytics
                </div>



                
                <div style={{ width: 'fit-content' }}></div>
            </nav>
            

            {/* <div className="info-container">
                <h1>Heart Care Information</h1>
                <p>Heart diseases are among the leading causes of death globally. Regular check-ups, a balanced diet, and an active lifestyle are essential for heart health.</p>
                <h2>Common Misconceptions</h2>
                <ul>
                    <li>Young people don't have to worry about heart disease.</li>
                    <li>If you have heart disease, you should avoid exercise.</li>
                    <li>Diet doesn't affect heart health.</li>
                    <li>Only the elderly are at risk of heart disease.</li>
                </ul>
            </div> */}
<div class="info-container" >
<div className="CarouselSlider">
      <CarouselSlider
        slideItems={data}
        manner={manner}
        buttonSetting={buttonSetting}
        itemsStyle={itemsStyle}
      />
    </div>

    
         

    </div>

    <div class = "imgContainer">
            <img src="https://i.ibb.co/kxmpVDk/main.jpg" alt="Add Cards" style={{marginTop:"30px",width:"500px",height:"500px",marginLeft: "4em"}} />
            <div class="text">
              <h1>Misconceptions About Heart Disease</h1>
              
<h2>Myth 1 : Heart diseases are for men and cancer is for women :</h2>
<h3>Fact :</h3>

<p style={{fontSize:"20px"}}>The actual fact is heart disease attacks more women when compared with men. It is a most deadly disease which will be quicker and very painful. As per a survey, 1 out of 31 American women die because of heart diseases. Its like one death for one minute.</p>

<h2>Myth 2 : Heart diseases happen only for old people :</h2>
<h3>Fact :</h3>

<p style={{fontSize:"20px"}}>Heart diseases can happen to almost every age group person. It has been proven that taking birth control pills or smoking can increase the risk of heart diseases by 20%. Heart risks increase with age and certain habits like overeating or un healthier lifestyle can cause plaque and accumulate fat in arteries which might result in heart attacks.</p>

<h2>Myth 3 : I don't sense any symptoms related to heart diseases :</h2>
<h3>Fact :</h3>

<p style={{fontSize:"20px"}}>Generally 64% of people die of heart disease will not sense any symptoms beacuse these symptoms will vary from men and women. But according to a survey, women will experience shortness of breath and nausea and sometimes dizziness along with lower/upper abdomen pain.</p>
<script src="https://tools.cdc.gov/1M1B"></script>
              </div>
             
            </div>
          
            <div data-cdc-widget="CountyMapsTemplate" data-instance-name="HeartDiseaseAndStroke" data-default-state="Alabama" data-default-dataset="Heart Disease" style={{width:"1000px"}}></div> <script src="https://tools.cdc.gov/1M1B"></script>
              </div>
      

  



    
      
    );
};

export default Dochome;
