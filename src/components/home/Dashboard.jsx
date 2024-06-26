import React, { useEffect, useState } from 'react'
import Linkbox from './dashboard/Linkbox'
import { sideNavItems } from './Sidenav';
import DashboardAction from './dashboard/DashboardAction';

// Firebase config

import {
 collection,
 getDocs
} from "firebase/firestore"

import { db } from "../../lib/firebaseConfig"
import MemoPreview from './dashboard/MemoPreview';

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

  const [memos, setMemos] = useState([]);

  useEffect(() => {
    const fetchRecentMemos = async () => {
      const querySnapshot = await getDocs(collection(db, "memo"));
      const dataList = querySnapshot.docs.map(doc => doc.data());
      setMemos(dataList)
    }

    fetchRecentMemos();
  },[])

  console.log("Memos", memos)
 
  const newMemo = memos.slice(2, 5)
  console.log("New Memo", newMemo)
  return (
    <section className="dashboard">
      <h1 className='text-3xl font-semibold m-10'>Recent Memos</h1>
        <div className="bottom-section grid grid-cols-3 items-center">

           {
            newMemo.map((memo) => (
             <MemoPreview memo={newMemo} />
            ))
          } 

        </div>
    </section>
  )
}

export default Dashboard
