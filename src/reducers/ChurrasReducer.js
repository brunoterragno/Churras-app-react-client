import { Map } from 'immutable';
import {
  CHURRAS_FETCH,
  CHURRAS_FETCH_FAIL,
  CHURRAS_FETCH_SUCCESS,
  CHURRAS_ADD,
  CHURRAS_EDIT,
  CHURRAS_DELETE
} from '../actions/types';

const INITIAL_STATE = Map({
  loading: false,
  items: []
});

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case CHURRAS_FETCH:
      return state.set('loading', true);
    case CHURRAS_FETCH_FAIL:
      return state.set('loading', false).set('items', []);
    case CHURRAS_FETCH_SUCCESS:
      return state.set('loading', false).set('items', action.payload);
    case CHURRAS_ADD:
      return state;
    case CHURRAS_EDIT:
      return state;
    case CHURRAS_DELETE:
      return state;
    default:
      return state;
  }
};
