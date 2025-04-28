import { Inject, Injectable } from '@nestjs/common';
import { CACHE_MANAGER } from '@nestjs/common/cache';
import { Cache } from 'cache-manager';

@Injectable()
export class CacheService {
  constructor(@Inject(CACHE_MANAGER) private readonly cacheManager: Cache) {}

  async getCashe<T>(
    key: string,
    functionRequest: () => Promise<T>,
  ): Promise<T> {
    const allData = (await this.cacheManager.get(key)) as T | null;

    if (allData) {
      return allData;
    }

    const cities: T = await functionRequest();

    await this.cacheManager.set(key, cities);

    return cities;
  }
}
