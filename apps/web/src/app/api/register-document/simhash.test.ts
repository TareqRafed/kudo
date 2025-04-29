/// <reference types="vitest" />
/// <reference types="vitest/globals" />

/// <vitest-environment node>

import { it, expect, describe } from 'vitest';
import { simhash, hammingDistance, similarity } from './simhash';

describe('SimHash for HTML documents', () => {
  it('hashing should flip bits', async () => {
    const input1 = 'hello';
    const input2 = 'hallo';

    const hash1 = await simhash(input1);
    const hash2 = await simhash(input2);
    const distance = hammingDistance(hash1, hash2);

    expect(distance).toBeLessThan(34);
    expect(distance).toBeGreaterThan(30);
  });

  it('should generate identical hashes for identical HTML', async () => {
    const html1 = '<html><body><h1>Hello World</h1></body></html>';
    const html2 = '<html><body><h1>Hello World</h1></body></html>';

    const hash1 = await simhash(html1);
    const hash2 = await simhash(html2);

    expect(hash1).toBe(hash2);
  });

  it('similar text should be similar should have similar output', async () => {
    const html1 = 'Hocus pocus';
    const html2 = 'Hocus pocus pilatus pas';

    const sim = await similarity(html1, html2);

    expect(sim).toBeGreaterThan(0.7);
  });

  it('very different texts should generate less similarity output', async () => {
    const html1 = '<html><body><h1>Hello World</h1></body></html>';
    const html2 = '<html><body><h1>Goodbye Universe</h1><p>New paragraph</p></body></html>';

    const sim = await similarity(html1, html2);

    expect(sim).toBeLessThan(0.5);
  });
});
