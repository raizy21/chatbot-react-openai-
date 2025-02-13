const Chat = ({ dataResult }) => {
    return (
        <div
            id='results'
            className='h-2/3 w-full p-8 bg-slate-600 rounded-lg shadow-md'
        >
            {dataResult && dataResult}
        </div>
    );
};

export default Chat;
