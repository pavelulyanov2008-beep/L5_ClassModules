import { GroupChat } from './GroupChat.js';

const chats = [
  new GroupChat('Т-495', 25, false, 'Павел'),
  new GroupChat('Ресейл', 140, true, 'Админ')
];

chats.forEach(chat => chat.show());

const link = chats[0].copy();
console.log('copy ===', link === chats[0]);  

const clone = GroupChat.clone(chats[0]);
console.log('clone ===', clone === chats[0]);  
clone.show();

chats[1].muteChat();

clone.delete();
console.log('После delete:', clone.title);  
