import { firstChars } from './first-chars';

// Your code goes here
describe('firstChars', () => {
  it('returns characters of a specified length', () => {
    const length = 1;
    const string = 'React';
    const result = firstChars(length, string);
    expect(result).toEqual('R');
  });
  it('returns characters of a specified length', () => {
    const length = 4;
    const string = 'JavaScript';
    const result = firstChars(length, string);
    expect(result).toEqual('Java');
  });
  it('returns characters of a specified length', () => {
    const length = 20;
    const string = 'LearningFuze';
    const result = firstChars(length, string);
    expect(result).toEqual('LearningFuze');
  });
  it('returns characters of a specified length', () => {
    const length = 5;
    const string = '';
    const result = firstChars(length, string);
    expect(result).toEqual('');
  });
});
