import { BiMeteor } from 'react-icons/bi'
import Page from '@/components/Page'

export default function Error500() {
  return (
    <Page title='500'>
      <div>
        <div className='flex items-center gap-3'>
          <div className='p-2 rounded-full bg-accent text-3xl text-accent-dark'>
            <BiMeteor />
          </div>
          <h1>Error 404</h1>
        </div>
        <p className='my-4'>
          Something&apos;s wrong on our end. Check back later.
        </p>
      </div>
    </Page>
  )
}
