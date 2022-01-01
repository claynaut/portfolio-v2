interface Props {
  rows: number
}

export default function Skeleton({ rows }: Props) {
  return (
    <div className='flex flex-col w-full'>
      <div className='animate-pulse space-y-5 py-1'>
        <div className='space-y-4'>
          {
            Array.apply(null, Array(rows-1)).map(() =>
              <div className='h-4 bg-border rounded'/>
            )
          }
          <div className='grid grid-cols-3 gap-4'>
            <div className='h-4 bg-border rounded col-span-2'/>
          </div>
        </div>
      </div>
    </div>
  )
}