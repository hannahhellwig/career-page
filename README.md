
# Company Project: Career page for Comprend 

For your third sprint you will work with fast growing consultancy company Comprend. We will keep practicing using APIs and really stretch your React muscles. 

Your challenge for this sprint is to build a new career page for Comprend using their internal career API. Comprend is currently 80 consultants with skills in digital strategy, project management, UX, visual design, development, content and research with clients like Tele2, SEB, Electrolux, Vattenfall, Skanska and many more. 

On Friday the 12th you will demo for Comprend’s client Services teams, including developers, project managers, content, researchers and human resources. The demo will be followed by an after work with their whole company. 


### How to complete this project

Comprend’s new career page will be an integrated part of their web page and follow the provided wireframes, see assets folder. The overall look and feel of the page should be similar to Comprend´s existing. 

[Assets folder](https://drive.google.com/drive/u/0/folders/1Q8rB7DDSCtUbl5MC2nHeETdW7Bj4DvkN)

Be aware that some features on the wireframes are stretch goals, make sure to read the full brief before you start. 


### Features

1. The career page should consist of the following pages, a job listing page, a page for each job opening and a landing page. Put your focus on the job listing and the job opening pages.
2. Job listing page; Listing of jobs from API, filtering of department and city. 
3. Job opening page; Information from API, apply by provided link. 
4. Start page, static information, instagram feed from instagrams API. 

### Tech Specifications

1. The project should be built in React using the Technigo React starter code.
2. Navigation of pages using React router. 
3. Be responsive and work well on mobile, tablet and desktop. 
4. Content for job openings and team members (stretch goal) should be fetched using the API. 

### The API

Comprend has an internal career API that they have opened for you to use. The API has several end-points which you have to combine to get all the information that you need. 

You’ll reach the end-points at: http://hellotechnigo.comprendwebsites.net/

End-points: 
1. _Jobs._ Fetches either all jobs or a specific job usin the ID of that job in the url of the request. 
2. _Users._ To be used to fetch all team members of Comprend. 
3. _Departments._ Fetch all departments from the API to use in job listings. 
4. _Text._ Other texts for the page such as addresses and social media links. 


### How to approach this as a team

_A few tips_
1. Start by exploring the APIs to see which data you have and how you need to combine the end-points. 
2. This is a bigger web page than you have build before, a smart thing can be to divide the task into different features and work more in smaller feature teams. 
3. Start by drawing and come up with a united plan of what components and properties to use. 
4. What should be stored in state and what should update state? 


## 💥 Success!

After completing this project, you should be more comfortable using React to build web pages. You should also be comfortable in using React router for navigation and updating state on your page when fetching from an API. 


## 🏃 Stretch Goals

Done with the main task?

1. Build the team page of all team member of Comprend. 
2. Implement the “Some of your colleagues” section on each job opening. 
3. In the bottom of each job listing, implement so that you can see next or previous job. (See wireframes). 
4. Implement an Instagram feed for the landing page (See wireframes)
