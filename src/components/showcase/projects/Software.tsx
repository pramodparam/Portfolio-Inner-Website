import React from 'react';
// @ts-ignore
import saga from '../../../assets/pictures/projects/software/saga.mp4';
// @ts-ignore
import computer from '../../../assets/pictures/projects/software/computer.mp4';
// @ts-ignore
import codepen from '../../../assets/pictures/projects/software/codepen.mp4';
// @ts-ignore
import scroll from '../../../assets/pictures/projects/software/scroll.mp4';
// @ts-ignore
import portfolio from '../../../assets/pictures/projects/software/portfolio.mp4';
// @ts-ignore
import hotel from '../../../assets/pictures/projects/software/hotel.mp4';
// @ts-ignore
import Pickashow from '../../../assets/pictures/projects/software/Pikashow.mp4'

import ResumeDownload from '../ResumeDownload';
import VideoAsset from '../../general/VideoAsset';

export interface SoftwareProjectsProps { }

const SoftwareProjects: React.FC<SoftwareProjectsProps> = (props) => {
    return (
        <div className="site-page-content">
            <h1>Software</h1>
            <h3>Projects</h3>
            <br />
            <p>
                Below are some of my favorite software projects I have worked on
                over the last few years.
            </p>
            <br />
            <ResumeDownload />
            <br />
            <div className="text-block">
                <h2>1. Codepen Clone</h2>
                <br />
                <p>
                    CodePen is a social development environment for front-end designers and developers.</p>
                <br></br>
                <b>  <i>- React Js </i></b>
                <b><i>- Vite Js</i></b>
                <b><i>- Tailwindcss</i></b>
                <b><i>- React-Codemirror</i></b>
                <b><i>- Eslint</i></b>

                <br />
                <div className="captioned-image">
                    <VideoAsset src={codepen} />
                    <p style={styles.caption}>
                        <sub>
                            <b>Figure 1:</b> Codepen website
                        </sub>
                    </p>
                </div>
                <br />
                <h3>Links:</h3>
                <ul>
                    <li>
                        <a
                            rel="noreferrer"
                            target="_blank"
                            href="https://codepen-clone-snowy.vercel.app/"
                        >
                            <p>
                                <b>[Website]</b> Codepen
                            </p>
                        </a>
                    </li>
                    <li>
                        <a
                            rel="noreferrer"
                            target="_blank"
                            href="https://github.com/pramodparam/Codepen-Clone"
                        >
                            <p>
                                <b>[Github]</b> Codepen Repository
                            </p>
                        </a>
                    </li>
                </ul>
            </div>
            <div className="text-block">
                <h2>2. My Portfolio</h2>
                <br />
                <p>
                    My portfolio website, here you can see all my works , skills , education , projects list & so on.
                </p>
                <br />
                <b>  <i>- React Js </i></b>
                <b><i>- gh-pages</i></b>
                <b><i>- Typewriter-effect</i></b>
                <b><i>- react-scroll</i></b>
                <b><i>- Eslint</i></b>
                <br />
                <div className="captioned-image">
                    <VideoAsset src={portfolio} />
                    <p style={styles.caption}>
                        <p>
                            <sub>
                                <b>Figure 2: </b> My Portfolio website
                            </sub>
                        </p>
                    </p>
                </div>

                <br />
                <h3>Links:</h3>
                <ul>
                    <li>
                        <a
                            rel="noreferrer"
                            target="_blank"
                            href="https://pr-my-portfolio.vercel.app/"
                        >
                            <p>
                                <b>[Website]</b> My Portfolio
                            </p>
                        </a>
                    </li>
                    <li>
                        <a
                            rel="noreferrer"
                            target="_blank"
                            href="https://github.com/pramodparam/Portfolio"
                        >
                            <p>
                                <b>[GitHub]</b> My Portfolio Repository
                            </p>
                        </a>
                    </li>
                </ul>
            </div>
            <div className="text-block">
                <h2>3. Hotel Management</h2>
                <br />
                <p>
                A Complete MERN based hotel management application .You can Search Rooms ,Book Rooms ,
                 Cancel Booking, Stripe
                 Payment Model , As a ADMIN you can get all the customer details.
                </p>
                <br />
                <b>  <i>- React Js </i></b>
                <b><i>- MongoDB</i></b>
                <b><i>- Node Js</i></b>
                <b><i>- Express Js</i></b>
                <b><i>- Redux</i></b>
                <b><i>- Bootstrap</i></b>
                <b><i>- Antd</i></b>
                <br />
                <div className="captioned-image">
                    <VideoAsset src={hotel} />
                    <p style={styles.caption}>
                        <sub>
                            <b>Figure 3:</b> Complete Hotel Management
                        </sub>
                    </p>
                </div>

                <br />
                <h3>Links:</h3>
                <ul>
                    <li>
                        <a
                            rel="noreferrer"
                            target="_blank"
                            href="https://pr-hotelmanagement.netlify.app/"
                        >
                            <p>
                                <b>[Website]</b> - Hotel-Management
                            </p>
                        </a>
                    </li>
                    <li>
                        <a
                            rel="noreferrer"
                            target="_blank"
                            href="https://github.com/pramodparam/Hotel-Management-Application"
                        >
                            <p>
                                <b>[Github]</b> - Hotel Management Repository 
                            </p>
                        </a>
                    </li>
                </ul>
               
            </div>



            <div className="text-block">
                <h2>4. Pika-Show</h2>
                <br />
                <p>
                Search Movies, TV series and Bookmark your favourite ones.
                </p>
                <br />
                <b>  <i>- React Js </i></b>
                <b><i>- JavaScript</i></b>
                <b><i>- TypeScript</i></b>
                <b><i>- Material-UI</i></b>
                <br />
                <div className="captioned-image">
                    <VideoAsset src={Pickashow} />
                    <p style={styles.caption}>
                        <sub>
                            <b>Figure 4:</b> Pika-Show Website
                        </sub>
                    </p>
                </div>

                <br />
                <h3>Links:</h3>
                <ul>
                    <li>
                        <a
                            rel="noreferrer"
                            target="_blank"
                            href="https://picka-show.vercel.app/"
                        >
                            <p>
                                <b>[Website]</b> - Pika-Show
                            </p>
                        </a>
                    </li>
                    <li>
                        <a
                            rel="noreferrer"
                            target="_blank"
                            href="https://github.com/pramodparam/Picka-Show"
                        >
                            <p>
                                <b>[Github]</b> - Pika-Show Repository 
                            </p>
                        </a>
                    </li>
                </ul>
               
            </div>
            <ResumeDownload />
        </div>
    );
};

const styles: StyleSheetCSS = {
    video: {
        width: '100%',
        padding: 12,
    },
    caption: {
        width: '80%',
    },
};

export default SoftwareProjects;
