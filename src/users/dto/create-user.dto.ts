import { IsEmail, IsEnum, IsNotEmpty, IsString } from 'class-validator';

export class CreateUserDto {
  @IsString()
  @IsNotEmpty()
  name: string;

  @IsEmail()
  email: string;

  @IsEnum(['MALE', 'FEMALE', 'OTHER'], { message: 'valid gender is required' })
  gender: 'MALE' | 'FEMALE' | 'OTHER';
}
