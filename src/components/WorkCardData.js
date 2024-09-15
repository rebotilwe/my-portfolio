import project1 from '../assets/images/img6.jpg';
import project2 from '../assets/images/img7.jpg';
import project3 from '../assets/images/img3.jpg';
import img13 from '../assets/images/img13.png';
import img14 from '../assets/images/img14.jpeg';

const campusGPS = "The objective of the task was to build an interactive React application with CRUD operations that integrate with Firebase. The web application takes the form of three separate applications, one for admin, teachers and one for the students. This will be the first task that involves real-time communication between connected apps. Admin App Objective: Oversee the installation, configuration, and maintenance of the GPS system. Ensure the software and hardware components are up to date and functioning correctly. Students and Teachers App Objective: Use the GPS system to find directions to classrooms, administrative offices, libraries, and other campus facilities. Locate specific services, such as dining halls, health centers, or recreational areas. Tools used: Javascript, React, CSS, Bootstrap, and Firebase for data storage and hosting.";

const weatherAppInfo = "The objective of this task was to help gauge my understanding of APIs and how to manipulate app data using APIs as my source of information. I created a weather app that shows the weather forecast of the location the user is in or searching. It also shows real-time news in and around that area/location. Tools used: Javascript, React, CSS, and Firebase for hosting.";

const ehailingAppInfo = "The objective of this task was to enable users to easily book rides from their smartphones or computers without the need for traditional hailing methods. Provide a seamless booking experience with minimal steps. The app has different main pages, namely: Registration, Login, and Home page. The requirements of the app are as follows: 1. New users should be able to register on the app 2. Registered users should be able to login 3. Should be able to add new tasks with task description and priority 4. Should be able to update, delete, and search existing tasks 5. Home page should be accessible when logged in, this is called a guarded route 6. Data should be persistent. Tools used: Javascript, React, CSS, Local Storage, and Firebase for hosting.";

const foodDeliveryAppInfo = "The objective of this task was to build a full-stack (frontend and backend) project for managing employees. It integrates Node.js, Express, EJS, and Firebase Admin. The requirements of the app are as follows: 1. Build a server running on Node.js that will contain both the backend as well as frontend. The backend should manage routing and the logic of the app in terms of data management. 2. The endpoints should have Firebase Firestore code within their logic to handle user requests and to force any necessary redirects to other pages when bad URLs are requested. 3. For the views, set up pages that will allow you to: a. Add new employees b. View all existing employees (brief view) c. View a single employee (detailed view) d. Update existing employees e. Delete existing employees";

const shoppingListAppInfo = "The objective of this task was to help me understand Redux, which is the default tool used in complex projects to manage and share state between components as compared to prop drilling and context. The requirements of the app are as follows: 1. Design a user-friendly interface that allows users to manage their shopping list efficiently. Include pages that allow users to: a. Add new items to the list b. Display the already added items c. Edit existing items on the shopping list d. Delete existing items from the list 2. Firebase should be used as the database, so all edits that happen should be persistent and available on every app reload. 3. Redux should be used for state management within the project: a. Set up a Redux store, reducers, and actions to manage your data. b. All data from Firebase will be stored in the Redux store and then accessed from the app’s components using Redux actions/reducers. Tools used: Javascript, React, Redux, Firebase for storing data and hosting.";

const toDoListAppInfo = "The objective of this task was to create a todo list (task list or task planner) that allows users to add a list of tasks that have three different priority levels (High, Medium, and Low). The app has three main pages, namely: Registration, Login, and Home page. The requirements of the app are as follows: 1. New users should be able to register on the app 2. Registered users should be able to login 3. Should be able to add new tasks with task description and priority 4. Should be able to update, delete, and search existing tasks 5. Home page should be accessible when logged in, this is called a guarded route 6. Data should be persistent. Tools used: Javascript, React, CSS, Local Storage, and Firebase for hosting.";

const hotelAppInfo = "The objective of the task was to build an interactive React application with CRUD operations that integrate with Firebase. The web application takes the form of two separate applications, one for admin and one for the client/customer. This will be the first task that involves real-time communication between connected apps. Admin App Objective: The admin app allows an admin to add and maintain rooms in a hotel. The admin should be able to add new rooms with all information required, update the room later or delete it fully. The admin should be able to view all the rooms and room types already added. Client App Objective: The client app allows users to register, login, browse the rooms the hotel has, and then book when interested. Users should be able to filter these rooms according to a price range provided by the user. The web app should allow users to select a date range for their visit and only allow booking if there is a room available for those days. Tools used: Javascript, React, CSS, Bootstrap, and Firebase for data storage and hosting.";

const restaurantAppInfo = "This task aimed to help me showcase my working knowledge of React Native in the form of a mobile application that allows the user to view food menus and make orders through the application. The requirements of the app are as follows: Create an application that: a. Allows users to register, login, and update their profiles on the application. b. Views food menus c. View a food item d. Add items to cart e. View cart f. Remove items from the cart g. Clear the cart h. Go to checkout i. Place an order. Tools used: React Native, Javascript, NodeJS, Stripe for payment integration, Expo for hosting, and Firebase for data storage. To explore the app on Android Expo Go app, use the link: exp://u.expo.dev/update/7705a239-c4f3-497c-99b3-55bcb5628daf";

const ProjectCardData = [
    {
        imgsrc: project1,
        title: "TUT South Campus GPS",
        text: campusGPS,
        view: "https://campus-gps-379423.web.app/",
    },
    {
        imgsrc: img14,
        title: "Weather App",
        text: weatherAppInfo,
        view: "https://weather-app-f5c30.web.app",
        gitlink: "https://github.com/rebotilwe/weatherApp-"
    },
    {
        imgsrc: project3,
        title: "Nthome Ridez Web App",
        text: ehailingAppInfo,
        gitlink: "https://github.com/ICEP-DEV/Tech.Wise.Web/tree/Bobo"
    },
    {
        imgsrc: img13,
        title: "To do list",
        text: toDoListAppInfo,
        view: "https://to-do-list-592d8.web.app/",
    },
    {
        imgsrc: project2,
        title: "Food Delivery Web App",
        text: foodDeliveryAppInfo,
        view: './contact',
        gitlink: "https://github.com/TSlash122/Bistro"
    },
    {
        imgsrc: project1,
        title: "Hotel App",
        text: hotelAppInfo,
        view: "https://hotel-bookings-app.web.app/",
        gitlink: "https://github.com/mabilisasandile/hotel-booking-app"
    }
];

export default ProjectCardData;
