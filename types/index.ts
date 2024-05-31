export interface IUser {
  id: number;
  name: string;
  email: string;
  gender: IGender;
}

export type IGender = 'MALE' | 'FEMALE' | 'OTHER';
