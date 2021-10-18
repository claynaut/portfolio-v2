import Layout from './Layout'
import Footer from './Footer'

export default function Container({ children }) {
  return (
    <Layout>
      <div className='flex flex-col justify-between my-[5.5rem] xl:my-4 p-6 rounded-lg bg-primary shadow-shadow'>
        {children}
        <Footer />
      </div>
    </Layout>
  )
}
