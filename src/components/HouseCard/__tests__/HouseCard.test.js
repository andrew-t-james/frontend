import { mapStateToProps, mapDispatchToProps } from '../HouseCard';
import { membersAction, houseIndexAction } from '../../../actions';

describe('mapStateToProps', () => {
  test('should mapStateToProps of members', () => {
    const mockMembers = [{member: 1}, {member: 2}];
    const mockState ={
      members: mockMembers,
      index: 1
    };
    const expected = {
      members: mockMembers,
      houseIndexFromStore: 1
    };
    const result = mapStateToProps(mockState);

    expect(result).toEqual(expected);
  });
});

describe('mapDispatchToProps', () => {
  test('should mapsDispatchToProps membersAction', () => {
    const mockMembers = [{member: 1}, {member: 2}];
    const mockDispatch = jest.fn();
    const mockActionToDispatch = membersAction(mockMembers);
    const mappedProps = mapDispatchToProps(mockDispatch);
    mappedProps.displayMembers(mockMembers);
    expect(mockDispatch).toHaveBeenCalledWith(mockActionToDispatch);
  });

  test('should mapsDispatchToProps and call houseIndexAction', () => {
    const mockIndex = 1;
    const mockDispatch = jest.fn();
    const mockActionToDispatch = houseIndexAction(mockIndex);
    const mappedProps = mapDispatchToProps(mockDispatch);
    mappedProps.currentHouseIndex(mockIndex);
    expect(mockDispatch).toHaveBeenCalledWith(mockActionToDispatch);
  });
});

