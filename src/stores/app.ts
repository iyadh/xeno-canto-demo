// Utilities
import { defineStore } from "pinia";
import { Recording, ApiResponse } from "@types";

export const useBirdStore = defineStore("birdsStore", () => {
  const recordings = ref<Recording[]>([]),
    searchQuery = ref("grus"),
    isLoading = ref(false),
    error = ref<Error | null>(null),
    page = ref(1),
    numPages = ref(1);
  // lengthFilter = ref<"all" | "lessThan30" | "greaterThan30">("all");

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
      recordings.value = data.recordings;
      page.value = data.page;
      numPages.value = data.numPages;
    } catch (err) {
      error.value = err as Error;
    } finally {
      isLoading.value = false;
    }
  };

  return {
    recordings,
    searchQuery,
    page,
    numPages,
    isLoading,
    error,
    fetchBirds,
  };
});
