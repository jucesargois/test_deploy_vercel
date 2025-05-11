import Head from 'next/head'
import Hero from '../components/Hero'

export default function Home() {
  return (
    <>
      <Head>
        <title>Landing Page</title>
        <meta name="description" content="Landing page simples e moderna com Next.js e Tailwind CSS." />
      </Head>
      <Hero />
    </>
  )
}