import { describe, it, expect } from 'vitest';
import {
  LOCATIONS,
  INDEXED_LOCATIONS,
  PRIMARY_LOCATION,
  getLocationBySlug,
} from '../../src/data/locations';

describe('Locations Data', () => {
  describe('LOCATIONS array integrity', () => {
    it('contains exactly 10 locations', () => {
      expect(LOCATIONS).toHaveLength(10);
    });

    it('every location has a unique slug', () => {
      const slugs = LOCATIONS.map((l) => l.slug);
      expect(new Set(slugs).size).toBe(slugs.length);
    });

    it('every slug matches URL-safe pattern', () => {
      for (const loc of LOCATIONS) {
        expect(loc.slug).toMatch(/^[a-z0-9-]+$/);
      }
    });

    it('every location has latitude within Poole/Dorset bounds', () => {
      for (const loc of LOCATIONS) {
        expect(loc.latitude).toBeGreaterThan(50.5);
        expect(loc.latitude).toBeLessThan(51.1);
      }
    });

    it('every location has longitude within Poole/Dorset bounds', () => {
      for (const loc of LOCATIONS) {
        expect(loc.longitude).toBeGreaterThan(-2.5);
        expect(loc.longitude).toBeLessThan(-1.7);
      }
    });

    it('every location has countyOrRegion defined', () => {
      for (const loc of LOCATIONS) {
        expect(loc.countyOrRegion).toBeTruthy();
      }
    });
  });

  describe('PRIMARY_LOCATION', () => {
    it('is "poole"', () => {
      expect(PRIMARY_LOCATION.slug).toBe('poole');
    });

    it('is first in LOCATIONS array', () => {
      expect(LOCATIONS[0]).toBe(PRIMARY_LOCATION);
    });
  });

  describe('INDEXED_LOCATIONS', () => {
    it('contains all 10 locations', () => {
      expect(INDEXED_LOCATIONS).toHaveLength(10);
    });

    it('includes only locations without noindex', () => {
      for (const loc of INDEXED_LOCATIONS) {
        expect(loc.noindex).toBeFalsy();
      }
    });

    it('includes all location slugs', () => {
      const slugs = INDEXED_LOCATIONS.map((l) => l.slug);
      expect(slugs).toContain('poole');
      expect(slugs).toContain('bournemouth');
      expect(slugs).toContain('ferndown');
      expect(slugs).toContain('wimborne');
      expect(slugs).toContain('wareham');
      expect(slugs).toContain('christchurch');
      expect(slugs).toContain('ringwood');
      expect(slugs).toContain('swanage');
      expect(slugs).toContain('verwood');
      expect(slugs).toContain('blandford-forum');
    });
  });

  describe('getLocationBySlug', () => {
    it('returns correct location for "poole"', () => {
      const loc = getLocationBySlug('poole');
      expect(loc).toBeDefined();
      expect(loc!.name).toBe('Poole');
    });

    it('returns correct location for "bournemouth"', () => {
      const loc = getLocationBySlug('bournemouth');
      expect(loc).toBeDefined();
      expect(loc!.name).toBe('Bournemouth');
    });

    it('returns undefined for non-existent slug', () => {
      expect(getLocationBySlug('nonexistent')).toBeUndefined();
    });

    it('returns undefined for empty string', () => {
      expect(getLocationBySlug('')).toBeUndefined();
    });
  });
});
