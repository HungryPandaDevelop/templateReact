import { useParams } from 'react-router-dom';

import ChatForm from 'pages/chat/Form';
import Messages from 'pages/chat/Messages';

const ChatRoom = () => {

  const params = useParams();

  return (
    <div>
      <h1>
        Chat Room: {params.roomId}
      </h1>
      <Messages
        roomId={params.roomId}
      />
      <ChatForm
        roomId={params.roomId}
      />
    </div>
  )
}

export default ChatRoom;
