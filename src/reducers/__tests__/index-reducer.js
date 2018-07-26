import { index } from '../index-reducer';
import { houseIndexAction } from '../../actions/index';

describe('index reducer', () => {
  test('should have a type INDEX', () => {
    const expected = 1;
    const result = index(null, houseIndexAction(1));
    expect(result).toEqual(expected);
  });

  test('should return default state', () => {
    const expected = null;
    const result = index(null, jest.fn());
    expect(result).toEqual(expected);
  });
});
