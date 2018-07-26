import { getHousesAction } from '../index';

describe('getHousesAction', () => {
  test('should have a type of GET_HOUSES ', () => {
    const houses = [{house: 1}, {house: 2}];
    const expected = {
      type: 'GET_HOUSES',
      houses
    };
    const result = getHousesAction(houses);
    expect(result).toEqual(expected);
  });
});
