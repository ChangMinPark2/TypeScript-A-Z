interface IUser {
    name: string;
    age: number;
    address: string;
}

type UserKeys = keyof IUser

const user = {
    name: "tom",
    age: 20,
    address: "seoul"
}

type Userkeys = keyof typeof user

enum UserRole {
    admin,
    manager
}

type UserRoleKeys = keyof typeof user