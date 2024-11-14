// src/types/index.ts

export interface Sono {
  small: string;
  medium: string;
  large: string;
  full: string;
}

export interface Recording {
  id: string;
  gen: string; // Genus
  sp: string; // Species
  en: string; // English name
  rec: string; // Recordist
  cnt: string; // Country
  loc: string; // Location
  lat: string; // Latitude
  lng: string; // Longitude
  alt: string; // Altitude
  type: string; // Type of sound
  file: string; // File URL
  lic: string; // License URL
  q: string; // Quality rating
  length: string; // Length of the recording
  date: string; // Date of the recording
  time: string; // Time of the recording
  url: string; // Recording page URL
  sono: Sono; // Sonogram images
}

export interface ApiResponse {
  numRecordings: string;
  numSpecies: string;
  page: number;
  numPages: number;
  recordings: Recording[];
}
