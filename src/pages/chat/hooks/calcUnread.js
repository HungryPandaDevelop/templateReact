
export const calcUnread = (rooms, uid) => {

  let count = 0;
  rooms.map(room => {
    room.data.messages.map(message => {
      if (!message.read && message.uid !== uid) {
        count++;
      }
    })
  })
  return count;
}