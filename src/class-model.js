class ClassModel {
  constructor (name) {
    this.name = name;
  }

  functionModel() {
    return `Function return for '${this.name}' class`;
  }
}

export default ClassModel;
