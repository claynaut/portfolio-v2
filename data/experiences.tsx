import { TbSchool, TbCode, TbMapPin, TbBolt } from 'react-icons/tb'

export const experiences = [
  {
    title: 'Current',
    events: [
      {
        icon: <TbBolt />,
        name: 'Stealth Startup',
        subtitle: ['Software Engineer'],
        timespan: 'Apr 2022 - Present',
        description: 'Working with React, Node.js, and AWS to build innovating products. Enjoying the process and continuing to do what I love.',
      },
    ],
  },
  {
    title: '2022',
    events: [
      {
        icon: <TbSchool />,
        name: 'UC Riverside',
        subtitle: ['B.S. in Computer Science'],
        timespan: 'Sep 2019 - Mar 2022',
        description: 'Graduated with a B.S. in Computer Science. Heavily involved in hackathons as a lead for Citrus Hack and BioHack.',
      },
      {
        icon: <TbMapPin />,
        name: 'Road Trip to San Francisco',
        timespan: 'Winter 2022',
        description: 'Traveled with a few friends, and enjoyed sightseeing and eating sourdough turtles.',
      },
    ],
  },
  {
    title: '2021',
    events: [
      {
        icon: <TbCode />,
        name: 'Prytaneum',
        subtitle: ['Web Developer'],
        timespan: 'Aug 2021 - Mar 2022',
        description:
          'Helped develop a unique platform for town officials to meet. A project led by the School of Public Policy at UC Riverside.',
      },
      {
        icon: <TbCode />,
        name: 'Citrus Hack',
        subtitle: ['Lead', 'Full Stack Developer'],
        timespan: 'Jun 2021 - Apr 2022',
        description:
          'Developed a mind-blowing website for Citrus Hack, the largest hackathon in the Inland Empire with over 750 participants. Innovated a new admin dashboard feature to streamline user management.',
      },
      {
        icon: <TbCode />,
        name: 'BioHack',
        subtitle: ['Lead', 'Full Stack Developer'],
        timespan: 'Jan 2021 - Apr 2022',
        description:
          "Jumped into the world of web development and loved it ever since. Spearheaded the website design and development for BioHack, UC Riverside's healthcare hackathon.",
      },
    ],
  },
  {
    title: '2019',
    events: [
      {
        icon: <TbMapPin />,
        name: 'Trip to Japan',
        timespan: 'Summer 2019',
        description: 'Enjoyed making trips to 7-Eleven.',
      },
      {
        icon: <TbCode />,
        name: 'Jumpstart to C++',
        timespan: 'Winter 2019',
        description: 'Got bored with just coding in Java.',
      },
    ],
  },
  {
    title: '2015',
    events: [
      {
        icon: <TbCode />,
        name: 'First Line of Code in Java',
        timespan: 'Fall 2015',
        description: 'The start of one of my greatest passions.',
      },
    ],
  },
]