/* Change this file to get your personal Portfolio */

// To change portfolio colors globally go to the  _globalColor.scss file

import emoji from "react-easy-emoji";
import splashAnimation from "./assets/lottie/splashAnimation"; // Rename to your file name for custom animation

// Splash Screen

const splashScreen = {
  enabled: true, // set false to disable splash screen
  animation: splashAnimation,
  duration: 2000 // Set animation duration as per your animation
};

// Summary And Greeting Section

const illustration = {
  animated: true // Set to false to use static SVG
};

const greeting = {
  username: "Awanish Tiwari",
  title: "Hi all, I'm Awanish",
  subTitle: emoji(
    "A passionate Full Stack Software Developer 🚀 having an experience of building Web applications with JavaScript / Reactjs / Spring Boot/ MYSQL  and some other cool libraries and frameworks."
  ),
  resumeLink:
    "https://drive.google.com/file/d/1ofFdKF_mqscH8WvXkSObnVvC9kK7Ldlu/view?usp=sharing", // Set to empty to hide the button
  displayGreeting: true // Set false to hide this section, defaults to true
};

// Social Media Links

const socialMediaLinks = {
  github: "https://github.com/awanishtiwari",
  linkedin: "https://www.linkedin.com/in/awanishtiwari1/",
  gmail: "awanishtiwari218@gmail.com",
  //gitlab: "https://gitlab.com/saadpasta",
  //facebook: "https://www.facebook.com/saad.pasta7",
  //medium: "https://medium.com/@saadpasta",
  //stackoverflow: "https://stackoverflow.com/users/10422806/saad-pasta",
  // Instagram, Twitter and Kaggle are also supported in the links!
  // To customize icons and social links, tweak src/components/SocialMedia
  display: true // Set true to display this section, defaults to false
};

// Skills Section

