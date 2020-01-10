class View  {

  constructor(element) {
    this._elemento = element;
  }

  template() {
    throw new Error('O método template deve ser implementado');
  }

  update(model) {
    this._elemento.innerHTML = this.template(model);
  }

}