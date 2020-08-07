export class Modal {
  constructor(contentId, fallbackText) {
    this.fallbackText = fallbackText;
    this.contentTemplateEl = document.getElementById(contentId);
    this.modalTemplateEl = document.getElementById('modal-template');
  }
  show() {
    if ('content' in document.createElement('template')) {
      const modalElements = document.importNode(
        this.modalTemplateEl.content,
        true
      );
      this.modalElement = modalElements.querySelector('.modal');
      this.backdropElement = modalElements.querySelector('.backdrop');
      const contenElement = document.importNode(
        this.contentTemplateEl.content,
        true
      );
      this.modalElement.append(contenElement);
      document.body.insertAdjacentElement('afterbegin', this.modalElement);
      document.body.insertAdjacentElement('afterbegin', this.backdropElement);
    } else {
      alert(this.fallbackText);
    }
  }

  hide() {
    document.body.removeChild(this.modalElement);
    document.body.removeChild(this.backdropElement);
    this.modalElement = null;
    this.backdropElement = null;
  }
}
