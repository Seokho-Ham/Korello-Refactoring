import { CardItem } from '../reducers/board';

// export class Node {
//   public data: CardItem;
//   public next: Node | null;
//   public prev: Node | null;

//   constructor(data: CardItem, next: Node | null = null, prev: Node | null = null) {
//     this.data = data;
//     this.next = next;
//     this.prev = prev;
//   }
// }

// export class LinkedList {
//   private head: Node | null = null;
//   private length: number = 0;

//   addToHead = (item: Node) => {
//     if (!this.head) {
//       this.head = item;
//     } else {
//       let node = this.head;
//       node.prev = item;
//       this.head = item;
//       this.head.next = node;
//     }
//     this.length++;
//   };
//   addToTail = (item: Node) => {
//     if (!this.head) {
//       this.head = item;
//     } else {
//       const getLast = (node: Node): Node => {
//         return node.next ? getLast(node.next) : node;
//       };
//       const lastNode = getLast(this.head);
//       lastNode.next = item;
//       item.prev = lastNode;
//     }
//     this.length++;
//   };
//   addToMiddle = (item: Node, prevId: string) => {
//     if (this.head) {
//       const prevNode = this.searchNode(this.head, prevId);
//       if (prevNode) {
//         if (prevNode.next) {
//           const nextNode = prevNode.next;
//           nextNode.prev = item;
//           item.next = nextNode;
//         }
//         prevNode.next = item;
//       }
//       this.length++;
//     }
//   };
//   deleteNode = (id: string) => {
//     if (this.head) {
//       if (!this.head.next) {
//         if (this.head.data.id === id) this.head = null;
//       } else {
//         const node = this.searchNode(this.head, id);
//         if (node) {
//           const prevNode = node.prev;
//           const nextNode = node.next;
//           if (prevNode) {
//             prevNode.next = nextNode;
//           }
//           if (nextNode) {
//             nextNode.prev = prevNode;
//           }
//         }
//       }
//       length--;
//     }
//   };
//   searchNode: (node: Node, id: string) => Node | null = (node: Node, id: string) => {
//     return node.data.id === id ? node : node.next ? this.searchNode(node.next, id) : null;
//   };
//   get size() {
//     return this.length;
//   }
// }

export const handleBoardData = (cardList: CardItem[]) => {
  const list: { [key: string]: CardItem[] } = {};
  const mapData = new Map<number, CardItem>();
  cardList.map((el: CardItem) => {
    if (el.linkId === 0) {
      list[el.tagValue] = [el];
    } else {
      mapData.set(el.linkId, el);
    }
  });

  for (let key in list) {
    const length = cardList.filter(el => el.tagValue === key).length;

    for (let i = 0; i < length - 1; i++) {
      const item = mapData.get(Number(list[key][list[key].length - 1].id));
      if (item) {
        list[key].push(item);
      }
    }
  }
  return list;
};
