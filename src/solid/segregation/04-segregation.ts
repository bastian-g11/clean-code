interface Bird {
  fly(): void;
  eat(): void;
  run(): void;
  swim(): void;
}

class Tucan implements Bird {
  public fly() {}
  public eat() {}
  public run() {}
  swim(): void {
    throw new Error('This bird doesnt swim');
  }
}

class Humminbird implements Bird {
  public fly() {}
  public eat() {}
  public run() {}
  swim(): void {
    throw new Error('This bird doesnt swim');
  }
}

class Ostrich implements Bird {
  // Se viola el principio de segregacion de interfaces, ya que no necesita este metodo
  fly(): void {
    throw new Error('This bird doesnt fly');
  }
  eat(): void {}
  run(): void {}
  swim(): void {
    throw new Error('This bird doesnt swim');
  }
}

class Penguin implements Bird {
  // Se viola el principio de segregacion de interfaces, ya que no necesita este metodo
  fly(): void {
    throw new Error('This bird doesnt fly');
  }
  eat(): void {}
  run(): void {}
  swim(): void {}
}
