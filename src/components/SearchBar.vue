<template>
  <div>
    <v-text-field
      :loading="isLoading"
      v-model="searisLoadingQuery"
      clearable
      label="Search Birds"
      @keyup.enter="fetchBirds"
      append-inner-icon="mdi-magnify"
      @click:append-inner="fetchBirds"
    ></v-text-field>
    <v-switch
      color="primary"
      v-model="model"
      :label="`Recs longer than 30s? ${model}`"
      false-value="No"
      true-value="Yes"
      hide-details
    ></v-switch>
  </div>
</template>
<script setup lang="ts">
import { useBirdStore } from "@/stores/app";
import { storeToRefs } from "pinia";

const store = useBirdStore();
const { searchQuery, isLoading } = storeToRefs(store),
  { fetchBirds } = store;
const model = ref("No");
</script>
