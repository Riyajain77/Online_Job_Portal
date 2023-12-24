# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

Welcome to Career Hub

Made By:

Name: Riya Jain
University: IIT Gandhinagar
Department: Chemical Engineering

About the Project :
Career Hub is an online job portal web application developed by Riya Jain. This platform enables user registration, login, and seamless navigation to a dedicated job portal. Users can sign up, log in, and explore job opportunities by searching for specific roles. The application also allows users to post job listings and apply for positions using provided application links. 

Tech Stack :
The application is built using HTML, CSS, React JS, and Firebase.

Run Locally : 
To run the project locally, follow these steps:

Clone the project from GitHub ([https://github.com/Riyajain77/hiring_portal_challenge_codepth./tree/my-new-branch)

After successfully logging in, an alert in my login->index.html file directs the user to the job portal page using the following code. To run the file, exclude the login folder, clone the entire project, and execute the npm run build command in the terminal. Subsequently, generate a local host for the job portal page and then include the login folder in the project and replace 'http://localhost:5173/' in the login folder with the actual local host.

```javascript
alert('User sign-up successful!');

// Redirect to the job portal page
window.location.href = 'http://localhost:5173/';
```

Clone the project from GitHub ([https://github.com/Riyajain77/hiring_portal_challenge_codepth./tree/my-new-branch)
In case the branch in my repository is mentioned as main change it to my-new-branch.
Open the terminal and run (npm run build)
The local host of the website will be displayed (e.g., http://localhost:5173/)

How to Use :
Signup and Login: Navigate to the signup and login pages. Note that there might be an error message when switching to the login page; click "OK" to proceed. After successful login, click "OK" to redirect to the job portal.

Test Credentials:

Email: divya@gmail.com
Password: 123456
Job Posting: On the job portal, users can post jobs by clicking the corresponding button. The application is integrated with Firebase, and submitted job posts will be visible on the portal.

Job Search: Users can search for specific jobs by filling in the specifications on the search bar. Ensure all search bar specifications are filled. To view all jobs again, click the "Clear Filter" button.

Applying for Jobs: Click on the "Apply" button to apply for a job.

Firebase App Link
View the Firebase app at [Online Job Portal](https://console.firebase.google.com/u/0/project/online-job-portal-23488/overview)https://console.firebase.google.com/u/0/project/online-job-portal-23488/overview
