import axios from "axios";
import { API_DOMAIN } from "../Constants";

export const GET_ANIMALS_LIST = "get_animals_list";
export const UPDATE_ANIMAL_PHOTOS = "update_animal_photos";
export const UPDATE_ANIMAL_PHOTOS_SUCCESS = "update_animal_photos_success";
export const UPDATE_ANIMAL_PHOTOS_FAILURE = "update_animal_photos_failure";
// export const UPDATE_ANIMAL = "update_animal";

// update animal actions
export const UPDATE_ANIMAL = "UPDATE_ANIMAL";
export const UPDATE_ANIMAL_SUCCESS = "UPDATE_ANIMAL_SUCCESS";
export const UPDATE_ANIMAL_FAILURE = "UPDATE_USER_FAILURE";

// ADD animal actions
export const ADD_ANIMAL_STARTED = "add_animal_started";
export const ADD_ANIMAL_SUCCESS = "add_animal_success";
export const ADD_ANIMAL_FAILURE = "add_animal_failure";

export const GET_ANIMAL_STARTED = "get_animal_started";
export const GET_ANIMAL_SUCCESS = "get_animal_success";
export const GET_ANIMAL_FAILURE = "get_animal_failure";

export const getAnimals = filter => (dispatch, getState) => {
  const token = getState().auth.user.token;
  const filterString = JSON.stringify(filter);
  return axios
    .get(API_DOMAIN + "/api/animals", {
      headers: {
        Authorization: "Bearer " + token
      },
      params: {
        filter: filterString
      }
    })
    .then(res => {
      if (res.status === 200) {
        dispatch({
          type: GET_ANIMALS_LIST,
          payload: res.data.data
        });
      } else {
        console.log(res);
      }
    })
    .catch(error => {
      console.log(error);
    });
};

export const getAnimal = animalId => (dispatch, getState) => {
  const token = getState().auth.user.token;
  dispatch({type: GET_ANIMAL_STARTED});
  axios.get(`${API_DOMAIN}/api/animals/${animalId}`, {
    headers: { Authorization: `Bearer ${token}` }
  }).then(res => {
    if (res.status === 200) {
      dispatch({
        type: GET_ANIMAL_SUCCESS,
        payload: res.data.data[0]
      });
    } else {
      dispatch({
        type: GET_ANIMAL_FAILURE
      });
    }
  }).catch(err => {
    console.error(err);
    dispatch({
      type: GET_ANIMAL_FAILURE
    });
  });
};

export const updateAnimalPhotos = (animalId, photos) => (
  dispatch,
  getState
) => {
  dispatch({
    type: UPDATE_ANIMAL_PHOTOS
  });
  axios
    .patch(
      `${API_DOMAIN}/api/animals/${animalId}`,
      { photos },
      { headers: { Authorization: `Bearer ${getState().auth.user.token}` } }
    )
    .then(res => {
      if (res.status === 200) {
        dispatch({
          type: UPDATE_ANIMAL_PHOTOS_SUCCESS,
          payload: {
            id: animalId,
            data: res.data.data
          }
        });
      } else {
        dispatch({ type: UPDATE_ANIMAL_PHOTOS_FAILURE });
      }
    })
    .catch(err => {
      console.err(err);
      dispatch({ type: UPDATE_ANIMAL_PHOTOS_FAILURE });
    });
};

export const uploadAnimalPhotos = (animalId, photos) => (
  dispatch,
  getState
) => {
  dispatch({ type: UPDATE_ANIMAL_PHOTOS });
  const formData = new FormData();
  for (let photo of photos) {
    formData.append("images", photo);
  }

  axios
    .patch(`${API_DOMAIN}/api/animals/${animalId}/photos`, formData, {
      headers: {
        "Content-Type": "multipart/form-data",
        Authorization: "Bearer " + getState().auth.user.token
      }
    })
    .then(res => {
      if (res.status === 200) {
        dispatch({
          type: UPDATE_ANIMAL_PHOTOS_SUCCESS,
          payload: {
            id: animalId,
            data: res.data.data
          }
        });
      } else {
        dispatch({ type: UPDATE_ANIMAL_PHOTOS_FAILURE });
      }
    })
    .catch(err => {
      console.error(err);
      dispatch({ type: UPDATE_ANIMAL_PHOTOS_FAILURE });
    });
};

export const updateAnimal = updateAnimalData => (dispatch, getState) => {
  const token = getState().auth.user.token;
  dispatch({
    type: UPDATE_ANIMAL,
    payload: {}
  });

  return fetch(`${API_DOMAIN}/api/animals/${updateAnimalData.id}`, {
    method: "PATCH",
    headers: {
      Authorization: "Bearer " + token,
      "Content-Type": "application/json"
    },
    body: JSON.stringify(updateAnimalData)
  })
    .then(res => {
      if (!res.ok) {
        return res.json().then(err => {
          throw err;
        });
      }
      return res.json();
    })
    .then(data => {
      dispatch({
        type: UPDATE_ANIMAL_SUCCESS,
        payload: data
      });
    })
    .catch(err => {
      dispatch({
        type: UPDATE_ANIMAL_FAILURE,
        updateResult: "sorry, no can do."
      });
    });
};

export const addAnimal = addAnimalData => (dispatch, getState) => {
  const token = getState().auth.user.token;
  axios
    .post(API_DOMAIN + "/api/animals", addAnimalData, {
      headers: {
        Authorization: "Bearer " + token,
        "Content-Type": "application/json"
      }
    })
    .then(res => {
      if (res.status === 201) {
        dispatch({
          type: ADD_ANIMAL_SUCCESS,
          payload: res.data.data
        });
        dispatch(getAnimals());
      }
    })
    .catch(err => console.error(err));
};
