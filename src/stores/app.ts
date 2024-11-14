// Utilities
import { defineStore } from "pinia";
import { Recording, ApiResponse } from "@types";
import parseLengthToSeconds from "@/utils";

export const useBirdStore = defineStore("birdsStore", () => {
  const recordings = ref<Recording[]>([]),
    searchQuery = ref("grus"),
    isLoading = ref(false),
    error = ref<Error | null>(null),
    numRecordings = ref(0),
    page = ref(1),
    numPages = ref(1),
    showShortRecordingsOnly = ref(false);

  const fetchBirds = async () => {
    isLoading.value = true;
    error.value = false;

    try {
      const response = await fetch(
        `https://xeno-canto.org/api/2/recordings?query=${encodeURIComponent(searchQuery.value)}`,
      );
      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }

      const data: ApiResponse = await response.json();
      numRecordings.value = data.numRecordings;
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
