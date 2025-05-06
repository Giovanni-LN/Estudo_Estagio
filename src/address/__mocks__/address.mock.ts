import { cityMock } from '../../city/__mocks__/city.mock';
import { userEntityMock } from '../../user/__mocks__/user.mock';
import { AddressEntity } from '../entities/address.entity';

export const addressMock: AddressEntity = {
  cep: '12345678',
  cityId: cityMock.id,
  complement: 'complementMock',
  createdAt: new Date(),
  id: 123123,
  numberAddress: 654,
  updatedAt: new Date(),
  userId: userEntityMock.id,
  user: userEntityMock,
  city: cityMock,
};
