export interface Location {
  slug: string;
  name: string;
  countyOrRegion?: string;
  latitude: number;
  longitude: number;
  noindex?: boolean;
  description?: string;
  responseTime?: string;
}

export const PRIMARY_LOCATION: Location = {
  slug: "poole",
  name: "Poole",
  countyOrRegion: "Dorset",
  latitude: 50.7165,
  longitude: -1.9864,
};

export const LOCATIONS: Location[] = [
  PRIMARY_LOCATION,
  {
    slug: "bournemouth",
    name: "Bournemouth",
    countyOrRegion: "Dorset",
    latitude: 50.7196,
    longitude: -1.8795,
  },
  {
    slug: "ferndown",
    name: "Ferndown",
    countyOrRegion: "Dorset",
    latitude: 50.7823,
    longitude: -1.9012,
  },
  {
    slug: "wimborne",
    name: "Wimborne Minster",
    countyOrRegion: "Dorset",
    latitude: 50.8000,
    longitude: -1.9851,
  },
  {
    slug: "wareham",
    name: "Wareham",
    countyOrRegion: "Dorset",
    latitude: 50.6879,
    longitude: -2.1085,
  },
  {
    slug: "christchurch",
    name: "Christchurch",
    countyOrRegion: "Dorset",
    latitude: 50.7348,
    longitude: -1.7793,
  },
  {
    slug: "ringwood",
    name: "Ringwood",
    countyOrRegion: "Hampshire",
    latitude: 50.8454,
    longitude: -1.7842,
  },
  {
    slug: "swanage",
    name: "Swanage",
    countyOrRegion: "Dorset",
    latitude: 50.6079,
    longitude: -1.9592,
  },
  {
    slug: "verwood",
    name: "Verwood",
    countyOrRegion: "Dorset",
    latitude: 50.8754,
    longitude: -1.8795,
  },
  {
    slug: "blandford-forum",
    name: "Blandford Forum",
    countyOrRegion: "Dorset",
    latitude: 50.8563,
    longitude: -2.1638,
  },
];

export const INDEXED_LOCATIONS = LOCATIONS.filter((l) => !l.noindex);

export function getLocationBySlug(slug: string): Location | undefined {
  return LOCATIONS.find((location) => location.slug === slug);
}
