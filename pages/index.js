import Head from 'next/head'
import Header from '../components/Header'
import styles from '../styles/Home.module.css'

export default function Home() {
  // Array that is used to define the type of headers that should be rendered.
  const headers = ['basic', 'advanced']

  return (
    <div className={styles.home}>
      <Head>
        <title>next-date-example</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <span role='headers'>
          {headers.map((header, index) => <Header key={index} type={header} />)}
        </span>
      </main>
    </div>
  )
}
