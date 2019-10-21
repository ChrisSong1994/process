class Recorder {
  constructor() {
    this.history = [];
    this.future = [];
    this.canBack = false;
    this.canForward = false;
    this.limit = 10; // 指存放过去十步的操作
  }

  clear() {
    this.history.length = 0;
    this.future.length = 0;
    this.canBack = false;
    this.canForward = false;
  }

  back() {
    if (this.canBack) {
      const current = this.history.pop();
      this.future.unshift(current);
      this.canBack = this.history.length ? true : false;
      this.canForward = true;
      return current;
    }
  }

  forward() {
    if (this.canForward) {
      const current = this.future.shift();
      this.history.push(current);
      this.canBack = true;
      this.canForward = this.future.length ? true : false;
      return current;
    }
  }

  push(rocord) {
    this.future.clear();
    if (this.history.length === this.limit) {
      this.history.shift();
    }
    this.history.push(rocord);
    this.canBack = true;
    this.canForward = false;
  }
}

export default new Recorder();
