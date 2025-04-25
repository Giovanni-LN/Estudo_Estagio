import { Inject, Injectable } from '@nestjs/common';
import { CACHE_MANAGER } from '@nestjs/common/cache';
import { InjectRepository } from '@nestjs/typeorm';
import { Cache } from 'cache-manager';
import { Repository } from 'typeorm';
import { CityEntity } from './entities/city.entity';

@Injectable()
export class CityService {
  constructor(
    @InjectRepository(CityEntity)
    private readonly cityRepository: Repository<CityEntity>,
    @Inject(CACHE_MANAGER) private readonly cacheManager: Cache,
  ) {}

  async getAllCityByStatedId(stateId: number): Promise<CityEntity[]> {
    const citiesCache =
      (await this.cacheManager.get<CityEntity[]>(`state_${stateId}`)) || [];

    if (citiesCache.length > 0) {
      return citiesCache;
    }
    const cities = await this.cityRepository.find({
      where: {
        stateId,
      },
    });
    await this.cacheManager.set(`state_${stateId}`, cities);

    return cities;
  }
}
