# Cookie-Stand-Next.js

## Javascript and Web Frameworks

### Problem Domain

Teach yourself a new language or framework! Work with your team and take the next 2 class/lab sessions and learn something completely new revisiting the Salmon Cookies project, implementing it in a new framework

### Getting Started

- Visit and re-familiarize yourself with the [Salmon Cookies Project](https://canvas.instructure.com/courses/6745216/assignments/37279120#submit)
- Create a new repository for your work, with the name of the framework you have been assigned.

### Assignment

For the purposes of educating your class/teammates, your group will implement the “Salmon Cookies” application using your assigned framework, with all features from the original assignment.

Assume, for this assignment, that your employer has asked your team to do a proof of concept of a javascript framework, to assess it’s viability as a replacement for their legacy system. Your task will be to complete a full analysis report and give a presentation to the class as to your findings.

### Framework Links

[Next FrameWork Home Page](https://vercel.com/solutions/nextjs?utm_source=google&utm_medium=cpc&utm_campaign=18576682555&utm_campaign_id=18576682555&utm_term=next%20js%20frontend&utm_content=141035138606_665293501611&gad=1&gclid=CjwKCAjw5MOlBhBTEiwAAJ8e1mAJHtI42KXRqmIi1WvuPpxk6YWn-vs_iz2BU1BW1Ydiv_6p3aG81BoCsuIQAvD_BwE)

[Next Framework Documentation](https://vercel.com/docs)

### Documentation

- thoughts on docs for framework

### Presentation

Prepare a presentation (10-15 minutes) that details the implementation requirements of your framework. Format this as a mini-lecture, with the mindset being that your task is to quickly “spin up” a small team of developers to implement a new feature in this framework.

Give us just enough information for us to “go on” so that we could reproduce your work without having to feel the pain of R&D that you went through.

Use this [REPORT TEMPLATE](https://canvas.instructure.com/courses/6745216/assignments/37279120#submit)as the basis of facts for your presentation as well as your assignment in Canvas.

### Advantages (Pros)

-  Overall compared to the other frameworks Nextjs felt the easiest to get started with. We tried using Vue but immediately had issues with even intalling it to our machine. Using Next.js the docs were easier to interpret. I think being able to jump right in a get started is a huge advantage of any framework. This speaks to the quality of Nextjs docs.

- Easy to bring in other React elements like hooks. If you have already been working with React Nextjs is very approachable with the structure it provides.

### Troubleshooting (Cons)

- Unique bugs that can be difficult to interpret like the hydration error we faced when trying to launch our code. The program was functioning correctly so it was difficult to understand the cause behind the error we were getting.

- Although it is easy to get started advancing from there can be quite difficult. It's seemed difficult at times to truly gauge if we were getting the most out of Nextjs's benefits.

##### Problem

Hydration error
![Example 1](./Error%20Assets/Screenshot%202023-07-14%20at%208.26.33%20PM.png)
![Example ](./Error%20Assets/Screenshot%202023-07-14%20at%208.26.44%20PM.png)
![Example 3](./Error%20Assets/Screenshot%202023-07-14%20at%208.26.52%20PM.png)

##### Solution Link

[Text Content does not match Server-Content HTML](https://nextjs.org/docs/messages/react-hydration-error)

- Item 2

### System Requirments

- Above and beyond ‘node’ and ‘linux’, what dependencies or core requirements exist for this framework?

  - React: Next.js is built on top of React, a JavaScript library for building user interfaces. React is a fundamental requirement for developing with Next.js.
  - Next.js Package: You need to install the Next.js package as a project dependency. You can do this using a package manager like npm or Yarn. The package provides the core functionality and features of Next.js.
  - Package Manager: Next.js projects typically use a package manager like npm or Yarn to manage dependencies and handle project builds. You need to have either npm or Yarn installed on your system to manage the project's dependencies effectively.
  - Babel: Next.js utilizes Babel, a JavaScript compiler, to enable the use of modern JavaScript features and transpile code for compatibility across different environments. Babel is set up by default when creating a new Next.js project.
  - Webpack: Next.js internally uses webpack, a popular module bundler, to bundle and optimize the project's assets for production. Webpack is integrated into Next.js and is configured to handle the project's assets automatically.
  - CSS Support: Next.js provides built-in support for styling in CSS, CSS modules, and CSS-in-JS libraries like styled-components. Depending on your preferred styling approach, you may have additional dependencies related to CSS.
  - API Routes and Backend Dependencies: If your Next.js application requires server-side functionality or API endpoints, you may have dependencies related to backend technologies such as Express, MongoDB, PostgreSQL, or other databases.

- Is it easily deployable to the cloud? Does it require a certain database?

Yes, Next.js is easily deployable to various cloud platforms. It provides flexibility in terms of deployment options and supports popular cloud providers like AWS, Google Cloud Platform (GCP), Microsoft Azure, and others.

### Operating Instructions

1. [Fork Repo](https://github.com/Hcooper23/Cookie-Stand-Next.js) down from GitHub
2. Run NPM i for your system to install all dependencies
3. Run in Terminal npm run dev
4. Open your web browser and go to the following link <http://localhost:3000>
5. Go through application and see the key concept of utilizing the form and the addition on a new store and the simple review of production numbers for company performance.

### Ramp-Up Projections

- How long would/should it take a team of mid-junior developers to become productive?

  - Familiarity with Next.js: If the developers are already familiar with Next.js or have experience working with similar frameworks like React, they may require less time to become productive. In such cases, they might start contributing effectively within a few weeks.
  - Learning curve: If the team is relatively new to Next.js and needs to learn the framework from scratch, it may take them a bit longer to become proficient. Depending on the complexity of the project, it could take a few months for the developers to gain a solid understanding of Next.js and become productive.
  - Project complexity: The complexity of the Next.js application can significantly impact the learning curve and the time required to become productive. If the project involves advanced features, integrations with external services, or complex UI/UX requirements, it may take more time for the team to become productive.
  - Support and mentorship: The availability of experienced developers or mentors who can guide the mid-junior developers can greatly accelerate the learning process. Regular code reviews, pair programming sessions, and knowledge-sharing activities can help the team become productive faster.

### Community Support and Adoption levels

- How popular is this framework?

Next.js is a popular framework within the JavaScript community, particularly for building server-rendered React applications. While I don't have real-time data on its popularity, as of my knowledge cutoff in September 2021, Next.js was gaining significant traction and had a growing user base. Its popularity has continued to rise since then.

- What big companies are running on it?

Netflix: Netflix has utilized Next.js for parts of its user interface, leveraging server-side rendering for improved performance and SEO.

GitHub: GitHub Pages, a feature of GitHub that allows users to host static websites, uses Next.js for its infrastructure.

TikTok: TikTok, the popular social media platform, has adopted Next.js for some of its web pages, including its careers page.

Twitch: Twitch, the live streaming platform, uses Next.js to power some of its pages, taking advantage of server-side rendering capabilities.

- How is it “seen” in the general JS community?

Next.js is generally regarded positively in the JavaScript community. It has gained a reputation for its simplicity, performance, and developer-friendly features. Next.js simplifies the process of building server-rendered React applications by providing features like automatic code splitting, server-side rendering, static site generation, and API routes. These features help improve the user experience, SEO, and developer productivity.

- Is there an active community of developers supporting and growing it?

Next.js has an active and vibrant community of developers supporting and growing the framework. The official Next.js website provides extensive documentation, tutorials, and examples to assist developers in getting started and solving common challenges. The community actively contributes to the framework by creating plugins, sharing best practices, and answering questions on platforms like GitHub, Stack Overflow, and Discord. Additionally, conferences and meetups dedicated to Next.js are held regularly, further fostering the growth and engagement of the community.
