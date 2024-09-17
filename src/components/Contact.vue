<template>
  <div class="container my-3 py-3">
    <h1 class="text-center">Contact Us</h1>
    <div class="row my-4 h-100">
      <div class="col-md-4 col-lg-4 col-sm-8 mx-auto">
        <form @submit.prevent="submitForm">
          <div class="form my-3">
            <label for="Name">Name</label>
            <input
              type="text"
              class="form-control"
              id="Name"
              v-model="formData.name"
              placeholder="Enter your name"
            />
          </div>
          <div class="form my-3">
            <label for="Email">Email</label>
            <input
              type="email"
              class="form-control"
              id="Email"
              v-model="formData.email"
              placeholder="name@example.com"
            />
          </div>
          <div class="form my-3">
            <label for="Message">Message</label>
            <textarea
              rows="5"
              class="form-control"
              id="Message"
              v-model="formData.message"
              placeholder="Enter your message"
            />
          </div>
          <div class="text-center">
            <button
              class="my-2 px-4 mx-auto btn btn-dark"
              type="submit"
              :disabled="isDisabled"
            >
              Send
            </button>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      formData: {
        name: '',
        email: '',
        message: ''
      }
    }
  },
  computed: {
    isDisabled () {
      // 假設所有字段都需要填寫才可以提交
      return !this.formData.name || !this.formData.email || !this.formData.message
    }
  },
  methods: {
    submitForm () {
      // 在這裡處理表單提交的邏輯
      console.log('Form Submitted:', this.formData)
    }
  }
}
</script>

<style scoped>
/* 可選：你可以在這裡添加額外的樣式 */
</style>
