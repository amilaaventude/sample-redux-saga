import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Daum } from "./models/IPost";
import { fetchPostsRequest } from "./redux/actions/postsActions/postsActions";
import { RootState } from "./redux/reducers/rootReducer";

const App = () => {
  const dispatch = useDispatch();
  const { pending, posts, error } = useSelector(
    (state: RootState) => state.posts
  );

  useEffect(() => {
    dispatch(fetchPostsRequest());
  }, []);



  return (
    <div>
      {pending ? (
        <div>Loading...</div>
      ) : error ? (
        <div>Error</div>
      ) : (<pre>{JSON.stringify(posts, null, 2)}</pre>)}
    </div>
  );
};

export default App;



