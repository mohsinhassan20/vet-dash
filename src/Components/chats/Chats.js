import React from 'react'
import UserListing from './UserListing'
import ChatScreen from './ChatScreen'
export default function Chats() {
    return (
        <div className="flex row px-5 py-6  pr-0  gap-5 w-[80%] ">
            <UserListing />
            <ChatScreen className="rounded-lg" />
        </div>
    )
}
