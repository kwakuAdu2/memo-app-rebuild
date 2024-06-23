import { Cog6ToothIcon, DocumentIcon } from '@heroicons/react/24/outline';
import { EnvelopeIcon, PaperAirplaneIcon, PencilIcon, StarIcon } from '@heroicons/react/24/outline';
import React from 'react';
import { Link } from 'react-router-dom';

export const sideNavItems = [
  {
    id: 1,
    text: "Compose",
    icon: <PencilIcon className='w-6' />
  },
  {
    id: 2,
    text: "Inbox",
    icon: <EnvelopeIcon className='w-6' />
  },
  {
    id: 3, // Changed id to 3
    text: "Sent",
    icon: <PaperAirplaneIcon className='w-6' />
  },
  {
    id: 4,
    text: "Starred",
    icon: <StarIcon className='w-6' />
  },
  {
    id: 5,
    text: "Drafts",
    icon: <DocumentIcon className='w-6' />
  },
  {
    id: 6,
    text: "Settings",
    icon: <Cog6ToothIcon className='w-6' />
  }
];

const Sidenav = () => {
  return (
    <nav className='home-sidenav'>
      <ul>
        {
          sideNavItems.map((item) => (
            <li key={item.id} className='my-4 border-b'>
              <Link className='flex my-2' to={"#"}>
                {item.icon}
                <span className='ml-4'>{item.text}</span>
              </Link>
            </li>
          ))
        }
      </ul>
    </nav>
  );
};

export default Sidenav;
