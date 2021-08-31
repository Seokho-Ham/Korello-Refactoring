export interface Board {
  id: number;
  title: string;
}


export interface Card {
  id: number;
  title: string;
  content: string;
  labels?: [];
  checklist?: [];
  dueDate?: Date;
}

export interface Tag {
  id: number;
  title: string;
  cards: Card[];
}

export const boardList: Board[] = [
  { id: 1, title: '보드 1' },
  { id: 2, title: '보드 2' },
  { id: 3, title: '보드 3' },
  { id: 4, title: '보드 4' },
  { id: 5, title: '보드 5' },
  { id: 6, title: '보드 6' },
  { id: 7, title: '보드 7' },
  { id: 8, title: '보드 8' },
  { id: 9, title: '보드 9' },
];

export const tagList: Tag[] = [
  { id: 1, title: '태그 1', cards: [{ id: 1, title: '카드1', content: '카드입니다' }] },
  { id: 2, title: '태그 2', cards: [{ id: 2, title: '카드2', content: '카드입니다' }] },
  { id: 3, title: '태그 3', cards: [{ id: 3, title: '카드3', content: '카드입니다' }] },
  { id: 4, title: '태그 4', cards: [{ id: 4, title: '카드4', content: '카드입니다' }] },
  { id: 5, title: '태그 5', cards: [{ id: 5, title: '카드5', content: '카드입니다' }] },
];

