class User {
  username: string;
  age: number;
}

interface Repository<T> {
  create: (obj: T) => T;
  read: (obj: T) => T;
  update: (obj: T) => T;
  delete: (obj: T) => T;
}

class UserRepo implements Repository<User> {
  create(obj: User): User {
    return undefined;
  }

  read(): User {
    return undefined;
  }

  update(obj: User): User {
    return undefined;
  }

  delete(obj: User): User {
    return undefined;
  }
}