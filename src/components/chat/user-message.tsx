import React from 'react';
import { Avatar } from '@/components/ui/avatar';

interface UserMessageProps {
    message: string;
}

function UserMessage({ message }: UserMessageProps) {
    return (
        <div className="flex flex-col gap-4">
            <div className="flex gap-2 items-center">
                <Avatar className="bg-slate-400 w-6 h-6 rounded-full"> </Avatar>
                <span className="text-lg text-white font-light">you</span>
            </div>
            <h2 className="w-full text-white bg-geo-light p-4 rounded-xl text-lg">
                {message}
            </h2>
        </div>
    );
};

export default UserMessage;
