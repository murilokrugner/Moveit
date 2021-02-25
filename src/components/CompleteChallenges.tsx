import {useContext} from 'react';

import { ChallengesContext } from '../context/ChallengesContext';
import styles from '../styles/components/CompleteChallenges.module.css';

export default function CompleteChallenges() {
    const { challengesCompleted } = useContext(ChallengesContext);
    
    return (
        <div className={styles.completedChallengesContainer}>
            <span>Desafios completos</span>
            <span>{challengesCompleted}</span>
        </div>
    );
}