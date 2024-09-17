<template>
  <!-- 使用 Vuetify，主結構是 v-container » v-layout » v-flex，並且被拆分到不同的組件檔案中 -->
  <div id="app">
    <v-app>
      <!-- 頁面頂部的工具列 -->
      <app-toolbar></app-toolbar>

      <!-- 單頁應用 (SPA) 主內容區域，透過 router-view 控制視圖 -->
      <v-content>
        <router-view :key="componentKey"></router-view>
        <loading-dialogue></loading-dialogue>
      </v-content>

      <!-- 頁面底部的 Footer -->
      <app-footer></app-footer>
    </v-app>
  </div>
</template>

<script>
// 導入 eventBus，Toolbar，Loading screen 和 Footer
import { eventBus } from './main.js'
import AppToolbar from './components/Toolbar.vue'
import LoadingDialogue from './components/Loading.vue'
import AppFooter from './components/Footer.vue' // 新增這一行

export default {
  
  name: 'Mosquitto-Egg-Count',
  components: {
    AppToolbar,
    LoadingDialogue,
    AppFooter // 註冊 Footer 組件
  },
  data () {
    return {
      componentKey: 0, // 控制重新渲染的 Key
    }
  },
  created () {
    // 監聽事件，當事件觸發時，重置組件並滾動到頂部
    eventBus.$on('forceRerender', () => {
      this.$router.push('/')
      this.componentKey += 1
      this.$vuetify.goTo(0, {
        offset: 0
      })
    })
  },
  mounted () {
    // 將 OpenCV 模組加載到應用中
    let opencv = document.createElement('script')
    opencv.setAttribute('src', 'opencv.js')
    document.head.appendChild(opencv)
  }
}
</script>
