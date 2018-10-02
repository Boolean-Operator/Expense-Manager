import moment from 'moment';
import { 
  setTextFilter,
  sortByDate,
  sortByAmount,
  setStartDate,
  setEndDate
} from '../../actions/filters';

test('should generate set start date action object', () => {
  const action = setStartDate(moment(0));

  expect(action).toEqual({
    type: 'SET_START_DATE',
    startDate: moment(0)
  });
});



test('should generate set end date action object', () => {
  const action = setEndDate(moment(1));

  expect(action).toEqual({
    type: 'SET_END_DATE',
    endDate: moment(1)
  })
});

test('should set up sort by Date action object', () => {
  const action = sortByDate();

  expect(action).toEqual({
    type: 'SORT_BY_DATE'
  });
});

test('should set up sort by Amount action object', () => {
  const action = sortByAmount();
  
  expect(action).toEqual({
    type: 'SORT_BY_AMOUNT'
  });
});

test('should generate set Text Filter action object with text value', () => {
  const text = 'test';
  const action = setTextFilter(text);

  expect(action).toEqual({
    type: 'SET_TEXT_FILTER',
    text: text
  });
});

test('should generate set Text Filter action object with text value as empty string', () => {
  const action = setTextFilter();

  expect(action).toEqual({
    type: 'SET_TEXT_FILTER',
    text: ''
  });
});