const projects = [
    {
        title: "Img-sg",
        subtitle: "Image Steganography",
        description: [
            "Developed a C++ program to perform image steganography using the Least Significant Bit (LSB) replacement algorithm",
            "Increased encryption content by 300% by performing LSB replacement on 8-bit RGB color channels within a pixel",
            "Utilized CMake for build system generation and linking of external libraries such as OpenCV for image processing",
            "Implemented unit tests using Catch2, achieving 100% code coverage, and git workflows for continuous integration (CI)"
        ],
        technologies: ["C++", "CMake", "OpenCV", "Catch2", "git workflows"],
        githubURL: "https://github.com/HenryKim12/image-steganography"
    },
    {
        title: "Newsstand",
        subtitle: "News Platform",
        description: [
            "Developed an app to deliver the latest news articles on world events using React with Bootstrap for a comprehensive UI, Express (Node) for server-side API endpoints, and JWT with cookies to manage stateful user authentication",
            "Established a scheduled cron service to fetch articles from News API and parse data into MongoDB using Mongoose (ORM), ensuring 99% data uptake through automated tasks", 
            "Developed unit tests using Jest to ensure correctness in backend processing and API performance", 
            "Containerized app using Docker, deployed backend on AWS EC2, and utilized AWS S3/Cloudfront for content delivery"
        ],
        technologies: ["Node", "Express", "React", "JWT", "MongoDB", "Jest", "AWS"],
        githubURL: "https://github.com/HenryKim12/newsstand"
    },
    {
        title: "InsightUBC",
        subtitle: "UBC Query Application",
        description: [
            "Developed a full stack application using TypeScript and React to query course and room information within UBC",
            "Implemented a RESTful server using Node and Express, designed to adhere to CRUD principles", 
            "Applied OOP principles to improve code scalability, modularity, and reusability in the entire system", 
            "Executed Test Driven Design (TDD) by implementing tests using Mocha and Chai, achieving 100% code coverage",
            "Incorporated ESLint linter and Agile process with a partner for a cohesive and effective approach to project delivery"
        ],
        technologies: ["TypeScript", "React", "Node", "Express", "Mocha", "Chai"],
        githubURL: "https://ubccsss.org/services/courses/cpsc-310/"
    },
    {
        title: "Hotel DBMS",
        subtitle: "Hotel Database Management System",
        description: [
            "Designed a hotel DBMS using PHP to manage all hotel properties and query hotel information based on user inputs",
            "Used SQL to implement multiple database tables and queries for filtering hotel data", 
            "Managed data within Oracle database and utilized API requests to retrieve and update information"
        ],
        technologies: ["PHP", "SQL", "Oracle"],
        githubURL: "https://github.com/HenryKim12/HotelDatabaseManagementSystem"
    },
    {
        title: "StudySpot",
        subtitle: "Rating Application",
        description: [
            "Developed an application using the MERN tech stack to allow students to create reviews for study spots around UBC",
            "Constructed a NoSQL database using MongoDB Atlas to maintain information for study spots and their reviews", 
            "Implemented a server using Node and Express framework to process requested information to users", 
            "Designed a fully functional user interface using React to implement features required by the backend"
        ],
        technologies: ["Node", "Express", "React", "MongoDB"],
        githubURL: "https://github.com/HenryKim12/studyspot"
    },
    {
        title: "JavaFit",
        subtitle: "Fitness Application",
        description: [
            "Built an application using Java that allows users to record workouts, set new fitness goals, and track macros",
            "Applied OOP principles to improve code scalability, modularity, and reusability in the entire application system", 
            "Developed a complex graphical user interface using Swing to allow users to operate the application", 
            "Implemented unit testing using JUnit to ensure accuracy within the system"
        ],
        technologies: ["Java", "Swing", "JUnit"],
        githubURL: "https://github.com/HenryKim12/JavaFit"
    },
]

export default projects