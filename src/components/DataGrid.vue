<template>
  <v-data-table :headers="headers" :items="recordings"></v-data-table>
</template>

<script setup lang="ts">
import { useBirdStore } from "@/stores/app";
import { storeToRefs } from "pinia";

const store = useBirdStore();
const { recordings } = storeToRefs(store),
  { fetchBirds } = store;

const headers = computed(() => [
  { title: "ID", key: "id", width: 70 },
  { title: "Genus", key: "gen" },
  { title: "Species", key: "sp" },
  { title: "English Name", key: "en" },
  { title: "Recordist", key: "rec" },
  { title: "Country", key: "cnt" },
  { title: "Date", key: "date" },
  { title: "Audio", key: "file", sortable: false },
]);

onMounted(() => fetchBirds());
</script>
