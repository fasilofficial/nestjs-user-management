import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { IUser, IGender } from 'types';

@Injectable()
export class UsersService {
  private users: IUser[] = [
    { id: 1, name: 'John Doe', email: 'john.doe@example.com', gender: 'MALE' },
    {
      id: 2,
      name: 'Jane Smith',
      email: 'jane.smith@example.com',
      gender: 'FEMALE',
    },
    {
      id: 3,
      name: 'Alex Johnson',
      email: 'alex.johnson@example.com',
      gender: 'OTHER',
    },
    {
      id: 4,
      name: 'Emily Davis',
      email: 'emily.davis@example.com',
      gender: 'FEMALE',
    },
    {
      id: 5,
      name: 'Michael Brown',
      email: 'michael.brown@example.com',
      gender: 'MALE',
    },
    {
      id: 6,
      name: 'Chris Lee',
      email: 'chris.lee@example.com',
      gender: 'OTHER',
    },
  ];

  create(createUserDto: CreateUserDto) {
    const usersByHighestId = [...this.users.sort((a, b) => b.id - a.id)];

    const newUser = { id: usersByHighestId[0].id + 1, ...createUserDto };

    this.users.push(newUser);
    return newUser;
  }

  findAll(gender?: IGender) {
    if (gender) {
      const users = this.users.filter((user) => user.gender === gender);

      if (!users) throw new NotFoundException('user not found');

      return users;
    }
    return this.users;
  }

  findOne(id: number) {
    const user = this.users.find((user) => user.id === id);

    if (!user) throw new NotFoundException('user not found');

    return user;
  }

  update(id: number, updateUserDto: UpdateUserDto) {
    this.users = this.users.map((user) => {
      if (user.id === id) return { ...user, ...updateUserDto };
      return user;
    });

    return this.findOne(id);
  }

  remove(id: number) {
    const removedUser = this.findOne(id);
    this.users = this.users.filter((user) => user.id !== id);
    return removedUser;
  }
}
