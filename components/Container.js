import Layout from './Layout'
import Footer from './Footer'

export default function Container({ children }) {
  return (
    <Layout>
      <div className='flex flex-col justify-between mt-24 mb-6 xl:my-4 xl:p-6 rounded-lg xl:bg-primary xl:shadow-shadow'>
        {children}
        <Footer />
      </div>
    </Layout>
  )
}
