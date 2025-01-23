export default class Slide {
  constructor(slide, wrapper) {
    this.slide = document.querySelector(slide);
    this.wrapper = document.querySelector(wrapper);
  }

  onStart(event) {
    event.preventDefault();
  }

  addSlideEvents() {
    this.wrapper.addEventListener('mousedown', this.onStart);
  }

  bindEvents() {
    this.onStart = this.onStart(this);
  }

  init() {
    this.bindEvents();
    this.addSlideEvents();
    return this;
  }

}