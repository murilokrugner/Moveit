import CompleteChallenges from '../components/CompleteChallenges';
import CountDown from '../components/CountDown';
import ExperienceBar  from '../components/ExperienceBar';
import Profile  from '../components/Profile';
import ChallengeBox from '../components/ChallengeBox';

import Head from 'next/head';

import styles from '../styles/pages/Home.module.css';
import { CountdownProvider } from '../context/CountdownContext';


export default function Home() {
  return (
    <div className={styles.container}>   
      <Head>
        <title>Início | move.it</title>
      </Head>

      <ExperienceBar />

      <CountdownProvider>     
        <section>
          <div>
            <Profile />
            <CompleteChallenges />
            <CountDown />
          </div>
          <div>
            <ChallengeBox />
          </div>
        </section>
      </CountdownProvider>
    </div>
  )
}
