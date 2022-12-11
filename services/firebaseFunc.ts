import { collection, getDocs } from "firebase/firestore";
import { db } from "./firebase";

const getCollectionData = async (collectionName: string) => {
  try {
    const collectionRef = collection(db, collectionName);
    return (await getDocs(collectionRef)).docs.map((x) => x.data());
  } catch (error) {
    console.log(error);
  }
};

export { getCollectionData };
