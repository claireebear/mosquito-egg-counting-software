<template>
  <nav class="navbar navbar-expand-lg navbar-light bg-light py-3 sticky-top">
    <div class="container">
      <!-- 品牌 Logo 和名稱 -->
      <router-link class="navbar-brand fw-bold fs-4 px-2" to="/" @click="rerender">
        <img src="/img/icons/teamlogo.png" alt="MEC Vision Logo" class="d-inline-block align-top" width="40" height="40" />
        <span class="font-weight-black">Mosquitto-Egg-Count</span>
      </router-link>

      <!-- 導航菜單，僅針對電腦版 -->
      <div class="collapse navbar-collapse show" id="navbarSupportedContent">
        <ul class="navbar-nav ms-auto">
          <li class="nav-item" v-for="(item) in menu" :key="item.title">
            <router-link class="nav-link" :to="item.link">{{ item.title }}</router-link>
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>

<script>
import { eventBus } from '../main.js'

export default {
  data () {
  return {
    menu: [
      { title: 'Vision', link: '/' },
      { title: 'Contact', link: '/contact' },
      { title: 'About', link: '/about' }
    ]
  }
},
  methods: {
    // 重新渲染的功能
    rerender () {
      eventBus.$emit('forceRerender')
    }
  }
}
</script>

<style scoped>
/* 自定義樣式 */
.navbar-brand {
  display: flex;
  align-items: center;
}

.navbar-brand img {
  margin-right: 10px;
}

.navbar-nav .nav-link {
  font-weight: 500;
  padding: 0.5rem 1rem;
}

.navbar-nav .nav-link:hover {
  color: #007bff;
}

.navbar {
  border-bottom: 1px solid #ddd;
}

.navbar-collapse {
  justify-content: flex-end;
}
</style>
