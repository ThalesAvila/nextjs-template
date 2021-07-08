import React from 'react'
import Head from 'next/head'
import face from '../assets/face.jpg'

const Home: React.FC = () => {
  console.log('face')
  return (
    <>
      <Head>Home</Head>
      <main>
        <h1>Hello Spark</h1>
        <img src={String(face)} />
      </main>
    </>
  )
}

export default Home
