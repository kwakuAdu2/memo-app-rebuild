import React from 'react'
import Linkbox from './dashboard/Linkbox'
import { sideNavItems } from './Sidenav';
import DashboardAction from './dashboard/DashboardAction';

const dummyMessage = [
  {
    id: 222,
    messageNum: 2,
    type: "Inbox",
    decription: `Number of Inbox ${`\n`} Memos `
  }, 
  {
    id: 223,
    messageNum: 2,
    type: "Sent",
    decription: `Number of Sent ${`\n`} Memos `
  },
  {
    id: 224,
    messageNum: 0,
    type: "Starred",
    decription: `Number of Starred ${`\n`} Memos `
  },

  {
    id: 225,
    messageNum: 0,
    type: "Drafts",
    decription: `Number of Drafts ${`\n`} Memos `
  }
];

const actionDummy = sideNavItems

const Dashboard = () => {
  return (
    <section className="dashboard">
        <div className="top-section">
          {
            dummyMessage.map((message) => (
              <Linkbox memoNumber={message.messageNum} messageType={message.type} messageValue={message.decription}/>
            ))
          }
        </div>
        <div className="bottom-section grid grid-cols-3 items-center">
          {
            actionDummy.map((item) => (
              <DashboardAction icon={item.icon} text={item.text}/>
            ))
          }
        </div>
    </section>
  )
}

export default Dashboard
