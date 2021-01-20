class MobileMenu {
  constructor() {
    this.DOM = {};
    this.DOM.btn = document.querySelector(".menu-icon");
    this.DOM.container = document.querySelector("#global-container");
    this.eventType = this._getEventType();
    this.DOM.btn.addEventListener("click", this._toggle.bind(this));
  }

  _getEventType() {
    return window.ontochstart ? "touchstart" : "click";
  }

  _toggle() {
    this.DOM.container.classList.toggle("menu-open");
  }

  _addEvent() {
    this.DOM.btn.addEventListener(this.eventType, this_toggle.bind(this));
  }
}

new MobileMenu();

$(function () {
  $(".mobile-menu").hide();
  $(".menu-icon").click(function () {
    $("nav").toggle(100);
  });
});
