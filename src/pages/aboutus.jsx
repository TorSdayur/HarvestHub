import React from "react";
import "./../styles/aboutus.css";
export function AboutUs(){
    return (

        <>
        <div className="info-cards">
            <div className="doug-card">
                <h2 className="h2"> Douglass Rollman</h2>
                <img src="https://ca.slack-edge.com/T079D4UFV2L-U07BD32CHA4-3feabf8fec9b-48" />
                <h3>Contribution:</h3>
                <div className="contribution">
                <p className="p">
                In this project, I served as the data specialist, responsible for data collection,
                backend development, database setup, and data cleaning/feature extraction.
                </p>

                <p className="p">
                Since there were no comprehensive datasets on food pantries and related resources,
                I took the initiative to create one from scratch. Using BeautifulSoup and Python,
                I scraped several NYC.gov pages and PDFs to compile data tables for shelters, 
                food pantries, dentists, and sexual health clinics.
                </p>

                <p className="p">
                The dataset for food pantries and soup kitchens was particularly successful, 
                containing over 550 rows of detailed information, including program names, 
                hours and days of operation, phone numbers, and addresses. I dedicated significant 
                time to cleaning and standardizing this dataset to ensure it was accurate and 
                user-friendly.
                </p>

                <p className="p">
                A critical aspect of my work involved geolocating the addresses to extract 
                latitude and longitude values. I then reverse geolocated these coordinates to 
                obtain ZIP codes, boroughs, and standardized address fields. This process was 
                essential for making the data more accessible and usable in our project.
                </p>

                <p className="p">
                Another challenge I faced was managing the varied schedules of the pantries. 
                Some were open on specific days, like Mondays and Fridays, while others operated 
                only on the first and third or second and fourth weeks of the month. To address 
                this, I created binary columns for each day of the week and used regular expressions 
                to map these irregular schedules accurately.
                </p>

                <p className="p">
                I also set up the database using Supabase and uploaded the datasets. This was a 
                new experience for me, as it was my first time working with a database, but it was 
                a rewarding challenge.
                </p>

                <p className="p">
                However, what I found most rewarding was the collaboration with my team. From the 
                start, I made it a priority to maintain open and regular communication. Whether it 
                was updating them on data progress, discussing how the backend setup could support 
                our goals, or aligning on how to present the data most effectively, we were constantly 
                in sync. This ensured that everyone was on the same page and that our efforts were 
                complementary rather than overlapping.
                </p>

                <p className="p">
                In the end, it wasn’t just about the data or the technology—it was about working 
                together to build something meaningful. I’m incredibly proud of what we achieved 
                as a team.
                </p>
                </div>
                <ul className="ul">
                    {/* <li><a><h4>LinkedIn</h4></a></li>
                    <li><a><h4>GitHub</h4></a></li>
                    <li><a><h4>Portfolio</h4></a></li> */}
                </ul>
            </div>
            <div className="tor-card">
                <h2 className="h2"> Tor Sdayur</h2>
                <img src="https://ca.slack-edge.com/T079D4UFV2L-U07BD32CHA4-3feabf8fec9b-48" />
                <h3>Contribution:</h3>
                <div className="contribution">
                <p className="p">
                    I worked as a front-end developer, and developed the site more broadly. I was also responsible for much of the styling. 
                    I integrated our food resources as filterable, and highly navigable 
                    tiles. Though I have used React before, I was by no means comfortable with 
                    it. I learnt a ton about working on this project! Most importantly, I 
                    learnt the quirks of React and React data management as a whole and working 
                    around it.</p>
                </div>
                <ul className="ul">
                    {/* <li><a><h4>LinkedIn</h4></a></li>
                    <li><a><h4>GitHub</h4></a></li>
                    <li><a><h4>Portfolio</h4></a></li> */}
                </ul>
            </div>
            <div className="nathan-card">
                <h2 className="h2"> Nathan Vazquez</h2>
                <img src="https://ca.slack-edge.com/T079D4UFV2L-U07BD32CHA4-3feabf8fec9b-48" />
                <h3>Contribution:</h3>
                <div className="contribution">
                <p className="p">
                In this project I worked as a front developer. For this project we wanted to incorporate
                a map to make it easy for users to find resources using our website. I had experience with 
                Node.js and JS before this project but I learned to use React and react-leaflet so I could 
                create a map of Dental, food, health clinics, shelters and CUNY food resources.
                </p>
                <p className="p">
                For this project we decided to use React to make the page responsive and reactive to user 
                input. Our other front end developer was more experienced with React than I was. Together 
                we reviewed React documentation and he helped me understand the basics of React to propel 
                me forward in this project. I used the React docs and YouTube to get more familiar with 
                React. It was very challenging using a complex framework for the first time but my persistence 
                paid off as I was able to create a great visualization for this project using React and 
                React-leaflet.
                </p>
                <p className="p">
                Our data specialist, Doug, setup Supabase to give us all the data we needed on each of the 
                resources we wanted to spread awareness of. I read the documentation for Supabase and watched 
                tutorials to become familiar with the code for integrating data from Supabase.
                </p>
                <p className="p">
                Alongside connecting the database I was working on implementing leaflet.js into our react page. 
                This was critical to our project as we wanted a easy to read visualization of where the resources 
                were located. I found the ideal library for our project, react-leaflet, and began tinkering with 
                the code to create a map that visualized all the data stored in Supabase. I learned to use states 
                and props to manipulate the data into arrays that I could push them as markers into the Map Component. 
                I relied on StackOverflow, react-leaflet documentation and my teammates to render my map.
                </p>
                <p className="p">
                Thanks to the open discussion with my team we worked quickly and soundly to get all parts of our 
                project working and connected. We used Zoom and Slack to meet through out the three days of the 
                hackathon and used Google Docs to plan out the scope, features and MVP of the product.
                </p>
                <p className="p">
                I am very proud of what we accomplished as a team. For our first hackathon everyone pushed 
                themselves to learn new things, communicated frequently and showed great character throughout 
                this process. This hackathon provided us a great experience for learning and team collaboration.
                </p>
                </div>
                <ul className="ul">
                    {/* <li><a><h4>LinkedIn</h4></a></li>
                    <li><a><h4>GitHub</h4></a></li>
                    <li><a><h4>Portfolio</h4></a></li> */}
                </ul>
            </div>
        </div>
        </>
    )
}