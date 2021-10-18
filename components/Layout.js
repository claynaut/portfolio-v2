export default function Layout({ children }) {
  return (
    <main className='flex flex-col xl:flex-row xl:justify-center items-center px-4 w-full min-h-screen'>
      <div className='xl:relative w-full xl:w-240'>
        {children}
      </div>
    </main>
  )
}
