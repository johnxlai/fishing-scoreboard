import { collection } from 'firebase/firestore';
import { db } from './init-firebase';

export const playersCollectionRef = collection(db, 'players');
