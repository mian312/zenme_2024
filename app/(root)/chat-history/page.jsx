'use client';

import React from 'react';
import { useRouter } from 'next/navigation';

const ChatHistory = () => {
    const router = useRouter();

    const history = [
        { id: 1, name: 'History Day-1' },
        { id: 2, name: 'History Day-2' },
        { id: 3, name: 'History Day-3' },
        { id: 4, name: 'History Day-4' },
        { id: 5, name: 'History Day-5' },
    ];

    return (
        <div className='m-4 p-6'>
            <h1 className='text-3xl font-bold text-center'>Chat History</h1>

            <div className='m-2 p-2 border rounded-md'>
                <button className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded' onClick={() => router.push('/quiz')}>
                    Create New Chat
                </button>
            </div>

            <div className='mt-4 overflow-auto'>
                <ul className='m-2 p-2 border border-spacing-1 rounded-m'>
                    {history.map(history => (
                        <li className='m-2 p-4 border border-spacing-1 border-gray-500 bg-slate-100 hover:bg-slate-300'
                            key={history.id}>
                            <h2 className='text-xl font-bold'>{history.name}</h2>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
}

export default ChatHistory;
