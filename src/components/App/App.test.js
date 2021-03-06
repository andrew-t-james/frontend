import { mapDispatchToProps } from './App';
import { getHousesAction } from '../../actions/index';

describe('mapDispatchTopProps', () => {
  const houses = [{house: 1}, {house: 2}];
  test('should call dispatch with correct action', () => {
    const mockDispatch = jest.fn();
    const actionToDispatch = getHousesAction(houses);
    const mappedProps = mapDispatchToProps(mockDispatch);
    mappedProps.getHouses(houses);
    expect(mockDispatch).toHaveBeenCalledWith(actionToDispatch);
  });
});
