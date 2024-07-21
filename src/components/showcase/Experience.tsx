import React from 'react';
import ResumeDownload from './ResumeDownload';

export interface ExperienceProps { }

const Experience: React.FC<ExperienceProps> = (props) => {
    return (
        <div className="site-page-content">
            <ResumeDownload />
            <div style={styles.headerContainer}>
                <div style={styles.header}>
                    <div style={styles.headerRow}>
                        <h1>Infosys</h1>

                    </div>
                    <br />
                    <div style={styles.headerRow}>
                        <h3>Specialist Programmer</h3>

                        <b>
                            <p>Aug 2022 - July 2024</p>
                        </b>
                    </div>
                </div>
            </div>
            <div className="text-block">

                <br />
                <ul>
                    <li>
                        <p>
                            Worked as a Full Stack Developer in Infosys with React , Spring Boot and Node Microservices.
                        </p>
                    </li>
                    <li>

                        <h4><b>Skills:</b></h4>
                        {/* <br/> */}
                        <p>• MERN Stack

                        </p>
                        <p>• Java Spring Boot</p>
                        <p>• Data Structures and Algorithms</p>
                    </li>
                </ul>
            </div>
            <div style={styles.headerContainer}>
                <div style={styles.header}>
                    <div style={styles.headerRow}>
                        <h1>Tequed Labs</h1>

                    </div>
                    <br />
                    <div style={styles.headerRow}>
                        <h3>Student Intern</h3>

                        <b>
                            <p>Aug 2021 - Oct 2021</p>
                        </b>
                    </div>
                </div>
            </div>
            <div className="text-block">

                <br />
                <ul>
                    <li>
                        <p>
                            IOT Based Air Pollution Monitoring System is used to monitor the Air Quality
                            over a web server using Internet.
                        </p>
                    </li>
                    <li>

                        <h4><b>Skills:</b></h4>
                        {/* <br/> */}
                        <p>• NodeMCU V3</p>
                        <p>• Arduino IDE</p>
                        <p>• ThingSpeak Cloud</p>
                    </li>
                </ul>
            </div>
            <div style={styles.headerContainer}>
                <div style={styles.header}>
                    <div style={styles.headerRow}>
                        <h1>Skill India</h1>
                    </div>
                    <br />
                    <div style={styles.headerRow}>
                        <h3>Junior Software Developer</h3>
                        <b>
                            <p>Aug 2018 - Oct 2018</p>
                        </b>
                    </div>
                </div>
            </div>
            <div className="text-block">
                <br />
                <ul>
                    <li>
                        <p>
                            Worked on C and C++ , OOPS Concept and Data Structures.
                        </p>
                    </li>
                    <li>
                        <h4><b>Skills:</b></h4>
                        {/* <br/> */}
                        <p>• C -Programming</p>
                        <p>• C++</p>
                        <p>• Object-Oriented Programming & System.</p>
                        <p>• Data Structures.</p>
                    </li>

                </ul>
            </div>
        </div>
    );
};

const styles: StyleSheetCSS = {
    header: {
        flexDirection: 'column',
        justifyContent: 'space-between',
        width: '100%',
    },
    skillRow: {
        flex: 1,
        justifyContent: 'space-between',
    },
    skillName: {
        minWidth: 56,
    },
    skill: {
        flex: 1,
        padding: 8,
        alignItems: 'center',
    },
    progressBar: {
        flex: 1,
        background: 'red',
        marginLeft: 8,
        height: 8,
    },
    hoverLogo: {
        height: 32,
        marginBottom: 16,
    },
    headerContainer: {
        alignItems: 'flex-end',
        width: '100%',
        justifyContent: 'center',
    },
    hoverText: {
        marginBottom: 8,
    },
    indent: {
        marginLeft: 24,
    },
    headerRow: {
        justifyContent: 'space-between',
        alignItems: 'flex-end',
    },
    row: {
        display: 'flex',
        justifyContent: 'space-between',
    },
};

export default Experience;
