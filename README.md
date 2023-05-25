
<img src=https://github.com/rahmamahdi02/sante-supplement-tracker/blob/main/client/src/assets/darkbluelogo.png alt="MoMMLogo" >

<!-- TABLE OF CONTENTS -->
<details>
  <summary>Table of Contents</summary>
  <ol>
    <li>
      <a href="#about-the-project">About The Project</a>
      <ul>
        <li><a href="#built-with">Built With</a></li>
        <li><a href="api-reference">API Reference</a></li>
      </ul>
    </li>
        <li><a href="#installation">Installation</a></li>
    <!-- <li><a href="#usage">Usage</a></li>
    <li><a href="#roadmap">Roadmap</a></li> -->
    <li><a href="#contributing">Contributing</a></li>
    <li><a href="#contact">Contact</a></li>
    <li><a href="#acknowledgments">Acknowledgments</a></li>
  </ol>
</details>

<!-- ABOUT THE PROJECT -->

## About The Project


Introducing Santa Wellness, a PERN Stack Application designed to enhance the daily lives of users by empowering them to track daily Supplements and understand their Recommended Daily Intakee (RDI) values for essential Vitamins & Minerals based on age and sex. With Santa Wellness, you can take control of your well-being and make informed decisions to improve your overall health and nutrition.


Friendly Interface: Santa Wellness boasts an intuitive and user-friendly interface which allows users to easily generate personalized RDI values via a easy to use calculator. Santa Wellness presents your RDI values in a comprehensive manner, allowing you to visualize your progress. View your RDI data as a table easy analysis of your nutrition goals.

Educational Resources: Enhancing your knowledge of nutrition is a vital aspect of Santa Wellness. Use the  our informative library of resources, empowering you to make informed decisions about your Vitamin & Minerals intake. 

Santa Wellness aims to revolutionize your daily life by equipping you with the tools and knowledge needed to track and improve your RDI values effectively. Start your journey to a healthier lifestyle today with Santa Wellness!

[![Contributors][contributors-shield]][contributors-url]
[![LinkedIn][linkedin-shield]][linkedin-url]

### Built With

- ![JavaScript](https://img.shields.io/badge/javascript-%23323330.svg?style=for-the-badge&logo=javascript&logoColor=%23F7DF1E)
- ![Express.js](https://img.shields.io/badge/express.js-%23404d59.svg?style=for-the-badge&logo=express&logoColor=%2361DAFB)
- [![React][React.js]][React-url]
- ![NodeJS](https://img.shields.io/badge/node.js-6DA55F?style=for-the-badge&logo=node.js&logoColor=white)
- ![Postgres](https://img.shields.io/badge/postgres-%23316192.svg?style=for-the-badge&logo=postgresql&logoColor=white)
- [![Bootstrap][Bootstrap.com]][Bootstrap-url]
- ![Semantic UI React](https://img.shields.io/badge/Semantic%20UI%20React-%2335BDB2.svg?style=for-the-badge&logo=SemanticUIReact&logoColor=white)

<!-- <img src="https://github.com/rahmamahdi02/sante-supplement-tracker/blob/main/client/src/assets/landingpage_screenshot.png" /> -->


<!-- API Reference -->

## API References
* [Auth0 Authentication API](https://auth0.com/docs/api/authentication)
* [Dietary Supplement Label Database](https://dsld.od.nih.gov/api-guide)

<!-- Installation -->

## Installation

**This project requires Auth0! Please visit [Auth0](https://auth0.com/) to make an account and retrieve a domain and clientid. See .env.example for set up!**

Step 1: Go to your terminal: clone the project and switch into the project directory.

```bash
  git clone https://github.com/rahmamahdi02/sante-supplement-tracker
  cd sante-supplement-tracker
```

Step 2: Install all packages.

```bash
  cd client && npm install && cd ../server && npm install
```

Step 3: Setup Environment Variables

- Copy the instructions from both .env.example files in the client and server.

Step 4: Connect the database and the data.

```bash
  cd server
  psql techtonica -f db.sql
```

Step 5: Start the program!

```bash
  cd server && npm run dev
```

<!-- CONTRIBUTING -->



## Contributing

In case you have a suggestion to improve the project, you can either fork the repository and initiate a pull request or raise an issue labeled as "enhancement".

<!-- CONTACT -->

## Contact

Project Link: [Sante Wellness](https://github.com/rahmamahdi02/sante-supplement-tracker)


<p align="right">(<a href="#about-the-project">back to top</a>)</p>

<!-- MARKDOWN LINKS & IMAGES -->

[contributors-shield]: https://img.shields.io/badge/Contributors-1-brightgreen?style=for-the-badge&logo=appveyor
[contributors-url]: https://github.com/rahmamahdi02/sante-supplement-tracker/graphs/contributors
[linkedin-shield]: https://img.shields.io/badge/linkedin-%230077B5.svg?style=for-the-badge&logo=linkedin&logoColor=white
[linkedin-url]: https://www.linkedin.com/in/rahmamahdi/
[React.js]: https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB
[React-url]: https://reactjs.org/
[Bootstrap.com]: https://img.shields.io/badge/Bootstrap-563D7C?style=for-the-badge&logo=bootstrap&logoColor=white
[Bootstrap-url]: https://getbootstrap.com

