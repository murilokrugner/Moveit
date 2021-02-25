import {useContext} from 'react';

import { ChallengesContext } from '../context/ChallengesContext';
import styles from '../styles/components/Profile.module.css';

export default function Profile() {
    const { level } = useContext(ChallengesContext);
    
    return(
        <div className={styles.profileContainer}>
            <img src="https://github.com/murilokrugner.png" alt="Murilo Krugner" />
            <div>
                <strong>Murilo Krugner</strong>
                <p>
                    <img src="icons/level.svg" alt="Level" />
                    Level {level}
                </p>
            </div>
        </div>
    );
}