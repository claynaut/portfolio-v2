export default function Container({ children }) {
  return (
    <div className='flex flex-col justify-between mx-22 my-6 p-6 rounded-lg bg-primary dark:bg-primary-dark shadow-light dark:shadow-dark'>
      {children}
    </div>
  )
}
