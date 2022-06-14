import { useRouter } from 'next/router'
import { sideContent, mainContent } from 'data/sidebar'

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
    <div className='sticky top-24 flex flex-col w-full lg:max-w-[20rem] h-min gap-6 p-4 rounded-md shadow-md break-words'>
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
