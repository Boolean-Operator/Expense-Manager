import moment from 'moment';
import filtersReducer from '../../reducers/filters.js';

test('should set up default filter values', () => {
  const state = filtersReducer(undefined, {type: "@@INIT"});
  expect(state).toEqual({
    text: '',
    sortBy: 'date',
    startDate: moment().startOf('month'),
    endDate: moment().endOf('month')
  })
});

test('should set sortBy to amount', () => {
  const state = filtersReducer(undefined, { type: 'SORT_BY_AMOUNT'});
 
  expect(state).toEqual({
    text: '',
    startDate: moment().startOf('month'),
    endDate: moment().endOf('month'),
    sortBy: 'amount'
  });
});

test('should set sortBy to date', () => {
  const currentState = {
    text: '',
    startDate: moment().startOf('month'),
    endDate: moment().endOf('month'),
    sortBy: 'amount'
  }
  const action = {type: 'SORT_BY_DATE'};
  const state = filtersReducer(currentState, action);

  expect(state.sortBy).toBe('date');
});

test('should set text filter to action value', ()=> {
  const text = 'tester text'
  const action = {
    type: 'SET_TEXT_FILTER',
    text: text
  };
  const state = filtersReducer(undefined, action);
  expect(state.text).toBe(text);
});

test('should set start date filter to action value', () => {
  const startDate = moment(0);
  const action = {
    type: "SET_START_DATE",
    startDate: startDate
  };
  const state = filtersReducer(undefined, action);
  expect(state.startDate).toEqual(startDate)
});

test('should set end date filter to action value', () => {
  const endDate = moment(0);
  const action = {
    type: "SET_END_DATE",
    endDate: endDate
  };
  const state = filtersReducer(undefined, action);
  expect(state.endDate).toEqual(endDate);
});
