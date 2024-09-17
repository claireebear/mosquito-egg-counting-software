<template>
  <v-container fluid class="fill-height gradient-bg d-flex align-center justify-center">
    <v-row justify="center" align="center" class="flex-column">
      <v-col cols="12" sm="10" md="8" lg="6" class="text-center">
        <v-avatar size="200" class="mb-5">
          <v-img
            src="/img/example.jpg"
            alt="Clarie"
            class="profile-image"
            aspect-ratio="1"
            cover
          ></v-img>
        </v-avatar>
        <h2 class="text-h4 font-weight-bold mb-3 white--text">Clarie</h2>
        <p class="text-body-1 white--text">
          Hello! I'm Claire HAHAHAHAHAHAHAHHAHAHAHAHAHA
        </p>
        <v-divider class="my-5 white"></v-divider>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  name: 'AboutComponent'
}
</script>

<style scoped>
.gradient-bg {
  background: linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%);
}
.profile-image {
  border-radius: 50%;
}
</style>
