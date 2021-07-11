import { all } from 'redux-saga/effects';

import cart from './cart/saga';

export default function* rootSaga(): Generator<unknown> {
  return yield all([cart]);
}
