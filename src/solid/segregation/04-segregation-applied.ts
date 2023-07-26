// Puse _ para evitar name collision entre este y el otro archivo
interface _Bird {
  eat(): void;
}

interface FlyingBird {
  fly(): void;
}

interface RunningBird {
  run(): void;
}

interface SwimmingBird {
  swim(): void;
}

class _Tucan implements _Bird, FlyingBird {
  public fly() {}
  public eat() {}
}

class _Humminbird implements _Bird, FlyingBird {
  public fly() {}
  public eat() {}
}

class _Ostrich implements _Bird, RunningBird {
  eat(): void {}
  run(): void {}
}

class _Penguin implements _Bird, SwimmingBird {
  eat(): void {}
  run(): void {}
  swim(): void {}
}
