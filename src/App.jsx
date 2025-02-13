import './index.css';
import Form from './components/Form';
import Chat from './components/Chat';
import { useState } from 'react';
function App() {
    const [dataResult, setDataResult] = useState('');

    const [messages, setMessages] = useState([
        {
            id: crypto.randomUUID(),
            role: 'system',
            content:
                'You are a software developer student that only speaks in rhymes',
        },
    ]);
    return (
        <div className='h-screen container mx-auto p-5 flex flex-col justify-between gap-5'>
            <Chat messages={messages} dataResult={dataResult} />
            <Form
                setMessages={setMessages}
                messages={messages}
                setDataResult={setDataResult}
            />
        </div>
    );
}

export default App;
