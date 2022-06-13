import { useRouter } from 'next/router'

const sideContent = [
  {
    title: 'Hobbies',
    tags: ['Digital Art', 'Mechanical Keyboards'],
  },
  {
    title: 'Video Games',
    tags: [
      'Legend of Zelda',
      'HADES',
      'Horizon: Zero Dawn',
      'Mother 3',
      'Okami',
      'Red Dead Redemption 2',
      'The Witcher 3: Wild Hunt',
      'Yakuza',
    ],
  },
  {
    title: 'Music',
    tags: [
      'Boy Pablo',
      'Conan Gray',
      'HONNE',
      'Jack Stauber',
      'Joji',
      'Mother Mother',
      'mxmtoon',
      'The Marías',
      'The Strokes',
    ],
  },
  {
    title: 'Other Interests',
    tags: ['Horror Movies', 'Musicals', 'Period Piece Dramas', 'Swords', 'True Crime'],
  },
]

const mainContent = [
  {
    title: 'Languages',
    tags: ['JavaScript', 'Python', 'TypeScript', 'HTML', 'CSS', 'Java', 'C++'],
  },
  {
    title: 'Frameworks + Libraries',
    tags: ['React', 'Node.js', 'REST APIs', 'Next.js', 'Docker', 'Prisma'],
  },
  {
    title: 'Databases',
    tags: ['MongoDB', 'PostgreSQL', 'Firebase'],
  },
  {
    title: 'Development + Design',
    tags: [
      'Git',
      'GitHub',
      'AWS',
      'Ubuntu',
      'Postman',
      'Jira',
      'TailwindCSS',
      'Framer Motion',
      'MaterialUI',
    ],
  },
]

interface TagProps {
  name: string
}

const Tag = ({ name }: TagProps) => {
  return (
    <span className='px-2 py-0.5 rounded-md bg-accent-mute text-sm text-accent-text font-semibold whitespace-nowrap'>
      {name}
    </span>
  )
}

export const Sidebar = () => {
  const router = useRouter()

  return (
    <div className='flex flex-col w-full max-w-[20rem] gap-4 p-4 rounded-md shadow-md break-words'>
      {(router.pathname === '/' || router.pathname === '/projects') &&
        mainContent.map(({ title, tags }) => (
          <div key={title} className='flex flex-col gap-1'>
            <label>{title}</label>
            <div className='flex flex-wrap gap-2'>
              {tags.map((tag: string) => (
                <Tag key={tag} name={tag} />
              ))}
            </div>
          </div>
        ))}
      {router.pathname === '/about' &&
        sideContent.map(({ title, tags }) => (
          <div key={title} className='flex flex-col gap-1'>
            <label>{title}</label>
            <div className='flex flex-wrap gap-2'>
              {tags.map((tag: string) => (
                <Tag key={tag} name={tag} />
              ))}
            </div>
          </div>
        ))}
    </div>
  )
}
