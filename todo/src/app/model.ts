export class Model {
  user;
  items;

  constructor() {
    this.user = 'Adam';
    this.items = [
      new TodoItem('Buy Flowers', false),
      new TodoItem('Buy Flowers1', true),
      new TodoItem('Buy Flowers2', false),
    ];
  }
}

export class TodoItem {
  action;
  done;

  constructor(action, done) {
    this.action = action;
    this.done = done;
  }
}
