// Utilities
import { defineStore } from "pinia";
import { ApiResponse, Recording } from "@/types";
import parseLengthToSeconds from "@/utils";

export const useBirdStore = defineStore("birdsStore", () => {
  const recordings = ref<Recording[]>([]);
  const searchQuery = ref("grus");
  const isLoading = ref(false);
  const error = ref<Error | null>(null);
  const numRecordings = ref(0);
  const page = ref(1);
  const numPages = ref(1);
  const showShortRecordingsOnly = ref(false);

  const fetchBirds = async () => {
    isLoading.value = true;
    error.value = null;

    try {
      const response = await fetch(
        `https://xeno-canto.org/api/2/recordings?query=${encodeURIComponent(searchQuery.value)}`,
      );
      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }

      const data: ApiResponse = await response.json();
      numRecordings.value = Number(data.numRecordings);
      recordings.value = data.recordings;
      page.value = data.page;
      numPages.value = data.numPages;
    } catch (err) {
      error.value = err as Error;
    } finally {
      isLoading.value = false;
    }
  };

  // Computed property to get recordings filtered by length
  const filteredRecordings = computed(() => {
    if (!showShortRecordingsOnly.value) {
      return recordings.value;
    } else {
      return recordings.value.filter((rec: Recording) => {
        const lengthInSeconds = parseLengthToSeconds(rec.length);
        return lengthInSeconds < 30;
      });
    }
  });

  return {
    searchQuery,
    numRecordings,
    isLoading,
    error,
    fetchBirds,
    showShortRecordingsOnly,
    filteredRecordings,
  };
});
