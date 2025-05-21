import { createParamDecorator, ExecutionContext } from '@nestjs/common';
import { Request } from 'express';
import { authorizantionToLoginPayload } from '../utils/base-64-converter';

export const UserId = createParamDecorator((_, ctx: ExecutionContext) => {
  const request = ctx.switchToHttp().getRequest<Request>();
  const { authorization } = request.headers;

  const loginPayload = authorizantionToLoginPayload(authorization);

  return loginPayload?.id;
});
