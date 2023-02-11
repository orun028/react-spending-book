import { collection, getDocs, getFirestore } from 'firebase/firestore/lite';
import { firebase } from '../library/firebase';

const db = getFirestore(firebase);

export async function getSpending() {
    const citiesCol = collection(db, 'spending')
    const citySnapshot = await getDocs(citiesCol);
    citySnapshot.forEach((doc) => {
        // doc.data() is never undefined for query doc snapshots
        console.log(doc.id, " => ", doc.data());
      });
}