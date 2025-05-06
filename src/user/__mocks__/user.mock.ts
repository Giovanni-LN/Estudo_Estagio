import { UserEntity } from '../entities/user.entity';
import { UserType } from '../enum/user-type.enum';

export const userEntityMock: UserEntity = {
  cpf: '12345678901',
  createdAt: new Date(),
  email: 'emailmock@email.com',
  id: 43242,
  name: 'nameMock',
  password: '$2b$10$X5WrO0B2WvHGN.MwCuA7XOebvgTS5785z6DX1p0ndEYh1/tLCDZB2',
  phone: '1234567890',
  typeUser: UserType.User,
  updatedAt: new Date(),
};
