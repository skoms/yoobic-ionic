/* eslint-disable @typescript-eslint/quotes */
import { User, USERS } from './users';

export interface Chat {
  id: number;
  members: User[];
  messages: Message[];
}

export interface Message {
  sender: User;
  content: string;
  time: string;
}

export const CHATS: Chat[] = [
  {
    id: 1,
    members: [USERS[0], USERS[1]],
    messages: [
      {
        sender: USERS[0],
        content: 'Hey',
        time: '2021-11-27T11:45',
      },
      {
        sender: USERS[1],
        content: 'Hi!',
        time: '2021-11-27T11:47',
      },
      {
        sender: USERS[0],
        content: "What's up??",
        time: '2021-11-27T11:48',
      },
      {
        sender: USERS[1],
        content: 'Not much, you?',
        time: '2021-11-27T11:49',
      },
      {
        sender: USERS[0],
        content: 'Just coding',
        time: '2021-11-27T11:50',
      },
      {
        sender: USERS[1],
        content: 'Nice, wanna hang later?',
        time: '2021-11-27T11:55',
      },
    ],
  },
  {
    id: 2,
    members: [USERS[0], USERS[2]],
    messages: [
      {
        sender: USERS[0],
        content: 'Do you want to go grab a coffee later?',
        time: '2021-11-27T11:45',
      },
      {
        sender: USERS[2],
        content: 'Sure, I would love to, can we go at around 8?',
        time: '2021-11-27T11:47',
      },
      {
        sender: USERS[0],
        content: 'Yeah, no problem, ill pick you up then!',
        time: '2021-11-27T11:48',
      },
      {
        sender: USERS[2],
        content: 'great! see you then',
        time: '2021-11-27T11:49',
      },
      { sender: USERS[0], content: 'See you!', time: '2021-11-27T11:50' },
    ],
  },
  {
    id: 3,
    members: [USERS[0], USERS[3], USERS[4]],
    messages: [
      {
        sender: USERS[0],
        content:
          'Would you guys want to come over for Christmas dinner this year? We would be more than happy to have you!',
        time: '2021-12-15T16:13',
      },
      {
        sender: USERS[3],
        content:
          'Oh I would love to, but I cant this year, I already have something planned',
        time: '2021-12-15T16:14',
      },
      {
        sender: USERS[4],
        content: 'Yes, id love to! Ill bring the Christmas Aquavit!!',
        time: '2021-12-15T16:17',
      },
      {
        sender: USERS[0],
        content:
          'Shame you cant, Kari, but Im excited for you to join us, Ola!',
        time: '2021-12-15T16:23',
      },
      {
        sender: USERS[4],
        content: 'The pleasure will be all mine',
        time: '2021-12-15T16:25',
      },
    ],
  },
];
