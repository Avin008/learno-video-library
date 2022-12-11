import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";
import { collection, doc, getDoc, getDocs, setDoc } from "firebase/firestore";
import { auth, db } from "./firebase";

const getCollectionData = async (collectionName: string) => {
  const collectionRef = collection(db, collectionName);
  return (await getDocs(collectionRef)).docs.map((x) => x.data());
};

const getSingleDoc = async (collectionName: string, docID: string) => {
  const docRef = doc(db, collectionName, docID);
  const documentData = await getDoc(docRef);
  return documentData;
};

const loginUser = async (email: string, password: string) => {
  const userData = await signInWithEmailAndPassword(auth, email, password);
  return userData;
};

const signoutUser = async (email: string, password: string) => {
  const userData = createUserWithEmailAndPassword(auth, email, password);
  return userData;
};

const setData = async (
  collectionName: string,
  docID: string,
  initialUserData: any
) => {
  const docRef = doc(db, collectionName, docID);
  await setDoc(docRef, initialUserData);
};

export { getCollectionData, getSingleDoc, setData, loginUser, signoutUser };
