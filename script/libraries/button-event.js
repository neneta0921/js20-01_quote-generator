class ButtonEvent {
  constructor(btn, action) {
    this.btn = btn;
    this.action = action;
    this.eventType = this._getEventType();
    this._addEvent();
  }

  _getEventType() {
    return window.ontouchstart ? 'touchstart' : 'click';
  }

  _addEvent() {
    console.log(this.btn);
    // this.btn.addEventListener(this.eventType, action);
  }
}
