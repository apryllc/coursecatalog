Project Description

I have an interest in higher education, so with that in mind this is a CR(U)D React application (minus Update) of a basic course catalog for a fake university called Lifelong Learning. I used the Code Louisville CRUD API and created my own data, including fake (and silly) class descriptions.

The app includes 3 routes, the main Home page that allows you to Create a course via a form, the Full Catalog page that Reads the courses from the API, and the Student View (Read), for a final third route. While the Edit button (Full Catalog), and the Enroll/Unenroll buttons (Student View) are currently nonfunctional, the Delete button (Full Catalog) removes courses.

In order for the Delete request to pass, Cross Origin Resource Sharing must be enabled. I used the following CORS plugin from the Chrome store to toggle that option on/off when clicking the Delete button: https://chrome.google.com/webstore/detail/allow-control-allow-origi/nlfbmbojpeacfghkpbjhddihlkkiljbi?hl=en

Things I'd like to build in the future include:

Updated styling\
Functional buttons\
Shopping cart for enroll/unenroll\
A login page for "admins"

To run the app:

Clone the repo to your local machine\
Run npm install for dependencies\
Install CORS extension in Chrome for Delete request\
https://chrome.google.com/webstore/detail/allow-control-allow-origi/nlfbmbojpeacfghkpbjhddihlkkiljbi?hl=en \
Run npm start

Enjoy~
