import { CacheModule as CacheModuleNest } from '@nestjs/cache-manager';
import { Module } from '@nestjs/common';
import { CacheService } from './cache.service';

@Module({
  imports: [
    CacheModuleNest.register({
      ttl: 900,
    }),
  ],
  providers: [CacheService],
  exports: [CacheService],
})
export class CacheModule {}
