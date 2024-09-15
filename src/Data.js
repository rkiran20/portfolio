import p1image1 from "./img/opinionOrbit1.png";
import p1image2 from "./img/opinionOrbit2.png";
import p1image3 from "./img/opinionOrbit3.png";
import p1image4 from "./img/opinionOrbit4.png";
import p2image1 from "./img/rmtDev1.png";
import p2image2 from "./img/rmtDev2.png";
import p2image3 from "./img/rmtDev3.png";
import p2image4 from "./img/rmtDev4.png";
import p3image1 from "./img/filmFrames4.png";
import p3image2 from "./img/filmFrames2.png";
import p3image3 from "./img/filmFrames3.png";
import p3image4 from "./img/filmFrames1.png";
import p4image1 from "./img/jsSounds1.png";
import p4image2 from "./img/jsSounds2.png";
import p4image3 from "./img/jsSounds3.png";
import p4image4 from "./img/jsSounds4.png";
import p5image1 from "./img/pathVisualizer1.png";
import p5image2 from "./img/pathVisualizer2.png";
import p5image3 from "./img/pathVisualizer3.png";

export const skillsData = [
  "Data Structures and Agorithms",
  "HTML",
  "CSS",
  "Java Script",
  "Git",
  "React",
  "Redux",
  "Next JS",
  "Type Script",
  "Styled Components",
];

export const specifiedSkills = [
  "react",
  "nextJs",
  "MongoDb",
  "Tailwind",
  "Prisma",
];

export const projectsData = [
  {
    id: 1,
    projectName: "opinionOrbit",
    image: p1image4,
    details:
      "OpinionOrbit is a React application built for the students of IIT Kanpur. I developed the project from scratch using React and MongoDB to provide a platform where students can share and explore opinions about various places on campus. This opinions platform required a well-structured codebase, with different components handling user interactions, review submissions, and hashtag-based navigation for easy exploration of feedback.",
    skills: ["React", "mongodb", "typescript", "css", "html"],
  },
  {
    id: 2,
    projectName: "rmtDev",
    image: p2image4,
    details:
      "rmtDev is a React application designed to provide a comprehensive platform for remote job opportunities in the development field. I built this project using React to create a dynamic interface that pulls job data from an API. This job platform features a user-friendly layout where users can easily browse and search for remote development jobs. The project leverages React's component-based architecture for efficient data handling and UI updates, ensuring a smooth and responsive user experience.",
    skills: ["React", "Api's", "typescript", "css", "html"],
  },
  {
    id: 3,
    projectName: "filmFrames",
    image: p3image4,
    details:
      "filmFrames is a react application built for people who want to look on the images of their desired movies. i built the project from scratch where i am the designer and developer for the website with react,redux-toolkit and styled components as css. this web application required a lot of heavy lifting to create a universal recent-films data, upcoming films data and also most rated film data.",
    skills: ["React", "Redux", "Javascript", "styled-components", "html"],
  },
  {
    id: 4,
    projectName: "jsSounds",
    image: p4image4,
    details:
      "jsSounds is a JavaScript application designed for music enthusiasts to explore how different drum sounds blend when tuned together. I developed this project using JavaScript, relying heavily on Object-Oriented Programming principles to structure the application efficiently.",
    skills: ["javascript", "css", "html"],
  },
  {
    id: 5,
    projectName: "pathFinder",
    image: p5image1,
    details:
      "Path-Finding Algorithm Visualizer is an interactive tool I developed using React, allowing users to visualize and compare various path-finding algorithms like BFS, DFS, and Dijkstra's Algorithm. The project offers a clear and dynamic user interface that showcases how these algorithms explore and solve complex grids in real-time.",
    skills: ["Data-structures and algorithms", "DFS", "bfs", "dijkstra"],
  },
];

