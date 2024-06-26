import React from 'react';

const MemoPreview = ({ memo }) => {
  let bodyContent = "";

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
    <div className='grid p-6 bg-white rounded-lg shadow-lg' style={{ width: '300px', height: '500px', overflow: 'auto' }}>
      <div className='header flex justify-between mb-4'>
        <div>
          <h3 className='text-xs font-semibold'>From:</h3>
          <p>{memo.from}</p>
        </div>
        <div>
          <h3 className='text-xs font-semibold'>To:</h3>
          <p>{memo.to}</p>
        </div>
      </div>
      <div className='mb-4'>
        <h3 className='text-xs font-semibold'>Through:</h3>
        <p>{memo.through}</p>
      </div>
      <div className='mb-4'>
        <h3 className='text-xs font-semibold'>CC:</h3>
        <p>{memo.cc}</p>
      </div>
      <div className='mb-4'>
        <h3 className='text-xs font-semibold'>Date:</h3>
        <p>{memo.date}</p>
      </div>
      <div className='mb-4'>
        <h3 className='text-xs font-semibold'>Subject:</h3>
        <p>{memo.subject}</p>
      </div>
      <div className='mb-4'>
        <h3 className='text-xs font-semibold'>Divisions:</h3>
        <p>{memo.divisions}</p>
      </div>
      <div className='mb-4'>
        <h3 className='text-xs font-semibold'>Reference:</h3>
        <p>{memo.ref}</p>
      </div>
      <div className='mb-4'>
        <h3 className='text-xs font-semibold'>Minute:</h3>
        <p>{memo.minute}</p>
      </div>
      <div className='body mt-4'>
        <h3 className='text-xs font-semibold'>Body:</h3>
        <div dangerouslySetInnerHTML={{ __html: bodyContent }} />
      </div>
    </div>
  );
}

export default MemoPreview;
