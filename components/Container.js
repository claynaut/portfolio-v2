import Footer from './Footer'

export default function Container({ children }) {
  return (
    <div className='flex flex-col justify-between lg:mx-22 my-6 mt-22 lg:mt-6 p-6 rounded-lg bg-primary dark:bg-primary-dark shadow-light dark:shadow-dark'>
      {children}
      <Footer />
    </div>
  )
}
