<template>
  <div class="hero border-1 pb-3">
    <div class="img-container">
      <img
        class="img-fluid bg-white"
        src="/img/Team_Tab_BG.png"
        alt="Hero Image"
      />
      <!-- 文字放在圖片上，且文字居中 -->
      <div class="text-overlay">
        <h5 class="fs-1 text fw-lighter">OpenCV Mosquito Egg Count Analyzer</h5>
        <p class="fs-5 d-none d-sm-block">
          - A mosquito egg count analyzer dedicated to the iGEM Competition
        </p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Home',
  data () {
    return {}
  }
}
</script>

<style scoped>
/* 保證圖片寬度填滿頁面 */
.img-container {
  position: relative;
  width: 100%;
  overflow: hidden;
}

.img-container img {
  width: 100%;
  height: auto;
  display: block;
}

/* 文字覆蓋在圖片上，並且居中 */
.text-overlay {
  position: absolute;
  top: 25%;
  left: 50%;
  transform: translate(-50%, -50%);
  color: rgb(46, 117, 184);
  text-align: center;
  width: 100%;
}

.text-overlay h5,
.text-overlay p {
  margin: 0;
  padding: 0;
  color: rgb(62, 161, 190); /* 確保字體顏色在圖片上方可見 */
  text-shadow: 2px 2px 5px rgba(0, 0, 0, 0.5); /* 添加陰影增強對比 */
}
</style>
