export default function TimeBlurb(props) {
  return (
    <div className='group flex w-full p-3 border-2 border-border rounded-xl hover:bg-border cursor-default'>
      <div className='flex flex-col gap-2'>
        <div className='flex items-center gap-2 font-semibold text-text-secondary group-hover:text-accent'>
          <div className='text-2xl'>
            {props.icon}
          </div>
          <span>{props.title}</span>
        </div>
        <div className='leading-relaxed text-base'>
          {props.caption}
        </div>
      </div>
    </div>
  )
}
