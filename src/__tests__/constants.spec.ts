import { ALPHABET, ALPHANUMERIC, BASE_TEN } from '../constants';

describe('constants', () => {
  it('ALPHABET contains exactly the expected 24 uppercase letters (excluding I and O)', () => {
    expect(ALPHABET).toEqual([
      'A','B','C','D','E','F','G','H','J','K','L','M',
      'N','P','Q','R','S','T','U','V','W','X','Y','Z',
    ]);
  });

  it('BASE_TEN contains digits 0–9', () => {
    expect(BASE_TEN).toEqual([0,1,2,3,4,5,6,7,8,9]);
  });

  it('ALPHANUMERIC is ALPHABET followed by BASE_TEN', () => {
    expect(ALPHANUMERIC).toEqual([...ALPHABET, ...BASE_TEN]);
    expect(ALPHANUMERIC).toHaveLength(34);
  });
});
