import axios from 'axios';
import {
  CHURRAS_FETCH,
  CHURRAS_FETCH_FAIL,
  CHURRAS_FETCH_SUCCESS,
  CHURRAS_ADD,
  CHURRAS_EDIT,
  CHURRAS_DELETE
} from './types';
import { API_URL } from '../config';

export const fetchChurras = () => dispatch => {
  dispatch({ type: CHURRAS_FETCH });
  axios
    .get(`${API_URL}/barbecues?PageNumber=1&PageSize=20`)
    .then(res => dispatch({ type: CHURRAS_FETCH_SUCCESS, payload: res.data }))
    .catch(err => dispatch({ type: CHURRAS_FETCH_FAIL, payload: err }));
};

export const addChurras = () => dispatch => {
  dispatch({
    type: CHURRAS_ADD,
    payload: null
  });
};

export const editChurras = () => dispatch => {
  dispatch({
    type: CHURRAS_EDIT,
    payload: null
  });
};

export const deleteChurras = () => dispatch => {
  dispatch({
    type: CHURRAS_DELETE,
    payload: null
  });
};
