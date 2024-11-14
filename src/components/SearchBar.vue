<template>
  <v-card>
    <v-card-text class="pt-4 d-flex ga-4">
      <v-text-field
        v-model="searchQuery"
        append-inner-icon="mdi-magnify"
        clearable
        label="Search Birds"
        :loading="isLoading"
        @click:append-inner="fetchBirds"
        @keyup.enter="fetchBirds"
      />
      <v-switch
        v-model="showShortRecordingsOnly"
        color="primary"
        label="Show only recordings shorter than 30 seconds"
      />
    </v-card-text>
  </v-card>
</template>
<script setup lang="ts">
  import { useBirdStore } from '@/stores/app'
  import { storeToRefs } from 'pinia'

  const store = useBirdStore()
  const { searchQuery, isLoading, showShortRecordingsOnly } = storeToRefs(store)
  const { fetchBirds } = store
</script>
