const ResumePage = () => {
    return (
        <div className="resume-page-container">
            <h2>Resume</h2>
            <p>Download my <a href="./src/assets/Nick Smith Resume.pdf" download>resume</a></p>

            <h3>Front End Proficiencies</h3>
            <ul>
                <li>HTML5</li>
                <li>CSS3</li>
                <li>JavaScript</li>
                <li>jQuery</li>
                <li>Responsive Design</li>
                <li>React</li>
                <li>Bootstrap</li>
                {/* Add more front-end proficiencies as needed */}
            </ul>

            <h3>Back End Proficiencies</h3>
            <ul>
                <li>Node.js</li>
                <li>Express.js</li>
                <li>MongoDB, Mongoose</li>
                <li>APIs</li>
                <li>MySQL, Sequelize</li>
                <li>GraphQL</li>
                {/* Add more back-end proficiencies as needed */}
            </ul>
        </div>
    );
};

export default ResumePage;
