<template>
  <v-app class="bg-grey-lighten-5">
    <v-main class="pa-8 ga-4">
      <router-view />
    </v-main>
    <v-alert v-if="error" dismissible type="error">
      {{ error.message }}
    </v-alert>
    <AppFooter />
  </v-app>
</template>

<script lang="ts" setup>
  import { useBirdStore } from '@/stores/app'
  import { storeToRefs } from 'pinia'

  const store = useBirdStore()
  const { error } = storeToRefs(store)
</script>
