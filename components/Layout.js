export default function Layout({ children }) {
  return (
    <main className='flex flex-col lg:flex-row lg:justify-center px-4 lg:px-8 w-full min-h-screen bg-primary dark:bg-primary-dark'>
      <div className='lg:relative w-full lg:w-240'>
        {children}
      </div>
    </main>
  )
}
