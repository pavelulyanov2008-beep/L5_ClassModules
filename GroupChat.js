import { Chat } from './Chat.js';

export class GroupChat extends Chat {
  constructor(title, membersCount, isMuted, admin) {
    super(title, membersCount, isMuted);
    this._admin = admin;
  }

  get admin() { return this._admin; }
  set admin(value) { this._admin = value; }

  muteChat() {
    console.log('В групповом чате нельзя заглушить уведомления');
  }

  show() {
    console.log(`Групповой чат: ${this.title}, участников: ${this.membersCount}, без звука: ${this.isMuted}, админ: ${this._admin}`);
  }

  delete() {
    super.delete();
  }

  copy() {
    return this;
  }

  static clone(chat) {
    return new GroupChat(chat.title, chat.membersCount, chat.isMuted, chat.admin);
  }
}