const skillsSection = {
  title: "What I do",
  subTitle: "A Solution Driven personality type person, who loves solving problems regardless of the tech stack",
  skills: [
    emoji(
      "⚡ Develop highly interactive Front end / User Interfaces for your web and mobile applications"
    ),
    emoji("⚡ Develop secure REST APIs & Microservices with best security practices using Spring Boot."),
    emoji(
      "⚡ Configuration and automate the application’s Continuous Integration and Continuous Deployment (CI/CD) pipelines to streamline development workflows, enhance deployment speed, and improve overall software delivery efficiency."
    )
  ],

  /* Make Sure to include correct Font Awesome Classname to view your icon
https://fontawesome.com/icons?d=gallery */

  softwareSkills: [
    {
      skillName: "html-5",
      fontAwesomeClassname: "fab fa-html5"
    },
    {
      skillName: "css3",
      fontAwesomeClassname: "fab fa-css3-alt"
    },
    {
      skillName: "Core Java",
      fontAwesomeClassname: "fab fa-java"
    },
    {
      skillName: "JavaScript",
      fontAwesomeClassname: "fab fa-js"
    },
    {
      skillName: "reactjs",
      fontAwesomeClassname: "fab fa-react"
    },
    {
      skillName: "Spring Boot",
      fontAwesomeClassname: "fas fa-leaf"
    },
    {
      skillName: "npm",
      fontAwesomeClassname: "fab fa-npm"
    },
    {
      skillName: "MySQL",
      fontAwesomeClassname: "fas fa-database"
    },
    {
      skillName: "aws",
      fontAwesomeClassname: "fab fa-aws"
    },
    {
      skillName: "Jenkins",
      fontAwesomeClassname: "devicon-jenkins-line colored"
    },
    {
      skillName: "docker",
      fontAwesomeClassname: "fab fa-docker"
    }
    ,
    {
      skillName: "Data Structures & Algorithms",
      fontAwesomeClassname: "fas fa-network-wired"
    },
    {
      skillName: "REST APIs & Microservices",
      fontAwesomeClassname: "fas fa-cubes"
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Education Section

const educationInfo = {
  display: true, // Set false to hide this section, defaults to true
  schools: [
    {
      schoolName: "Abdul Kalam Technical University Lucknow ",
      logo: require("./assets/images/AKTU.png"),
      subHeader: "Bachelor of Technology in Computer Science",
      duration: "July 2018 - July 2022",
      desc: "",
      descBullets: [
        
      ]
    },
    {
      schoolName: "Amrit Public School ",
      logo: require("./assets/images/APS.jpeg"),
      subHeader: "Intermediate",
      duration: "July 2016 - July 2018",
      desc: "Completed my Inermediate with Maths Stream",
      descBullets: []
    }
  ]
};

// Your top 3 proficient stacks/tech experience

const techStack = {
  viewSkillBars: true, //Set it to true to show Proficiency Section
  experience: [
    {
      Stack: "Frontend/Design", //Insert stack or technology you have experience in
      progressPercentage: "50%" //Insert relative proficiency in percentage
    },
    {
      Stack: "Core Java", //Insert stack or technology you have experience in
      progressPercentage: "80%" //Insert relative proficiency in percentage
    },
    {
      Stack: "Backend Using Spring Boot ",
      progressPercentage: "70%"
    },
    {
      Stack: "Data Structures & Algorithms",
      progressPercentage: "60%"
    },
    {
      Stack: "Microservices",
      progressPercentage: "60%"
    },
    {
      Stack: "REST APIs Using Spring Boot ",
      progressPercentage: "70%"
    },
    {
      Stack: "MySQL",
      progressPercentage: "60%"
    },
    {
      Stack: "OOPS",
      progressPercentage: "85%"
    },
    {
      Stack: "Maven/Jenkins",
      progressPercentage: "65%"
    },
     {
      Stack: "Git & Github",
      progressPercentage: "65%"
    }
  ],
  displayCodersrank: false // Set true to display codersrank badges section need to changes your username in src/containers/skillProgress/skillProgress.js:17:62, defaults to false
};

// Work experience section

const workExperiences = {
  display: true, //Set it to true to show workExperiences Section
  experience: [
    {
      role: "Senior Systems Engineer",
      company: "Infosys Limited",
      companylogo: require("./assets/images/Infy_Logo.png"),
      date: "October 2022 – Present",
      desc: "Working as a Java Developer with hands-on experience in developing and maintaining scalable applications using Spring Boot, Microservices architecture, and RESTful APIs.",
      descBullets: [
        "Developed and deployed scalable microservices in Spring Boot for the Manhattan WMS system, contributing to modular architecture and efficient product delivery",
        "Designed and optimized MySQL databases, improving data handling and back-end performance for high-volume operations. Integrated services with cloud infrastructure using Spring Cloud, enhancing system resilience and scalability",
        "Streamlined CI/CD processes via Jenkins pipelines, significantly reducing deployment times and improving reliability",
        "Collaborated with cross-functional teams and product managers to understand requirements and deliver business-focused soltions aligned with Agile methodologies.",
        "Facilitated project planning and stakeholder communication using JIRA, leading to better transparency and delivery tracking."
      ]
    }
  ]
};

/* Your Open Source Section to View Your Github Pinned Projects
To know how to get github key look at readme.md */

const openSource = {
  showGithubProfile: "true", // Set true or false to show Contact profile using Github, defaults to true
  display: true // Set false to hide this section, defaults to true
};

// Some big projects you have worked on

const bigProjects = {
  title: "Big Projects",
  subtitle: "SOME STARTUPS AND COMPANIES THAT I HELPED TO CREATE THEIR TECH",
  projects: [
    {
      image: require("./assets/images/saayaHealthLogo.webp"),
      projectName: "Saayahealth",
      projectDesc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
      footerLink: [
        {
          name: "Coming Soon",
          url: "#"
        }
        //  you can add extra buttons here.
      ]
    },
    {
      image: require("./assets/images/nextuLogo.webp"),
      projectName: "Nextu",
      projectDesc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
      footerLink: [
        {
           name: "Coming Soon",
          url: "#"
        }
      ]
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Achievement Section
// Include certificates, talks etc

const achievementSection = {
  title: emoji("Achievements And Certifications 🏆 "),
  subtitle:
    "Achievements, Certifications, Award Letters and Some Cool Stuff that I have done !",

  achievementsCards: [
    {
      title: "Soft Skill Professional",
      subtitle:
        "Completed a Soft Skills course, developing strong communication, teamwork, problem-solving, and time management abilities. Trained to work effectively in professional environments and collaborate with others.",
      image: require("./assets/images/agreement.png"),
      imageAlt: "Google Code-In Logo",
      footerLink: [
        {
          name: "View Certificate",
          url: "https://drive.google.com/file/d/1XUl0L9lSKQqBWBHY6Hl_1HlV9nintxIu/view?usp=sharing"
        }
      ]
    },
    {
      title: "Google Cyber Security Professional",
      subtitle:
        "Completed the Google Cybersecurity Certificate, gaining hands-on experience with tools like Python, Linux, SQL, SIEM, and IDS. Trained to identify and mitigate common cybersecurity risks and threats.",
      image: require("./assets/images/Google.jpeg"),
      imageAlt: "Google Assistant Action Logo",
      footerLink: [
        {
          name: "View Certificate",
          url: "https://drive.google.com/file/d/1Bil4oHW7BAoqNQyMNONP6LnJm-8gsCCh/view?usp=sharing"
        }
      ]
    },

    {
      title: "Core Java Certification",
      subtitle: "Completed the Core Java Certification, gaining hands-on experience with Java programming, OOP concepts, exception handling, collections, multithreading. Trained to develop efficient and scalable Java applications using IDEs like Eclipse and IntelliJ.",
      image: require("./assets/images/udemy.png"),
      imageAlt: "certificate Logo",
      footerLink: [
        {
          name: "View Certificate",
          url: "https://drive.google.com/file/d/1bTU_l-LSxz2XePFOfgFo5NjvF_zxs_Fb/view?usp=sharing"
        }
      ]
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Blogs Section

const blogSection = {
  title: "Blogs",
  subtitle:
    "With Love for Developing cool stuff, I love to write and teach others what I have learnt.",
  displayMediumBlogs: "true", // Set true to display fetched medium blogs instead of hardcoded ones
  blogs: [
    {
      url: "https://blog.usejournal.com/create-a-google-assistant-action-and-win-a-google-t-shirt-and-cloud-credits-4a8d86d76eae",
      title: "Win a Google Assistant Tshirt and $200 in Google Cloud Credits",
      description:
        "Do you want to win $200 and Google Assistant Tshirt by creating a Google Assistant Action in less then 30 min?"
    },
    {
      url: "",
      title: "Why Spring Boot is The Best?",
      description:
        "Spring Boot is widely considered one of the best frameworks for building Java-based web applications and microservices due to several key advantages:"
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Talks Sections

const talkSection = {
  title: "TALKS",
  subtitle: emoji(
    "I LOVE TO SHARE MY LIMITED KNOWLEDGE AND GET A SPEAKER BADGE 😅, Coming Soon ..."
  ),

  talks: [
    {
      title: "",
      subtitle: "",
      slides_url: "",
      event_url: ""
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Podcast Section

const podcastSection = {
  title: emoji("Podcast 🎙️"),
  subtitle: "I LOVE TO TALK ABOUT MYSELF AND TECHNOLOGY",

  // Please Provide with Your Podcast embeded Link
  podcast: [
    ""
  ]
  ,
  display: false // Set false to hide this section, defaults to true
};

// Resume Section
const resumeSection = {
  title: "Resume",
  subtitle: "Feel free to download my resume",

  // Please Provide with Your Podcast embeded Link
  display: true // Set false to hide this section, defaults to true
};

const contactInfo = {
  title: emoji("Contact Me ☎️"),
  subtitle:
    "Discuss a project or just want to say hi? My Inbox is open for all.",
  number: "+91-9792060080",
  email_address: "awanishtiwari218@hotmail.com"
};

// Twitter Section

const twitterDetails = {
  userName: "twitter", //Replace "twitter" with your twitter username without @
  display: true // Set true to display this section, defaults to false
};

const isHireable = false; // Set false if you are not looking for a job. Also isHireable will be display as Open for opportunities: Yes/No in the GitHub footer

export {
  illustration,
  greeting,
  socialMediaLinks,
  splashScreen,
  skillsSection,
  educationInfo,
  techStack,
  workExperiences,
  openSource,
  bigProjects,
  achievementSection,
  blogSection,
  talkSection,
  podcastSection,
  contactInfo,
  twitterDetails,
  isHireable,
  resumeSection
};
