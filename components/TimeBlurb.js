export default function TimeBlurb(props) {
  return (
    <div className='flex ml-7'>
      <div className='mt-1 mr-4 text-xl text-text-secondary dark:text-text-secondary-dark'>
        {props.icon}
      </div>
      <div className='flex flex-col mb-5'>
        <div className='mb-3 font-semibold text-text-secondary dark:text-text-secondary-dark'>
          {props.title}
        </div>
        <div className='leading-relaxed text-base'>
          {props.caption}
        </div>
      </div>
    </div>
  )
}
