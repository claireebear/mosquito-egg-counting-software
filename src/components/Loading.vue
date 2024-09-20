<template>
  <div class="loading text-xs-center">
    <v-dialog
      v-model="loadingDialog"
      persistent
      width="400"
      max-width="80%"
    >
      <v-card class="elevation-12 loading-card">
        <v-card-text class="loading-content">
          <v-layout align-center justify-center column>
            <v-avatar id="bot" tile size="48" class="mb-4">
              <v-img src="/img/progress.gif"></v-img>
            </v-avatar>
            <h3 class="loading-title">{{ 'Analyzing Image...' }}</h3>
            <v-progress-circular
              indeterminate
              color="primary"
              size="50"
              width="5"
              class="my-4"
            ></v-progress-circular>
            <p class="loading-text">
              Please wait while we process your image...
            </p>
          </v-layout>
        </v-card-text>
      </v-card>
    </v-dialog>
  </div>
</template>

<script>
import { eventBus } from '../main.js'

export default {
  data () {
    return {
      loadingDialog: false
    }
  },
  created () {
    eventBus.$on('loadingDialog', () => {
      this.loadingDialog = true
    })
  },
  watch: {
    loadingDialog (val) {
      if (!val) return
      setTimeout(() => (this.loadingDialog = false), 3000)
    }
  }
}
</script>

<style scoped>
.loading-card {
  background-color: #ffffff;
  color: #000000;
  border-radius: 15px;
  padding: 20px;
  text-align: center;
}

.loading-content {
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
}

.loading-title {
  color: #3f51b5;
  font-weight: bold;
}

.loading-text {
  color: #6c757d;
  margin-top: 15px;
  font-size: 16px;
}

.v-avatar {
  background-color: #f5f5f5;
  padding: 10px;
  border-radius: 50%;
}

.v-progress-circular {
  color: #3f51b5;
}
</style>
