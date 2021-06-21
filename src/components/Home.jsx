import React from 'react'
import './Home.css';
import img1 from './images/img2.png';
import img3 from './images/img3.png';
import img4 from './images/img4.png';
import img5 from './images/img5.png';
import img6 from './images/img6.png';
function Home() {
    return (

        <>
          <br></br><br></br>
            <section id="about">
                <div className="row">
                <div className="col-12 col-md-1"></div>
                    <div className="col-12 col-md-5 text-intro">
                       
                          Hi, 
                    
                        I'm Sehdev,
                        Fullstack Developer.
                   </div>
                    <div className="col-12 col-md-5 profile-intro">
                        <img  alt="img1" src={img1}/>
                    </div>
                    <div className="col-12 col-md-1"></div>
                </div>
            </section>
            <br></br>
            <section id="skills">
                <center><h3>Skills</h3></center>
                <div className="row">
                <div className="col-12 col-md-2"></div>
                    <div className="col-12 col-md-4 skill">
                        <div className="card">
                           <img  alt="img1" src={img3} className="card-img-top" />
                        </div>
                        <div className="card">
                           <img  alt="img1" src={img4} className="card-img-top" />
                        </div>
                    </div>
                    <div className="col-12 col-md-4 skill">
                        <div className="card">
                           <img  alt="img1" src={img5} className="card-img-top" />
                        </div>
                        <div className="card">
                           <img  alt="img1" src={img6} className="card-img-top" />
                        </div>
                    </div>
                    <div className="col-12 col-md-2"></div>
                </div>
            </section>
            <br></br>
            <section id="projects">

            <center><h3>Projects</h3></center>
                <div className="row">
                <div className="col-12 col-md-2"></div>
                    <div className="col-12 col-md-4 skill">
                        <div className="card">

                           <a href="https://confident-thompson-50bed5.netlify.app/"><h3 className='card-text' style={{lineHeight:'300px',textAlign:'center'}}>
                               INDIA COVID-19 TRACKER
                           </h3>
                           </a>
                        </div>
                        <div className="card">
                         <a href="https://skbl2323.pythonanywhere.com/Admincontrol/"><h3 className='card-text' style={{lineHeight:'300px',textAlign:'center'}}>
                               DataVisualization
                           </h3>
                        </a>
                        </div>
                    </div>
                    <div className="col-12 col-md-4 skill">
                        <div className="card">
                        <a href="https://my.newtonschool.co/playground/markup/ytnkfgp8xz/"><h3 className='card-text' style={{lineHeight:'300px',textAlign:'center'}}>
                               Tic Tac Toe
                           </h3>
                        </a>
                        </div>
                        <div className="card">
                        <a href="https://my.newtonschool.co/playground/markup/io0vdazgo8/"><h3 className='card-text' style={{lineHeight:'300px',textAlign:'center'}}>
                              Calculator
                           </h3>
                        </a>
                        </div>
                    </div>
                    <div className="col-12 col-md-2"></div>
                </div>

            </section>
            <br></br>   <br></br>
            <section id="contact">
            <center><h3>Contact</h3></center>
                <div className="row">
                    <div className="col-12 col-md-1"></div>
                    <div className="col-12 col-md-10">

                        <form>
                            <div className="row">
                                <div className="col-12 col-md-6">
                                    <input type="text" placeholder="username" className="form-control" />
                                </div>
                                <div className="col-12 col-md-6">
                                <input type="email" placeholder="email" className="form-control" />
                                </div>
                            </div>
                            <br></br>
                            <div className="row">
                                <div className="col-12 col-md-10">
                                   <textarea className="form-control" placeholder="message..."></textarea>
                                </div>

                                <div className="col-12 col-md-2">
                                     <button type="submit" className="btn btn-default">Send</button>
                                </div>
                               
                            </div>
                        </form>

                    </div>
                   
                    <div className="col-12 col-md-1"></div>
                </div>

            </section>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
           
          <center><strong>Copyright&copy;Sehdev Kumar 2021</strong></center>
          <br></br>
            <br></br>
        </>

    )
}

export default Home;
