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

  public setTagList = async (boardId: string, list: []) => {
    list.map(async (el, index) => {
      await updateDoc(doc(this.instance, 'korello', boardId), {
        tagValue: el,
        order: index,
      });
    });
  };

  public getTagList = async () => {};
}

export default new Firebase();
