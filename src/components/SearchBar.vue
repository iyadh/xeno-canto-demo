<template>
  <v-card>
    <v-card-text class="pt-4 d-flex ga-4">
      <v-text-field
        :loading="isLoading"
        v-model="searchQuery"
        clearable
        label="Search Birds"
        @keyup.enter="fetchBirds"
        append-inner-icon="mdi-magnify"
        @click:append-inner="fetchBirds"
      ></v-text-field>
      <v-switch
        color="primary"
        v-model="showShortRecordingsOnly"
        label="Show only recordings shorter than 30 seconds"
      ></v-switch>
    </v-card-text>
  </v-card>
</template>
<script setup lang="ts">
import { useBirdStore } from "@/stores/app";
import { storeToRefs } from "pinia";

const store = useBirdStore(),
  { searchQuery, isLoading, showShortRecordingsOnly } = storeToRefs(store),
  { fetchBirds } = store;
const model = ref("No");
</script>
