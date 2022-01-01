import useSWR from 'swr'
import Skeleton from '@/components/Skeleton'

const fetcher = (url: string) => fetch(url).then(res => res.json())

export default function InterestList() {
  const { data, error } = useSWR('/api/about/interests', fetcher)

  if (error) 
    return (
      <p className='my-4'>
        Uh oh. Something went wrong. Contact me if this error persists.
      </p>
    )
  if (!data) 
    return (
      <Skeleton rows={3} />
    )

  const interests = data.data

  return (
    <div className='flex flex-wrap gap-1.5 font-semibold text-sm'>
      { interests.map((interest: string) =>
        <div className='px-2.5 py-1 rounded-md bg-accent text-accent-darkest'>
          {interest}
        </div>
      )}
    </div>
  )
}