import { getHousesAction, membersAction, houseIndexAction } from '../index';

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

describe('membersAction', () => {
  test('should have a type of MEMBERS', () => {
    const mockMembers = ['name', 'name two', 'name three'];
    const expected = {
      type: 'MEMBERS',
      members: mockMembers
    };
    const result = membersAction(mockMembers);
    expect(result).toEqual(expected);
  });
});

describe('houseIndexAction', () => {
  test('should have a type INDEX', () => {
    const expected = {
      type: 'INDEX',
      index: 1
    };
    const result = houseIndexAction(1);
    expect(result).toEqual(expected);
  });

});

