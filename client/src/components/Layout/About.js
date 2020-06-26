import React from 'react';
import img1 from '../Layout/matt.png';
import img2 from '../Layout/Hervé.png';
import img3 from '../Layout/Gautier.png';

import '../App.css';


const Card = props => {
    return (
            <div className="overflow text-center">

                <div class="card-body">
                    <h2 class="card-title">Matthieu Egea</h2>
                    <img src={img1} alt="Image 1" width="450px" />

                    <h3 class="card-text"> " Coder c’est comme cuisiner un plat avec amour " </h3>
                    <a href="https://fr.linkedin.com/in/matthieu-egea-099b95178" class="btn btn-primary">Linkedin</a>
                </div>


                <div class="card-body">
                    <h2 class="card-title">Hervé Nègre:</h2>
                    <img src={img2} alt="Image 1" width="450px"  />

                    <h3 class="card-text"> " J'aime manger léger mais quand je code c est du lourd! " </h3>
                    <a href="https://github.com/rvlandee34" class="btn btn-primary">Github</a>
                </div>


                <div class="card-body">
                    <h2 class="card-title">Gautier De lescur</h2>
                    <img src={img3} alt="Image 1" width="450px"  />

                    <h3 class="card-text"> " Une Grignette avec supplément CSS svp "</h3>
                    <a href="https://fr.linkedin.com/in/gautier-de-lescure-3bba5619a" class="btn btn-primary">Linkedin</a>
                </div>


                <div class="card-body">
                    <h2 class="card-title">David Rival</h2>
                    <img src={img1} alt="Image 1" width="450px"  />
                    
                    <h3 class="card-text"> " Être Full stack c’est gérer le back, le front, mais je le dis aussi quand j ai trop mangé!"</h3>
                    <a href="https://www.linkedin.com/in/david-rival793/" class="btn btn-primary">Linkedin</a>
                </div>

                <div class="card-body">
                    <h2 class="card-title">We are interested in your opinion</h2>
                    <a href="https://docs.google.com/forms/d/e/1FAIpQLSdFxIiJ0MVi5UJ-OsSGR2dATzy3UddUiONowuI_cDBFVgeAAQ/viewform?embedded=true%22" class="btn btn-primary"> Customer notification</a>
                </div>

        </div>

        
    );

}

export default Card;
