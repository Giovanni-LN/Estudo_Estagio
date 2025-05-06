import { CACHE_MANAGER } from '@nestjs/cache-manager';
import { Test, TestingModule } from '@nestjs/testing';
import { userEntityMock } from '../../user/__mocks__/user.mock';
import { CacheService } from '../cache.service';

describe('CacheService', () => {
  let service: CacheService;
  let cacheManager: Cache; // Ensure Cache is imported from '@nestjs/common'

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        CacheService,
        {
          provide: CACHE_MANAGER,
          useValue: {
            get: () => userEntityMock,
            set: () => jest.fn(),
          },
        },
      ],
    }).compile();

    service = module.get<CacheService>(CacheService);
    cacheManager = module.get(CACHE_MANAGER);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });

  it('should return data in cache', async () => {
    const data = await service.getCache('key', () => Promise.resolve(null));

    expect(data).toEqual(userEntityMock);
  });

  it('should return data in function', async () => {
    const result = { test: 'test' };
    jest.spyOn(cacheManager, 'get' as keyof Cache).mockResolvedValue(undefined);

    const user = await service.getCache('key', () => Promise.resolve(result));
    expect(user).toEqual(result);
  });
});
