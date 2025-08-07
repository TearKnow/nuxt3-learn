<template>
  <div class="pa-16">
    这里是缓存的页面111
  </div>
</template>

<script lang="ts" setup>
import { useRouteCache } from '#nuxt-multi-cache/composables'

useRouteCache((helper) => {
  helper.setMaxAge(3600).setCacheable().addTags(['page:1'])
})
</script>
