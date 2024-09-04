import React from "react";
import "./../styles/projectinfo.css";

export function ProjectInfo() {

    return (
        <>
        <div className="proj-info">
            <h2>Project Info</h2>
            <p>Below is a video explaining how to use the site</p>
            <iframe width="640px" height="480px"
                src="https://www.youtube.com/embed/tgbNymZ7vqY">
            </iframe>
            <div className="project-info">
                <div className="section">
                <h4>Inspiration</h4>
                <p>Harvest Hub was inspired by the challenge of accessing food resources
                    for individuals with busy schedules or limited availability. The
                    application offers a filterable directory of food pantries, enhanced
                    with an interactive map and detailed contact information. By enabling
                    users to search for food pantries based on their operating hours and
                    location, Harvest Hub aims to make essential resources more accessible
                    and convenient for those in need.
                </p>
                </div>

                <div className="section">
                <h4>What it does</h4>
                <p>Harvest Hub is an interactive platform that connects users with over 550
                    food pantries across the city. The application features a dynamic map
                    and allows users to filter pantries by their days of operation and
                    geographic location, making it easy to find resources that fit their
                    schedules. Additionally, users can directly reach out to the administrators
                    of CUNY programs through a convenient contact form, simplifying the process
                    of getting in touch and accessing support
                </p>
                </div>

                <div className="section">
                <h4>How we built it</h4>
                <p>We built Harvest Hub using React for the frontend, integrating a map that
                    displays food pantry locations. To obtain the data, we used Python to scan
                    a PDF, extracting details about each food pantry, including their hours of
                    operation and contact information. We geolocated all the addresses to provide
                    accurate mapping of each pantry's location. The backend is powered by Supabase,
                    which stores all the data. We implemented one-hot encoding to enable filtering
                    by the days each pantry is open and a distance-from-user function to show the
                    resources that are closest, ensuring users can easily find the most relevant
                    resources based on specific criteria like proximity and days open.
                </p>
                </div>

                <div className="section">
                <h4>Challenges we ran into</h4>
                <p>One of the biggest challenges was ensuring the accuracy of the data, especially
                    since it was extracted from a PDF. We had to clean and verify the information
                    to ensure reliability. Implementing a seamless filtering system that works
                    efficiently with a large dataset was also challenging, as was integrating all
                    components—React, Supabase, and mapping tools—into a cohesive platform. We
                    encountered technical difficulties, particularly with React, as we worked to
                    ensure the user experience was smooth and responsive.
                </p>
                </div>

                <div className="section">
                <h4>Accomplishments that we're proud of</h4>
                <p>
                    We're proud of successfully mapping over 550 food pantries across the city and
                    creating a user-friendly interface that makes it easy for users to access vital
                    resources. We’re particularly proud of the smooth integration of features like
                    filtering by days open and location, as well as the distance-from-user function,
                    all of which greatly enhance the user experience. These accomplishments demonstrate
                    our ability to combine complex data handling with a seamless, intuitive interface.
                </p>
                </div>

                <div className="section">
                <h4>What we learned</h4>
                <p>Through this project, we gained valuable experience in data extraction and
                    geolocation, particularly the challenges of converting unstructured data from
                    PDFs into a structured, actionable format. We also deepened our understanding
                    of implementing complex filtering systems and integrating various technologies
                    like React and Supabase into a cohesive product. Beyond the technical skills,
                    we learned the importance of iterative development and problem-solving as a
                    team, refining our approach based on real-time feedback and ensuring our solution
                    was both effective and user-friendly.
                </p>
                </div>

                <div className="section">
                <h4>What's next for Harvest Hub</h4>
                <p>
                    Next, we plan to continue expanding Harvest Hub by incorporating more resource types,
                    including additional data for dental clinics, sexual health clinics, and homeless
                    shelters. We're also looking to improve the user interface and enhance filtering options,
                    making it easier for users to find exactly what they need. Additionally, we aim to introduce
                    features like real-time updates on pantry and resource availability to keep the information
                    current and reliable.
                </p>
                </div>

                <div className="section">
                <h4>Last Minute</h4>
                <p>Things went horribly wrong with react but we were able to use streamlit, a tech we
                    were previously unfamiliar with to get a workable demo going! With just a few hours
                    to go until deadline, and a mountain of problems emerging with the front end, Doug
                    was able to get a plan b using streamlit up and running which captured the core
                    functionality of our application.
                </p>
                </div>
            </div>
            <div className="skills">
                <h3>Built With:</h3>
                <p>
                    <span>CSS</span>
                    <span>Figma</span>
                    <span>HTML</span>
                    <span>Javascript</span>
                    <span>Leaflet.js</span>
                    <span>Node.js</span>
                    <span>Pandas</span>
                    <span>Postgres</span>
                    <span>Python</span>
                    <span>React</span>
                    <span>React-leaflet</span>
                    <span>Streamlit</span>
                </p>
                <ul>
                <li><a href="https://devpost.com/software/703541?ref_content=user-portfolio&ref_feature=in_progress">Project Submission</a></li>
                <li><a href="https://github.com/NathanRVazquez/harvesthub">Project Repo</a></li>
                </ul>
            </div>
            </div>
        </>
    )
}