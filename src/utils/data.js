import {
  AiOutlineHome,
  AiOutlineUser,
  AiOutlineUsergroupAdd,
  AiOutlineUnorderedList,
} from 'react-icons/ai';
import { HiOutlineUserGroup } from 'react-icons/hi';
import { RiLogoutCircleLine, RiAdminLine } from 'react-icons/ri';
import { MdOutlineHowToVote } from 'react-icons/md';
import CandidateAvatar from '../assets/images/user_avatar.png';

const links = [
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
        path: '/sign_in',
        icon: <RiLogoutCircleLine className="icon" />,
      },
    ],
  },
];

const candidatesRow = [
  {
    id: 1,
    image: CandidateAvatar,
    lastName: 'Snow',
    firstName: 'Jon',
    email: 'jonsnow@example.com',
    phone: '123456789',
    city: 'Kigali',
    province: 'Kigali',
    description: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit alias et corporis excepturi, quibusdam repellat vel doloremque?',
  },
  {
    id: 2,
    image: CandidateAvatar,
    lastName: 'Peter',
    firstName: 'Parker',
    email: 'peterparker@example.com',
    phone: '123456789',
    city: 'Paris',
    province: 'Monaco',
    description: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit alias et corporis excepturi, quibusdam repellat vel doloremque?',
  },
  {
    id: 3,
    image: CandidateAvatar,
    lastName: 'Snow',
    firstName: 'Jon',
    email: 'jonsnow@example.com',
    phone: '123456789',
    city: 'Kigali',
    province: 'Kigali',
    description: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit alias et corporis excepturi, quibusdam repellat vel doloremque?',
  },
  {
    id: 4,
    image: CandidateAvatar,
    lastName: 'Snow',
    firstName: 'Jon',
    email: 'jonsnow@example.com',
    phone: '123456789',
    city: 'Kigali',
    province: 'Kigali',
    description: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit alias et corporis excepturi, quibusdam repellat vel doloremque?',
  },
  {
    id: 5,
    image: CandidateAvatar,
    lastName: 'Snow',
    firstName: 'Jon',
    email: 'jonsnow@example.com',
    phone: '123456789',
    city: 'Kigali',
    province: 'Kigali',
    description: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit alias et corporis excepturi, quibusdam repellat vel doloremque?',
  },
  {
    id: 6,
    image: CandidateAvatar,
    lastName: 'Delphin',
    firstName: 'Kaduli',
    email: 'delphinkaduli@example.com',
    phone: '123456789',
    city: 'Kigali',
    province: 'Kigali',
    description: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit alias et corporis excepturi, quibusdam repellat vel doloremque?',
  },
];

export { links, candidatesRow };
