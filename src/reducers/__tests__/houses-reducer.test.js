import { houses } from '../houses-reducer';
import { getHousesAction } from '../../actions/index';

describe('houses reducer', () => {
  test('should return array of houses', () => {
    const expected = [
      {
        house: 1
      },
      {
        house: 2
      }
    ];

    const result = houses(undefined, getHousesAction(expected));
    expect(result).toEqual(expected);
  });
});
