const projects = [
  {
    title: 'Img-sg',
    subtitle: 'Image Steganography',
    description: [
      'Developed a C++ program to perform image steganography using the Least Significant Bit (LSB) replacement algorithm',
      'Increased encryption content by 300% by performing LSB replacement on 8-bit RGB color channels within a pixel',
      'Utilized CMake for build system generation and linking of external libraries such as OpenCV for image processing',
      'Implemented unit tests using Catch2, achieving 100% code coverage',
    ],
    technologies: ['C++', 'CMake', 'OpenCV', 'Catch2'],
    githubURL: 'https://github.com/HenryKim12/image-steganography',
  },
  {
    title: 'Newsstand',
    subtitle: 'News Platform',
    description: [
      'Developed an app to deliver latest news articles using React, Express (Node), and JWT authentication',
      'Established a scheduled cron service to fetch articles from News API and parse into MongoDB using Mongoose',
      'Developed unit tests using Jest for backend processing and API performance',
      'Containerized with Docker, deployed on AWS EC2, and utilized AWS S3/CloudFront for content delivery',
    ],
    technologies: ['Node', 'Express', 'React', 'JWT', 'MongoDB', 'Jest', 'AWS'],
    githubURL: 'https://github.com/HenryKim12/newsstand',
  },
  {
    title: 'InsightUBC',
    subtitle: 'UBC Query Application',
    description: [
      'Full stack application using TypeScript and React to query course and room information within UBC',
      'Implemented a RESTful server using Node and Express, designed to adhere to CRUD principles',
      'Applied OOP principles to improve code scalability, modularity, and reusability',
      'Executed Test Driven Design (TDD) with Mocha and Chai, achieving 100% code coverage',
    ],
    technologies: ['TypeScript', 'React', 'Node', 'Express', 'Mocha', 'Chai'],
    githubURL: 'https://ubccsss.org/services/courses/cpsc-310/',
  },
  {
    title: 'Hotel DBMS',
    subtitle: 'Hotel Database Management System',
    description: [
      'Designed a hotel DBMS using PHP to manage all hotel properties and query hotel information',
      'Used SQL to implement multiple database tables and queries for filtering hotel data',
      'Managed data within Oracle database and utilized API requests to retrieve and update information',
    ],
    technologies: ['PHP', 'SQL', 'Oracle'],
    githubURL: 'https://github.com/HenryKim12/HotelDatabaseManagementSystem',
  },
  {
    title: 'StudySpot',
    subtitle: 'Rating Application',
    description: [
      'MERN stack application allowing students to create reviews for study spots around UBC',
      'Constructed a NoSQL database using MongoDB Atlas to maintain study spot and review information',
      'Implemented a server using Node and Express to process requested information',
      'Designed a fully functional React UI with all features required by the backend',
    ],
    technologies: ['Node', 'Express', 'React', 'MongoDB'],
    githubURL: 'https://github.com/HenryKim12/studyspot',
  },
  {
    title: 'JavaFit',
    subtitle: 'Fitness Application',
    description: [
      'Java application allowing users to record workouts, set fitness goals, and track macros',
      'Applied OOP principles to improve code scalability, modularity, and reusability',
      'Developed a complex graphical user interface using Swing',
      'Implemented unit testing using JUnit to ensure accuracy within the system',
    ],
    technologies: ['Java', 'Swing', 'JUnit'],
    githubURL: 'https://github.com/HenryKim12/JavaFit',
  },
]

export default projects
