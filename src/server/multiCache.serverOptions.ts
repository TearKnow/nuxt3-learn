import { defineMultiCacheOptions } from 'nuxt-multi-cache/dist/runtime/serverOptions'
import { getQuery, getCookie } from 'h3'
import redisDriver from 'unstorage/drivers/redis'

export default defineMultiCacheOptions({
  route: {
    buildCacheKey(event) {
      return 'testcachekey'
    },
    storage: {
      driver: redisDriver({
        base: 'route:',
        host: '127.0.0.1',
        port: 6379,
        db: 1,
        password: '',
      }),
    },
  },

})
