import meter1 from "../assets/img/meter1.svg";
import meter2 from "../assets/img/meter2.svg";
import meter3 from "../assets/img/meter3.svg";
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import arrow1 from "../assets/img/arrow1.svg";
import arrow2 from "../assets/img/arrow2.svg";
import colorSharp from "../assets/img/color-sharp.png"

export const Skills = () => {
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1
    }
  };

  return (
    <section className="skill" id="skills">
        <div className="container">
            <div className="row">
                <div className="col-12">
                    <div className="skill-bx wow zoomIn">
                <h2 class="text-center neon-text mb-4">My Skills</h2>
                <div class="row text-center">
                    <div class="btn col-lg-4 col-md-6 mb-4">
                        <div class="p-3 bg-dark text-white rounded">C#</div>
                    </div>
                    <div class="btn col-lg-4 col-md-6 mb-4">
                        <div class="p-3 bg-dark text-white rounded">C</div>
                    </div>
                    <div class="btn col-lg-4 col-md-6 mb-4">
                        <div class="p-3 bg-dark text-white rounded">Java</div>
                    </div>
                    <div class="btn col-lg-4 col-md-6 mb-4">
                        <div class="p-3 bg-dark text-white rounded">JavaScript</div>
                    </div>
                    <div class="btn col-lg-4 col-md-6 mb-4">
                        <div class="p-3 bg-dark text-white rounded">Python</div>
                    </div>
                    <div class="btn col-lg-4 col-md-6 mb-4">
                        <div class="p-3 bg-dark text-white rounded">Priority</div>
                    </div>
                    <div class="btn col-lg-4 col-md-6 mb-4">
                        <div class="p-3 bg-dark text-white rounded">WordPress</div>
                    </div>
                    <div class="btn col-lg-4 col-md-6 mb-4">
                        <div class="p-3 bg-dark text-white rounded">SQL</div>
                    </div>
                    <div class="btn col-lg-4 col-md-6 mb-4">
                        <div class="p-3 bg-dark text-white rounded">HTML</div>
                    </div>
                    <div class="btn col-lg-4 col-md-6 mb-4">
                        <div class="p-3 bg-dark text-white rounded">CSS</div>
                    </div>
                    <div class="btn col-lg-4 col-md-6 mb-4">
                        <div class="p-3 bg-dark text-white rounded">Node.js</div>
                    </div>
                    <div class="btn col-lg-4 col-md-6 mb-4">
                        <div class="p-3 bg-dark text-white rounded">React</div>
                    </div>
                    <div class="btn col-lg-4 col-md-6 mb-4">
                        <div class="p-3 bg-dark text-white rounded">React Native</div>
                    </div>
                </div>
                </div>      
                </div>
            </div>
        </div>
        <img className="background-image-left" src={colorSharp} alt="Image" />
    </section>
  )
}
