import { mapStateTopProps } from '../CardContainer';

describe('mapStateToProps', () => {
  const mockHouses = {
    houses: [{house: 1}, {house: 2}]
  };
  test('should mapStateToProps', () => {
    const mappedProps = mapStateTopProps(mockHouses);

    expect(mappedProps).toEqual(mockHouses);
  });
});
