import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";
import {
  arrayRemove,
  arrayUnion,
  collection,
  doc,
  getDoc,
  getDocs,
  setDoc,
  updateDoc,
} from "firebase/firestore";
import { Video } from "../types";
import { auth, db } from "./firebase";
import { uuidv4 as uuid } from "@firebase/util";

const getCollectionData = async (collectionName: string) => {
  const collectionRef = collection(db, collectionName);
  return (await getDocs(collectionRef)).docs.map((x) => x.data());
};

const getSingleDoc = async (collectionName: string, docID: string) => {
  const docRef = doc(db, collectionName, docID);
  const documentData = await getDoc(docRef);
  return documentData.data();
};

const loginUser = async (email: string, password: string) => {
  const userData = await signInWithEmailAndPassword(auth, email, password);
  return userData;
};

const initialUserData = {
  playlist: [],
  liked: [],
  watchLater: [],
  history: [],
};

const setData = async (
  collectionName: string,
  docID: string,
  firstname: string,
  lastname: string,
  email: string
) => {
  const docRef = doc(db, collectionName, docID);
  await setDoc(docRef, {
    id: docID,
    firstname,
    lastname,
    email,
    ...initialUserData,
  });
};

const addToLiked = async (userDocumentID: string, video: any) => {
  const docRef = doc(db, "users", userDocumentID);
  await updateDoc(docRef, { liked: arrayUnion(video) });
};

const addToHistory = async (userDocumentID: string, video: any) => {
  const docRef = doc(db, "users", userDocumentID);
  await updateDoc(docRef, { history: arrayUnion(video) });
};

const removeFromHistory = async (userDocumentId: string, video: any) => {
  const docRef = doc(db, "users", userDocumentId);
  await updateDoc(docRef, { history: arrayRemove(video) });
};

const removeFromLiked = async (userDocumentID: string, video: any) => {
  const docRef = doc(db, "users", userDocumentID);
  await updateDoc(docRef, { liked: arrayRemove(video) });
};

const addToWatchLater = async (userDocumentID: string, video: any) => {
  const docRef = doc(db, "users", userDocumentID);
  await updateDoc(docRef, { watchLater: arrayUnion(video) });
};

const removeFromWatchLater = async (userDocumentID: string, video: any) => {
  const docRef = doc(db, "users", userDocumentID);
  await updateDoc(docRef, { watchLater: arrayRemove(video) });
};

const signupUser = async (email: string, password: string) => {
  const userData = createUserWithEmailAndPassword(auth, email, password);
  return userData;
};

const removePlaylist = async (userDocumentId: string, playlistObj: any) => {
  const docRef = doc(db, "users", userDocumentId);
  await updateDoc(docRef, { playlist: arrayRemove(playlistObj) });
};

const createPlaylist = async (userDocumentId: string, playlistName: string) => {
  const docRef = doc(db, "users", userDocumentId);
  await updateDoc(docRef, {
    playlist: arrayUnion({
      id: uuid(),
      name: playlistName,
      videos: [],
    }),
  });
};

export {
  getCollectionData,
  getSingleDoc,
  setData,
  loginUser,
  signupUser,
  addToLiked,
  addToWatchLater,
  removeFromLiked,
  removeFromWatchLater,
  addToHistory,
  removeFromHistory,
  removePlaylist,
  createPlaylist,
};