export const projectDetails = [
  {
    id: 1,
    name: ["o", "p", "i", "n", "i", "o", "n", "O", "r", "b", "i", "t"],
    liveServer: "https://opinion-orbit.vercel.app/",
    gitHubLink: "https://github.com/rkiran20/opinionOrbit",
    details:
      "OpinionOrbit is a React application built for the students of IIT Kanpur. I developed the project from scratch using React and MongoDB to provide a platform where students can share and explore opinions about various places on campus. This opinions platform required a well-structured codebase, with different components handling user interactions, review submissions, and hashtag-based navigation for easy exploration of feedback.",
    skills: ["React", "Mongodb", "Typescript", "CSS", "HTML"],
    image1: p1image2,
    goal: "The platform focuses on creating a centralized place where students can provide feedback about their experiences, helping others make informed decisions. By leveraging a simple hashtag-based navigation system, users can click on relevant hashtags (e.g., #Hall12, #newSac) to explore specific categories of reviews.This project addresses the need for localized, student-specific information about campus amenities and experiences, fostering a more connected and informed student body.",
    image2: p1image3,
    aboutProject:
      "React made the most sense for the component-based architecture and efficient rendering capabilities and MongoDB, for its flexible document model that aligns well with JSON-type data structures.Utilized React Hooks and Context API for efficient data flow, eliminating the need for additional libraries like Redux.Implemented direct data access methods, avoiding prop drilling to maintain clean and manageable codeand finally Vercel is also obvious choice for its speed, reliability, and seamless integration with React applications.",
    image3: p1image1,
    stack: ["S", "t", "a", "c", "k"],
    problemsAndThoughts:
      "Throughout the development of OpinionOrbit, I encountered several challenges that ultimately enhanced my skills as a developer. The most significant hurdle was maintaining an organized and efficient code structure, which underscored the critical importance of thoughtful architecture in software development. As I navigated these obstacles, I gained invaluable insights into various aspects of web development. Notably, I deepened my understanding of React Hooks, mastering their nuances and applications. Additionally, I honed my skills in API integration, learning to seamlessly incorporate external data sources into the application. These lessons not only improved my technical proficiency but also sharpened my problem-solving abilities and project management skills, contributing significantly to my growth as a software engineer.",
  },
  {
    id: 2,
    name: ["r", "m", "t", "D", "e", "v"],
    liveServer: "https://rmt-dev-ten.vercel.app/",
    gitHubLink: "https://github.com/rkiran20/rmt-dev",
    details:
      "rmtDev is a React application designed to provide a comprehensive platform for remote job opportunities in the development field. I built this project using React to create a dynamic interface that pulls job data from an API. This job platform features a user-friendly layout where users can easily browse and search for remote development jobs. The project leverages React's component-based architecture for efficient data handling and UI updates, ensuring a smooth and responsive user experience.",
    skills: ["React", "Api's", "Typescript", "CSS", "HTML"],
    image1: p2image2,
    goal: "rmtDev is a platform that focuses on providing developers with access to remote job opportunities, helping them find suitable positions more efficiently. By leveraging features like filtering, sorting, and pagination, users can easily navigate through job listings. This project addresses the growing demand for remote developer jobs, offering a streamlined solution for developers to discover relevant opportunities, while enhancing the job search experience with user-friendly tools for managing large datasets.",
    image2: p2image3,
    aboutProject:
      "I used React especially for handling dynamic job data from an API. I utilized React Hooks throughout the project to manage user interactions, such as bookmarked jobs, allowing the bookmark count and job data to be dispatched universally without needing Redux, ensuring clean and maintainable code. Vercel was the obvious choice for deployment due to its speed, reliability, and seamless integration with React, making the development process smoother and faster.",
    image3: p2image1,
    stack: ["S", "t", "a", "c", "k"],
    problemsAndThoughts:
      "I could spend all day describing the lessons I learned working on this project, but the most important ones involved deepening my understanding of React Hooks and API integration. One key optimization I implemented was using debouncing to improve the efficiency of my search feature, reducing unnecessary re-renders. As this was my first large-scale project using React, I also gained valuable insights into code structure and organization. Initially, I would write sloppy code just to get things working, but I quickly realized how that approach leads to complications down the road. Now, I spend much more time refactoring and fine-tuning each line of code, focusing on readability and maintainability to avoid future headaches.",
  },
  {
    id: 3,
    name: ["f", "i", "l", "m", "F", "r", "a", "m", "e", "s"],
    gitHubLink: "https://github.com/rkiran20/movies-spot",
    liveServer: "https://film-frames.vercel.app/",
    details:
      "filmFrames is a react application built for people who want to look on the images of their desired movies. i built the project from scratch where i am the designer and developer for the website with react,redux-toolkit and styled components as css. this web application required a lot of heavy lifting to create a universal recent-films data, upcoming films data and also most rated film data. ",
    skills: ["React", "Redux", "Javascript", "Styled-Components", "HTML"],
    image1: p3image2,
    goal: "To develop a comprehensive, user-friendly web application that enables movie enthusiasts to explore visual content from a diverse array of films - including recent releases, upcoming movies, and critically acclaimed works - with an added feature allowing users to search for specific films, thereby enhancing discoverability and personalizing the browsing experience while showcasing advanced React development skills and efficient data management.",
    image2: p3image3,
    aboutProject:
      "React was the optimal choice for this web application due to its efficient handling of API data fetching. The project extensively utilizes React Hooks and Redux throughout, ensuring smooth management and universal dispatch of various data types, including user search results, recent movies, upcoming releases, and popular films. The combination of React's component-based architecture and Redux's state management capabilities allows for seamless data flow and updates across the application. This approach significantly enhances the user experience by providing quick access to diverse movie information.",
    image3: p3image1,
    stack: ["S", "t", "a", "c", "k"],
    morePoints:
      "This experience has not only improved my technical skills but also instilled a more meticulous and quality-focused development mindset.",
    problemsAndThoughts:
      "Throughout the development of FilmFrames,I opted for styled-components due to its cleaner CSS-in-JS structure, which effectively prevents style overrides. Initially, I encountered challenges implementing Redux to reduce prop drilling and in fetching data from APIs. I overcame these obstacles through persistent effort and thorough study of documentation. This project significantly deepened my understanding of asynchronous JavaScript functions and API integration techniques and Redux. Perhaps most importantly, it has transformed my coding approach. I now dedicate more time to refactoring and optimizing each line of code, resulting in cleaner, more maintainable solutions.",
  },
  {
    id: 4,
    name: ["j", "s", "S", "o", "u", "n", "d", "s"],
    gitHubLink: "https://github.com/rkiran20/js-sounds",
    liveServer: "https://js-sounds.vercel.app/",
    details:
      "jsSounds is a JavaScript application designed for music enthusiasts to explore how different drum sounds blend when tuned together. I developed this project using JavaScript, relying heavily on Object-Oriented Programming principles to structure the application efficiently.",
    skills: ["Javascript", "CSS", "HTML"],
    image1: p4image2,
    goal: "JsSounds is an interactive web-based drum machine application that allows users to create and play custom drum patterns. This project showcases a dynamic and engaging user interface where participants can experiment with different drum sounds, adjust tempos, and create unique rhythmic compositions. By combining audio manipulation with interactive controls, JsSounds offers an accessible and fun way for both novice and experienced musicians to explore rhythm creation in a digital environment.",
    image2: p4image3,
    aboutProject:
      "JsSounds is built using vanilla JavaScript, leveraging the power of ES6 classes and the Web Audio API. The application utilizes HTML5 for structure and CSS3 for styling, creating a responsive and visually appealing interface.This tech stack enables efficient audio processing, smooth user interactions, and a lightweight yet powerful drum machine application without relying on heavy frameworks.",
    image3: p4image1,
    stack: ["S", "t", "a", "c", "k"],
    problemsAndThoughts:
      "Developing JsSounds presented several challenges that pushed me to deepen my understanding of JavaScript and audio programming. One significant hurdle was synchronizing the audio playback with visual cues, which I overcame by carefully managing the timing using setInterval and the Web Audio API's precise timing capabilities.I gained more grip in Object-Oriented Programming in JS and on DOM manipulation for dynamic user interactions.This experience has instilled in me a user-centric approach to development, where I now prioritize intuitive design alongside technical functionality.",
  },
  {
    id: 5,
    name: ["p", "a", "t", "h", "F", "i", "n", "d", "e", "r"],
    gitHubLink: "https://github.com/rkiran20/path-finder",
    liveServer: "https://path-finder-lac.vercel.app/",
    details:
      "Path-Finding Algorithm Visualizer is an interactive tool I developed using React, allowing users to visualize and compare various path-finding algorithms like BFS, DFS, and Dijkstra's Algorithm. The project offers a clear and dynamic user interface that showcases how these algorithms explore and solve complex grids in real-time.",
    skills: ["Data-structures and algorithms", "DFS", "BFS", "Dijkstra's"],
    image1: p5image2,
    goal: "The primary goal of this project was to create a platform that simplifies the learning and understanding of fundamental path-finding algorithms. By providing visual feedback for each algorithm, users can explore how different strategies approach grid traversal and optimal path selection. The project encourages hands-on exploration, enabling users to interact with different algorithms and grid configurations to deepen their comprehension of these concepts.",
    image2: p5image3,
    aboutProject:
      "This project was built using React for the front end to manage the interactive user interface and dynamic rendering of grids and animations. React’s useContext was utilized to effectively manage state, preventing prop drilling. Additionally, advanced React hooks like useState and useEffect were leveraged to handle algorithm execution and re-rendering smoothly. CSS was used for grid styling and animations, offering a clean and responsive UI. The project remains lightweight while providing powerful visualizations of complex algorithms.",
    image3: p5image1,
    stack: ["S", "t", "a", "c", "k"],
    problemsAndThoughts:
      "Developing this project introduced several challenges, particularly in synchronizing animations with the real-time performance of algorithms like BFS, DFS, and Dijkstra's. Managing the state efficiently across multiple components without introducing unnecessary prop drilling was crucial, and this was achieved using React’s useContext. This approach allowed me to improve not just my understanding of algorithmic concepts, but also my skills in component architecture and state management in React. The process reinforced the importance of building intuitive, user-centric interfaces that make learning more interactive and engaging.",
  },
];
