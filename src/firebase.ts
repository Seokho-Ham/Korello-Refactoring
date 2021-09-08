import { initializeApp } from '@firebase/app';
import {
  getDoc,
  addDoc,
  setDoc,
  doc,
  getFirestore,
  updateDoc,
  deleteDoc,
  collection,
  getDocs,
} from '@firebase/firestore';
import { BoardItem } from './reducers/main';

const firebaseConfig = {
  apiKey: process.env.REACT_APP_APIKEY,
  authDomain: process.env.REACT_APP_AUTHDOMAIN,
  projectId: process.env.REACT_APP_PROJECTID,
  storageBucket: process.env.STORAGEBUCKED,
  messagingSenderId: process.env.REACT_APP_MESSAGINGSENDERID,
  appId: process.env.REACT_APP_APPID,
  measurementId: process.env.REACT_APP_MEASUREMENTID,
};

// firebase config 정보로 firebase 시작

class Firebase {
  private instance: any;

  constructor() {
    const firebaseApp = initializeApp(firebaseConfig);
    this.instance = getFirestore(firebaseApp);
  }

  // BOARD --------------------------------------------------------------------------

  public setBoardStore = async (data: []) => {
    data.map(async (el: BoardItem) => {
      await setDoc(doc(this.instance, 'korello', el.id), {}, { merge: true });
    });
  };
  public addBoardStore = async (id: string) => {
    await setDoc(doc(this.instance, 'korello', id), {}, { merge: true });
  };
  public deleteBoardStore = async (id: string) => {
    await deleteDoc(doc(this.instance, 'korello', id));
  };

  // TAG --------------------------------------------------------------------------

  public addTagStore = async (boardId: string, tagValue: string, length: number) => {
    await updateDoc(doc(this.instance, 'korello', boardId), {
      [tagValue]: { order: length + 1 },
    });
  };

  public getTagList = async (boardId: string) => {
    const docSnap = await getDoc(doc(this.instance, 'korello', boardId));
    if (docSnap.exists()) {
      return docSnap.data();
    } else {
      alert('firebase에 해당 데이터가 존재하지 않습니다.');
    }
  };
}

export default new Firebase();
