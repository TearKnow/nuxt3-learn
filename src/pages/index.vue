<template>
  <div class="pa-16">
    <div>这里是缓存的页面</div>

    <div style="color: red">如果我改了这里内容，也开启了页面缓存，但是会发现页面会先得到缓存中内容，然后会变化，查了下说发生了水合（Hydration）现象</div>

    <div>
      貌似因为我改了vue文件的原因，类似哈希值变了，如果内容从api获取来的，即使api的内容改了，也不会发生这样情况了，问了下deepseek说是这样的，结论有待验证

      <div>为什么水合会影响缓存？
      缓存 HTML 是旧的，但 JS 是新版本 → 水合时发现不一致，重新渲染。

      只有 JS 和 HTML 完全匹配时，水合才能复用静态 DOM，避免重新渲染。</div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { useRouteCache } from '#nuxt-multi-cache/composables'

useRouteCache((helper) => {
  helper.setMaxAge(3600).setCacheable().addTags(['page:1'])
})
</script>
