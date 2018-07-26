import { getHousesAction, membersAction } from '../index';

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
