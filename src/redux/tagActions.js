import axios from "axios";

const ADD_TAG = "add tag";
const GET_TAG = "get tag";

const addTag = (singleTag) => ({
  type: ADD_TAG,
  singleTag,
});

const getTag = (tagsArray) => ({
  type: GET_TAG,
  tagsArray,
});

const getTagFromServer = async () => {
  const url = "http://localhost:3001/tags";

  const tags = await axios.get(url).then((result) => result.data);
  console.log(tags)
  return tags;
};

const getTagFunction = () => (dispatch) => {
  getTagFromServer().then((tagsArray) => dispatch(getTag(tagsArray)));
};

export { GET_TAG, ADD_TAG, addTag, getTagFunction };
