import { call, put, takeLatest } from 'redux-saga/effects';
import { AxiosError } from 'axios';

import { getMyExamList } from '@/lib/api/my';

import { getMyExamListAsync, GET_EXAM_LIST } from '@/modules/survey';

import { ExamInfoListType } from '@/modules/survey/types';

function* getMyExamListSaga(action: ReturnType<typeof getMyExamListAsync.request>) {
  try {
    const res: ExamInfoListType = yield call(getMyExamList, action.payload);
    yield put(getMyExamListAsync.success(res));
  } catch (e: unknown) {
    yield put(getMyExamListAsync.failure(e as AxiosError));
  }
}

export function* surveySaga() {
  yield takeLatest(GET_EXAM_LIST, getMyExamListSaga);
}
