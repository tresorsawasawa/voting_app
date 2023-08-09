/* eslint-disable import/no-extraneous-dependencies */

import {
  AiOutlineHome,
  AiOutlineUser,
  AiOutlineUsergroupAdd,
  AiOutlineUnorderedList,
} from 'react-icons/ai';
import { HiOutlineUserGroup } from 'react-icons/hi';
import { RiLogoutCircleLine, RiAdminLine } from 'react-icons/ri';
import { MdOutlineHowToVote } from 'react-icons/md';

const data = [
  {
    id: 1,
    title: 'MAIN',
    listItems: [
      {
        id: 1,
        title: 'Homepage',
        path: '/',
        icon: <AiOutlineHome className="icon" />,
      },
      {
        id: 2,
        title: 'Profile',
        path: '/users/1',
        icon: <AiOutlineUser className="icon" />,
      },
    ],
  },
  {
    id: 2,
    title: 'LIST',
    listItems: [
      {
        id: 1,
        title: 'Candidates',
        path: '/candidates',
        icon: <AiOutlineUsergroupAdd className="icon" />,
      },
      {
        id: 2,
        title: 'Elections',
        path: '/elections',
        icon: <AiOutlineUnorderedList className="icon" />,
      },
      {
        id: 3,
        title: 'Electors',
        path: '/electors',
        icon: <HiOutlineUserGroup className="icon" />,
      },
      {
        id: 4,
        title: 'Vote',
        path: '/vote_candidate',
        icon: <MdOutlineHowToVote className="icon" />,
      },
    ],
  },
  {
    id: 3,
    title: 'LOGS',
    listItems: [
      {
        id: 1,
        title: 'Admin',
        path: '/admin',
        icon: <RiAdminLine className="icon white" />,
      },
      {
        id: 2,
        title: 'Logout',
        path: '/',
        icon: <RiLogoutCircleLine className="icon" />,
      },
    ],
  },
];

export default data;
