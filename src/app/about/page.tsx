import { Metadata } from 'next'
import React from 'react'

export const metadata:Metadata = {
    title: 'Iqboljon',
    description: 'Biznesmen',
    openGraph: {
        images: ["/public/img/cat.jpg"],
    }
}

const About = () => {
  return (
    <div>
      About
    </div>
  )
}

export default About
