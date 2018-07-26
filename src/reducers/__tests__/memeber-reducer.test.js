import { members } from '../member-reducer';
import { membersAction } from '../../actions/index';

describe('members reducer', () => {
  test('should return a members array', () => {
    const mockMembers = ['name', 'name 2', 'name 3'];
    const expected =  ["name", "name 2", "name 3"];

    const result = members([], membersAction(mockMembers));
    expect(result).toEqual(expected);
  });

  test('should return default state', () => {
    const result = members(undefined, jest.fn());
    expect(result).toEqual([]);
  });
});
