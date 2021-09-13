import { CardItem } from '../reducers/board';

interface BoardLinkedList {
  addToHead: (item: Node) => {};
}

class Node {
  public data: CardItem;
  public next: Node | null;
  public prev: Node | null;

  constructor(data: CardItem, next: Node | null = null, prev: Node | null = null) {
    this.data = data;
    this.next = next;
    this.prev = prev;
  }
}

class LinkedList {
  private head: Node | null = null;

  addToHead = (item: Node) => {
    let node = this.head;
    if (node) {
      node.prev = item;
    }
    this.head = item;
    this.head.next = node;
  };
  addToTail = (item: Node) => {
    if (!this.head) {
      this.head = item;
    } else {
      const getLast = (node: Node): Node => {
        return node.next ? getLast(node.next) : node;
      };
      const lastNode = getLast(this.head);
      lastNode.next = item;
    }
  };
  deleteNode = (id: string) => {
    if (this.head) {
      const node = this.searchNode(this.head, id);
      if (node) {
        if (node.prev && node.next) {
          node.prev.next = node.next;
          node.next.prev = node.prev;
        } else if (node.prev) {
        }
      }
    }
  };
  searchNode: (node: Node, id: string) => Node | void = (node: Node, id: string) => {
    if (node.data.id === id) return node;
    else {
      if (node.next) {
        return this.searchNode(node.next, id);
      }
    }
  };
  size = () => {};
}

export const handleBoardData = (cardList: CardItem[]) => {
  const cardsMap = new Map<string, CardItem>();

  cardList.forEach(el => {
    cardsMap.set(el.id, el);
  });
};
