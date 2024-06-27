import React from 'react';
import "../../home/home.css"
import { Link } from 'react-router-dom';

const MemoPreview = ({ memo,handleMemoEdit }) => {
  let bodyContent = "This is a test memo, ";

  try {
    console.log("Original bodyDelta:", memo.bodyDelta);
    const parsedBodyDelta = JSON.parse(memo.bodyDelta);
    console.log("Parsed bodyDelta:", parsedBodyDelta);
    bodyContent = parsedBodyDelta.ops.map(op => op.insert).join('').replace(/\n/g, '<br/>');
    console.log("Generated body content:", bodyContent);
  } catch (error) {
    console.error("Error parsing bodyDelta:", error);
    bodyContent = "Invalid content";
  }

  console.log("Memo preview:", memo);
  return (
    <div className='grid p-6 bg-white rounded-lg memo-content  border-solid shadow-lg' style={{ width: '300px', height: '500px', overflow: 'auto' }}>
      <div className='header flex justify-between mb-2'>
        <div>
          <h3 className='text-xs font-bold'>From:</h3>
          <p>{memo.from}</p>
        </div>
        <div>
          <h3 className='text-xs font-bold'>To:</h3>
          <p>{memo.to}</p>
        </div>
      </div>
      {/* <div className='mb-2'>
        <h3 className='text-xs font-bold'>Through:</h3>
        <p>{memo.through}</p>
      </div>
      <div className='mb-2'>
        <h3 className='text-xs font-bold'>CC:</h3>
        <p>{memo.cc}</p>
      </div> */}
      <div className='mb-2'>
        <h3 className='text-xs font-bold'>Date:</h3>
        <p>{memo.date}</p>
      </div>
      <div className='mb-2'>
        <h3 className='text-xs font-bold'>Subject:</h3>
        <p>{memo.subject}</p>
      </div>
      {/* <div className='mb-2'>
        <h3 className='text-xs font-bold'>Divisions:</h3>
        <p>{memo.divisions}</p>
      </div> */}
      {/* <div className='mb-2'>
        <h3 className='text-xs font-bold'>Reference:</h3>
        <p>{memo.ref}</p>
      </div> */}
      <div className='mb-2'>
        <h3 className='text-xs font-bold'>Minute:</h3>
        <p>{memo.minute}</p>
      </div>
      <div className='body mt-4'>
        <h3 className='text-xs font-bold'>Body:</h3>
        <div dangerouslySetInnerHTML={{ __html: bodyContent.slice(0, 100)}} />
      </div>
      <div className="body mt-2 flex justify-end gap-3">
        <Link className='text-blue-500 underline' onClick={() => handleMemoEdit()} to={"#"}>Preview</Link>
        <Link className='text-blue-500 underline'onClick={() => handleMemoEdit()} to={"#"}>Edit</Link>
      </div>
    </div>
  );
}

export default MemoPreview;
