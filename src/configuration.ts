export interface About {
  description: string;
}

enum Side {
  left = "left",
  right = "right",
}

interface Company {
  title: string;
  subtitle: string;
  side: Side;
  duration: string;
}
export interface Experience {
  title: string;
  companies: Company[];
}

interface Tech {
  id: string;
  value: number;
  title: string;
  circleColor: string;
}
export interface Skills {
  title: string;
  techs: Tech[];
}
export interface Badge {
  title: string;
  iconTitles: string[];
  tooltipTitles: string[];
}

interface ConfigData {
  about: About;
  experience: Experience;
  skills: Skills;
  badges: Badge[];
}

export const isScrollDownVisible = false;

export const configData: ConfigData = {
  about: {
    description:
      'Loukas is a highly motivated and dedicated graduate student in Electrical and Computer Engineering. He actively engages in open-source projects, volunteer work, and demonstrates a strong passion for coding. His guiding principle is "Learning through Experience," which he consistently applies to both his daily life and professional endeavors. Loukas places great emphasis on personal growth, achieved through unwavering perseverance and a commitment to gaining in-depth knowledge rather than superficial insights. He measures the true meaning of success by the well-being and success of his team. His approach is characterized by critical thinking and exceptional organizational skills, enabling him to deliver concise and impeccable solutions. Currently, he is exploring new avenues for both architectural and managerial roles within his field, striving to gain expertise and make a significant impact. ',
  },
  experience: {
    title: "Experience",
    companies: [
      {
        duration: "February 2024 - Now",
        title: "KLDiscovery",
        subtitle: "Senior Software Engineer",
        side: Side.right,
      },
      {
        duration: "July 2022 - February 2024",
        title: "Betsson Group",
        subtitle: "Software Engineer",
        side: Side.left,
      },
      {
        duration: "July 2021 - July 2022",
        title: "Benefit Software",
        subtitle: "Web Front End Developer",
        side: Side.right,
      },
      {
        duration: "May 2018 - July 2021",
        title: "noris M.I.K.E",
        subtitle: "Web Front End Developer",
        side: Side.left,
      },
      {
        duration: "April 2017 - May 2017",
        title: "More than Themes",
        subtitle: "Software Engineer",
        side: Side.right,
      },
      {
        duration: "Feb 2017 - Sep 2017",
        title: "IEEE",
        subtitle: "Web Application Developer",
        side: Side.left,
      },
      {
        duration: "Feb 2016 - Sep 2016",
        title: "IEEE",
        subtitle: "Web Application Developer",
        side: Side.right,
      },
      {
        duration: "Oct 2012 - Oct 2020",
        title: "Democritus University of Thrace (DUTh)",
        subtitle:
          "BSc. & Integrated MSc. Electrical Engineering & Computer Science",
        side: Side.left,
      },
    ],
  },
  skills: {
    title: "Skills",
    techs: [
      {
        id: "angular",
        value: 95,
        title: "Angular",
        circleColor: "#fb8872",
      },
      {
        id: "javascript",
        value: 90,
        title: "Javascript",
        circleColor: "#fc9581",
      },
      {
        id: "css",
        value: 80,
        title: "CSS",
        circleColor: "#fca391",
      },
      {
        id: "nodejs",
        value: 80,
        title: "Node.js",
        circleColor: "#fdb0a1",
      },
      {
        id: "photoshop",
        value: 70,
        title: "Photoshop",
        circleColor: "#fdbdb1",
      },
    ],
  },
  badges: [
    {
      title: "Testing Tools",
      iconTitles: ["jasmine", "protractor"],
      tooltipTitles: ["Jasmine", "Protractor"],
    },
    {
      title: "Other Tools",
      iconTitles: ["bootstrap", "d3js", "webpack", "travis", "git"],
      tooltipTitles: ["Bootstrap", "D3js", "Webpack", "Travis", "Git"],
    },
    {
      title: "Databases",
      iconTitles: ["postgresql", "mongodb", "mysql"],
      tooltipTitles: ["PostgreSQL", "MongoDB", "MySQL"],
    },
    {
      title: "OS",
      iconTitles: ["ubuntu", "apple"],
      tooltipTitles: ["Ubuntu", "MacOS"],
    },
  ],
};
