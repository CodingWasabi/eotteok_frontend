import { call, put, takeLatest } from 'redux-saga/effects';
import { AxiosError } from 'axios';

import { getMyExamList } from '@/lib/api/my';

import { getMyExamListAsync, GET_EXAM_LIST } from '@/modules/survey';

import { GetExamInfoListType } from '@/modules/survey/types';

function* getMyExamListSaga() {
  try {
    const res: GetExamInfoListType = yield call(getMyExamList);
    yield put(getMyExamListAsync.success(res));
  } catch (e: unknown) {
    yield put(getMyExamListAsync.failure(e as AxiosError));
  }
}

export function* surveySaga() {
  yield takeLatest(GET_EXAM_LIST, getMyExamListSaga);
}
