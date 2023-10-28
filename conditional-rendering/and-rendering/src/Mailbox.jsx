import React from "react";

const Mailbox = ({ unreadMassage }) => {
  return (
   <div className='mailbox'>
      <span className='mailbox__text'>Messages</span>
      { unreadMassage.length > 0 && (<span className='mailbox__count'>{unreadMassage.length}</span>)}
      
   </div>
  )
};

export default Mailbox;