<template>
  <v-card
    :title="`Search Results for: ${searchQuery}`"
    :subtitle="`Total recordings found: ${numRecordings}`"
  >
    <v-data-table
      :headers="headers"
      :items="filteredRecordings"
      :loading="isLoading"
    >
      <template v-slot:item.file="{ item }">
        <audio controls :src="item.file"></audio>
      </template>
    </v-data-table>
  </v-card>
</template>

<script setup lang="ts">
import { useBirdStore } from "@/stores/app";
import { storeToRefs } from "pinia";

const store = useBirdStore(),
  { filteredRecordings, isLoading, searchQuery, numRecordings } =
    storeToRefs(store),
  { fetchBirds } = store;

const headers = computed(() => [
  { title: "ID", key: "id", width: 70 },
  { title: "Genus", key: "gen" },
  { title: "Species", key: "sp" },
  { title: "English Name", key: "en" },
  { title: "Recordist", key: "rec" },
  { title: "Country", key: "cnt" },
  //{ title: "Date", key: "date" },
  { title: "Audio", key: "file", sortable: false },
]);

onMounted(() => fetchBirds());
</script>

<style>
audio {
  display: block;
  height: 30px;
}
</style>
