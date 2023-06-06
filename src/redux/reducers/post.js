import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  posts: [],
  postDetails: null,
  coba:"hello World",
};

// const [posts, setPosts] = useState([])

const postSlicer = createSlice({
  name: "post",
  initialState,
  reducers: {
    setPosts: (state, action) => {
      state.posts = action.payload;
    },
    setPostDetails: (state, action) => {
      state.postDetails = action.payload;
    },
  },
});
// setPosts and SetPostsDetails can be accesed in any files in this project
export const { setPosts, setPostDetails } = postSlicer.actions;

// export the global state / reducers
export default postSlicer.reducer;
