import { initializeApp } from '@firebase/app';
import { getDoc, setDoc, doc, getFirestore, updateDoc, deleteDoc } from '@firebase/firestore';
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
    try {
      data.map(async (el: BoardItem) => {
        await setDoc(doc(this.instance, 'korello', el.id), {}, { merge: true });
      });
    } catch (e) {
      console.log(e);
    }
  };
  public addBoardStore = async (id: string) => {
    try {
      await setDoc(doc(this.instance, 'korello', id), {}, { merge: true });
    } catch (error) {
      console.log(error);
    }
  };
  public deleteBoardStore = async (id: string) => {
    try {
      await deleteDoc(doc(this.instance, 'korello', id));
    } catch (error) {
      console.log(error);
    }
  };

  // TAG --------------------------------------------------------------------------

  public addTagStore = async (boardId: string, tagValue: string, length: number) => {
    try {
      await updateDoc(doc(this.instance, 'korello', boardId), {
        [tagValue]: { order: length + 1 },
      });
    } catch (error) {
      console.log(error);
    }
  };

  public getTagList = async (boardId: string) => {
    try {
      const docSnap = await getDoc(doc(this.instance, 'korello', boardId));
      if (docSnap.exists()) {
        return docSnap.data();
      } else {
        alert('firebase에 해당 데이터가 존재하지 않습니다.');
      }
    } catch (error) {
      console.log(error);
    }
  };

  public updateTagOrder = async (
    boardId: string,
    source: { tagname: string; order: number },
    destination: { tagname: string; order: number },
  ) => {
    try {
      await updateDoc(doc(this.instance, 'korello', boardId), {
        [source.tagname]: { order: destination.order },
        [destination.tagname]: { order: source.order },
      });
    } catch (error) {
      console.log(error);
    }
  };
}

export default new Firebase();
