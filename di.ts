interface UserRepoDB {
  getUsers: () => UserDB[];
}

class UserDB {
  username: string;
  age: number;

  constructor(username: string, age: number) {
    this.username = username;
    this.age = age;
  }
}

class UserMongoDBRepo implements UserRepoDB {
  getUsers(): UserDB[] {
    console.log('Use mongo');
    return [{username: 'User from Mongo', age: 30 }];
  } 
}

class UserPostgreDBRepo implements UserRepoDB {
  getUsers(): UserDB[] {
    console.log('Use postgre');
    return [{username: 'User from Postge', age: 30 }];
  } 
}

class UserService {
  userRepo: UserRepoDB;

  constructor(userRepo: UserRepoDB) {
    this.userRepo = userRepo;
  }

  filterUserByAge(age: number) {
    const users = this.userRepo.getUsers();
    // ... some filtering
    console.log(users);
  }
}

const userService = new UserService(new UserMongoDBRepo());
userService.filterUserByAge(30);