import { murmur3 } from 'murmurhash-js'; // npm install siphash

function hashFeature(feature: string): bigint {
  return BigInt(murmur3(feature));
}

export function simhashStream(words: Iterable<string>): bigint {
  const v = new Array(64).fill(0);
  let simhash = 0n;

  for (const feature of words) {
    const featureHash = hashFeature(feature);

    for (let i = 0; i < 64; i++) {
      const bit = (featureHash >> BigInt(i)) & 1n;
      if (bit === 1n) {
        v[i]++;
      } else {
        v[i]--;
      }
    }
  }

  for (let i = 0; i < 64; i++) {
    if (v[i] > 0) {
      simhash |= 1n << BigInt(i);
    }
  }

  return simhash;
}

export function simhash(text: string): bigint {
  return simhashStream(text.split(/\s+/));
}

export function hammingDistance(x: bigint, y: bigint): number {
  let z = x ^ y;
  let dist = 0;
  while (z > 0n) {
    dist += Number(z & 1n);
    z >>= 1n;
  }
  return dist;
}

export function hashSimilarity(hash1: bigint, hash2: bigint): number {
  const distance = hammingDistance(hash1, hash2);
  return 1.0 - distance / 64.0;
}

export function similarityStreams(words1: Iterable<string>, words2: Iterable<string>): number {
  return hashSimilarity(simhashStream(words1), simhashStream(words2));
}

export function similarity(text1: string, text2: string): number {
  return similarityStreams(text1.split(/\s+/), text2.split(/\s+/));
}

// if (import.meta.vitest) {
//   const { it, expect } = import.meta.vitest;
//
//   it('hamming distance', () => {
//     expect(hammingDistance(0n, 0n)).toBe(0);
//     expect(hammingDistance(0b1111111n, 0n)).toBe(7);
//     expect(hammingDistance(0b0100101n, 0b1100110n)).toBe(3);
//   });
//
//   it('hash similarity', () => {
//     expect(hashSimilarity(0n, 0n)).toBe(1.0);
//     expect(hashSimilarity(~0n, 0n)).toBe(0.0);
//     expect(hashSimilarity(BigInt(~0 >>> 0), 0n)).toBeCloseTo(0.5, 1);
//   });
//
//   it('similarity', () => {
//     expect(similarity('Stop hammertime', 'Stop hammertime')).toBe(1.0);
//     expect(similarity('Hocus pocus', 'Hocus pocus pilatus pas')).toBeGreaterThan(0.7);
//     expect(similarity('Peanut butter', 'Strawberry cocktail')).toBeLessThan(0.6);
//   });
// }
