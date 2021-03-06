import { put, takeLatest } from 'redux-saga/effects';
import axios from 'axios';

// Function sends post request with rule creation data and refetches rules with 'FETCH_RULES'
function* createRulesSaga(action) {
    console.log('RULES PAYLOAD', action.payload);    
    let response = yield axios({
        method: 'POST',
        url: '/api/rules',
        data: action.payload
    });
    console.log('Response', response);
    yield put({
        type: 'FETCH_RULES',
    });
  };

// Function sends get request for rules and puts data into reducer listening for 'SET_RULES'
function* fetchRulesSaga(){
    let response = yield axios.get(`/api/rules`);
    console.log(response.data);
    yield put({
        type: 'SET_RULES',
        payload: response.data
    });
  };

function* rulesSaga() {
    yield takeLatest('CREATE_RULES', createRulesSaga);
    yield takeLatest('FETCH_RULES', fetchRulesSaga);
};

export default rulesSaga;