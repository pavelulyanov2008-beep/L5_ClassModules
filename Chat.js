export class Chat {
  constructor(title, membersCount, isMuted) {
    this._title = title;               
    this._membersCount = membersCount; 
    this._isMuted = isMuted;           
  }

  get title() { return this._title; }
  set title(value) { this._title = value; }

  get membersCount() { return this._membersCount; }
  set membersCount(value) {
    if (value < 0) { console.log('Участников не может быть меньше 0'); return; }
    this._membersCount = value;
  }

  get isMuted() { return this._isMuted; }
  set isMuted(value) { this._isMuted = value; }

  #mute() {
    this._isMuted = true;
  }

  muteChat() {
    this.#mute();
    console.log(`Чат "${this._title}" заглушён`);
  }

  show() {
    console.log(`Чат: ${this._title}, участников: ${this._membersCount}, без звука: ${this._isMuted}`);
  }

  delete() {
    for (const key in this) {
      delete this[key];
    }
    Object.setPrototypeOf(this, null);
  }

  copy() {
    return this;
  }

  static clone(chat) {
    return new Chat(chat.title, chat.membersCount, chat.isMuted);
  }
}
