interface Props {
  href: string
  label: string
}

export const ExternalLink = ({ href, label }: Props) => {
  return (
    <a
      target='_blank'
      rel='noreferrer noopener'
      href={href}
      className='text-accent font-medium hover:underline'
    >
      {label}
    </a>
  )
}
