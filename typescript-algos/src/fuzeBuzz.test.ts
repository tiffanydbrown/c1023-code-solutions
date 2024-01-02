import { fuzeBuzz } from './fuzeBuzz';

// Your code goes here
describe('fuzeBuzz', () => {
  it('returns an array of strings', () => {
    const limit = 2;
    const result = fuzeBuzz(limit);
    expect(result).toEqual(['1', '2']);
  });
  it('returns an array of strings', () => {
    const limit = 3;
    const result = fuzeBuzz(limit);
    expect(result).toEqual(['1', '2', 'Learning']);
  });
  it('returns an array of strings', () => {
    const limit = 5;
    const result = fuzeBuzz(limit);
    expect(result).toEqual(['1', '2', 'Learning', '4', 'Fuze']);
  });
  it('returns an array of strings', () => {
    const limit = 15;
    const result = fuzeBuzz(limit);
    expect(result).toEqual([
      '1',
      '2',
      'Learning',
      '4',
      'Fuze',
      'Learning',
      '7',
      '8',
      'Learning',
      'Fuze',
      '11',
      'Learning',
      '13',
      '14',
      'LearningFuze',
    ]);
  });
});
