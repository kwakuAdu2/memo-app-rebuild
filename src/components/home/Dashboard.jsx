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

const Dashboard = () => {

  let [memos, setMemos] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchRecentMemos = async () => {
      const querySnapshot = await getDocs(collection(db, "memo"));
      const dataList = querySnapshot.docs.map(doc => doc.data());
      setMemos(dataList)
    }

    fetchRecentMemos();
    setLoading(true)
  },[])

  const handleMemoEdit = () => {
    alert("This feature is under development");
  }

  memos = memos.slice(1, 4)

  return (
    <section className="dashboard">
      <h1 className='text-3xl font-semibold m-10 w-4/5'>Recent Memos</h1>
        <div className="bottom-section grid lg:grid-cols-3 md:grid-cols-3 sm:grid-cols-1">

           {
            memos.map((memo) => (
             <MemoPreview key={memo.id} memo={memo} handleMemoEdit={handleMemoEdit}/>
            ))
          } 

        </div>
    </section>
  )
}

export default Dashboard
