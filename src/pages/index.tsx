import Head from 'next/head';
import { GetServerSideProps } from 'next';

import { ChallengesProvider } from '../context/ChallengesContext';
import CompleteChallenges from '../components/CompleteChallenges';
import CountDown from '../components/CountDown';
import ExperienceBar  from '../components/ExperienceBar';
import Profile  from '../components/Profile';
import ChallengeBox from '../components/ChallengeBox';

import styles from '../styles/pages/Home.module.css';
import { CountdownProvider } from '../context/CountdownContext';

interface HomeProps {
  level: number;
  currentExperience: number;
  challengesCompleted: number;
}

export default function Home(props: HomeProps) {
  return (
    <ChallengesProvider 
      level={props.level}
      currentExperience={props.currentExperience}
      challengesCompleted={props.challengesCompleted}
    >
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
    </ChallengesProvider>
  )
}

export const getServerSideProps : GetServerSideProps = async (context) => {
  // chamada api
  const user = {
    level: 1,
    currentExperience: 50,
    challengesCompleted: 2,
  }

  //cookies;
  const { level, currentExperience, challengesCompleted } = context.req.cookies;

  return {
    props: {
      level: Number(level),
      currentExperience: Number(currentExperience),
      challengesCompleted: Number(challengesCompleted),
    },
  }
}
