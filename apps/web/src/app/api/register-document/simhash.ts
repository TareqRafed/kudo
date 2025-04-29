import xxhash from 'xxhash-wasm';

async function hashFeature(feature: string) {
  const { h64 } = await xxhash();
  return h64(feature);
}

export async function simhashStream(words: Iterable<string>) {
  const v = new Array(64).fill(0);
  let simhash = 0n;

  for (const feature of words) {
    const featureHash = await hashFeature(feature);

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

export function simhash(text: string) {
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

export async function similarityStreams(words1: Iterable<string>, words2: Iterable<string>) {
  return hashSimilarity(await simhashStream(words1), await simhashStream(words2));
}

export async function similarity(text1: string, text2: string) {
  return similarityStreams(text1.split(/\s+/), text2.split(/\s+/));
}
