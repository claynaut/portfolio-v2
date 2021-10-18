export default function Layout({ children }) {
  return (
    <main className='flex flex-col xl:flex-row justify-center items-center px-4 w-full min-h-screen'>
      <div className='xl:relative w-full max-w-[60rem]'>
        {children}
      </div>
    </main>
  )
}
