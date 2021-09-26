import axios from "axios";
import { all, call, put, takeLatest } from "redux-saga/effects";
import { IPost } from "../../../models/IPost";
import { fetchPostsFailure, fetchPostsSuccess } from "../../actions/postsActions/postsActions";
import { postTypes } from "../../Actiontypes/postsTypes";

const getPosts = () =>
  // If you need cast then you can use cast like below
    axios.get<IPost[]>("https://reqres.in/api/users?page=2");
  //axios.get("https://reqres.in/api/users?page=2");

function* fetchPostsSaga(): any {
  try {
    const response = yield call(getPosts);
    yield put(
      fetchPostsSuccess({
        posts: response.data
      })
    );
  } catch (e: any) {
    yield put(
      fetchPostsFailure({
        error: e.message
      })
    );
  }
}

function* postsSaga() {
  yield all([takeLatest(postTypes.FETCH_POST_REQUEST, fetchPostsSaga)]);
}

export default postsSaga;
