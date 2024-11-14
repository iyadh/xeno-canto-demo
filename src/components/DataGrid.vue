<template>
  <v-data-table :headers="headers" :items="birdStore.recordings"></v-data-table>
</template>

<script setup lang="ts">
import { useBirdStore } from "@/stores/app";

const birdStore = useBirdStore();
const searchQuery = ref("grus");

const fetchBirds = () => {
  birdStore.fetchBirds(searchQuery.value);
};

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
