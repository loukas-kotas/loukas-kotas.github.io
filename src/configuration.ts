export interface About {
  description: string;
}

enum Side {
  left = 'left',
  right = 'right',
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

export const configData: ConfigData = {
  about: {
    description: 'Loukas is an ambitious and interested graduate EECE student with discipline and accountability involved into open-source projects, Volunteering activities and a lot of code. His motto is "Gain through Experiencing" and he applies that in his every-day life and work. His personal development comes through perseverance and avoidance of superficial knowledge. The meaning of true success comes from his team’s welfare. Using critical and organizing mind, his concise and impeccable thoughts produce succinct and cater solutions. His next goal is to overcome the novice level and become an expert in his field of interest.',
  },
  experience: {
    title: 'Experience',
    companies: [
    {
      duration: 'July 2022 - Now',
      title: 'Betsson Group',
      subtitle: 'Software Engineer',
      side: Side.left,
    },
    {
      duration: 'July 2021 - July 2022',
      title: 'Benefit Software',
      subtitle: 'Web Front End Developer',
      side: Side.right,
    },
    {
      duration: 'May 2018 - July 2021',
      title: 'noris M.I.K.E',
      subtitle: 'Web Front End Developer',
      side: Side.left,
    },
    {
      duration: 'April 2017 - May 2017',
      title: 'More than Themes',
      subtitle: 'Software Engineer',
      side: Side.right,
    },
    {
      duration: 'Feb 2017 - Sep 2017',
      title: 'IEEE',
      subtitle: 'Web Application Developer',
      side: Side.left,
    },
    {
      duration: 'Feb 2016 - Sep 2016',
      title: 'IEEE',
      subtitle: 'Web Application Developer',
      side: Side.right,
    },
    {
      duration: 'Oct 2012 - Oct 2020',
      title: 'Democritus University of Thrace (DUTh)',
      subtitle: 'BSc. & Integrated MSc. Electrical Engineering & Computer Science',
      side: Side.left,
    },
  ]},
  skills: {
    title: 'Skills',
    techs: [
      {
        id: 'angular',
        value: 95,
        title: 'Angular',
        circleColor: '#03045e',
      },
      {
        id: 'javascript',
        value: 90,
        title: 'Javascript',
        circleColor: '#023e8a',
      },
      {
        id: 'css',
        value: 80,
        title: 'CSS',
        circleColor: '#0077b6',
      },
      {
        id: 'nodejs',
        value: 80,
        title: 'Node.js',
        circleColor: '#0096c7',
      },
      {
        id: 'photoshop',
        value: 70,
        title: 'Photoshop',
        circleColor: '#00b4d8',
      }
    ],
  },
  badges: [
    {
      title: 'Testing Tools',
      iconTitles: ['jasmine', 'protractor'],
      tooltipTitles: ['Jasmine', 'Protractor'],
    },
    {
      title: 'Other Tools',
      iconTitles: ['bootstrap', 'd3js', 'webpack', 'travis', 'git'],
      tooltipTitles: ['Bootstrap', 'D3js', 'Webpack', 'Travis', 'Git'],
    },
    {
      title: 'Databases',
      iconTitles: ['postgresql', 'mongodb', 'mysql'],
      tooltipTitles: ['PostgreSQL', 'MongoDB', 'MySQL'],
    },
    {
      title: 'OS',
      iconTitles: ['ubuntu', 'apple'],
      tooltipTitles: ['Ubuntu', 'MacOS'],
    },
  ]

};


