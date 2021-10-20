import React from 'react'
import { BiPlanet } from 'react-icons/bi'
import { isWebpSupported } from 'react-image-webp/dist/utils'
import Page from '../components/Page'
import ExternalLink from '../components/ExternalLink'

export default function Home() {
  return (
    <Page title='Home'>
      <div>
        <div className='flex items-center gap-3'>
          <div className='p-2 rounded-full bg-accent text-3xl text-accent-dark'>
            <BiPlanet />
          </div>
          <h1>Hello! I&apos;m J.S.</h1>
        </div>
        <p className='my-4'>
          Aspiring software engineer based in Southern California, with a great interest in software and web development.
        </p>
        <p className='my-4'>
          Currently a third-year undergraduate studying Computer Science at UCR. 
          Let&apos;s talk at <ExternalLink name='hello@jspescas.io' link='mailto:hello@jspescas.io'/>!
        </p>
      </div>
      {
        isWebpSupported
        ?
          <div
            className='flex self-center lg:self-end min-w-[15rem] xs:min-w-[20rem] w-60 xs:w-80 min-h-[15rem] xs:min-h-[20rem] h-60 xs:h-80 lg:ml-4 mb-3 lg:mb-0 rounded-xl bg-profile-webp bg-contain bg-no-repeat'
          />
        :
          <div
            className='flex self-center lg:self-end min-w-[15rem] xs:min-w-[20rem] w-60 xs:w-80 min-h-[15rem] xs:min-h-[20rem] h-60 xs:h-80 lg:ml-4 mb-3 lg:mb-0 rounded-xl bg-profile bg-contain bg-no-repeat'
          />
      }
    </Page>
  )
}
