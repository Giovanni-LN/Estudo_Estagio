import { UpdatePasswordDto } from '../dtos/update-password.dto';

export const updatePasswordMock: UpdatePasswordDto = {
  lastPassword: 'abc',
  newPassword: 'novasenha',
};

export const updatePasswordInvalidMock: UpdatePasswordDto = {
  lastPassword: 'qualquercoisa',
  newPassword: 'qualquercoisa',
};
