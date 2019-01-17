import {
  GET_SHELTER_BY_ID,
  getShelterById,
  getAllShelters,
  GET_ALL_SHELTERS,
  updateShelter,
  UPDATE_SHELTER_STARTED,
  UPDATE_SHELTER_SUCCESS,
  UPDATE_SHELTER_FAILURE
} from "./shelterActionCreators";
import {
  getAnimals,
  GET_ANIMALS_LIST,
  UPDATE_ANIMAL,
  UPDATE_ANIMAL_SUCCESS,
  UPDATE_ANIMAL_FAILURE,
  UPDATE_ANIMAL_PHOTOS,
  ADD_ANIMAL_STARTED,
  ADD_ANIMAL_SUCCESS,
  ADD_ANIMAL_FAILURE,
  updateAnimalPhotos,
  uploadAnimalPhotos,
  updateAnimal,
  addAnimal,
  getAnimal,
  GET_ANIMAL_STARTED,
  GET_ANIMAL_SUCCESS,
  GET_ANIMAL_FAILURE
} from "./animalListActionCreators";
import {
  GET_ALL_HOSTS,
  getAllHosts,
  updateHost,
  UPDATE_HOST,
  UPDATE_HOST_SUCCESS,
  UPDATE_HOST_FAILURE,
  registerHost,
  REGISTER_HOST_STARTED,
  REGISTER_HOST_SUCCESS,
  REGISTER_HOST_FAILURE,
  GET_HOST_STARTED,
  GET_HOST_SUCCESS,
  GET_HOST_FAILURE,
  getHost
} from "./hostActionCreators";
import {
  login,
  logout,
  LOGIN_STARTED,
  LOGIN_SUCCESSFUL,
  LOGIN_UNSUCCESSFUL,
  LOGOUT
} from "./authActionCreator";
import {
  UPDATE_HOST_IMAGE_STARTED,
  UPDATE_HOST_IMAGE_SUCCESS,
  UPDATE_HOST_IMAGE_FAILURE,
  UPDATE_SHELTER_IMAGE_STARTED,
  UPDATE_SHELTER_IMAGE_SUCCESS,
  UPDATE_SHELTER_IMAGE_FAILURE,
  uploadPhoto
} from './hostAndShelterPhotoActionCreator';

export {
  getShelterById,
  GET_SHELTER_BY_ID,
  getAllShelters,
  GET_ALL_SHELTERS,
  getAnimals,
  GET_ANIMALS_LIST,
  getAllHosts,
  GET_ALL_HOSTS,
  login,
  logout,
  LOGIN_STARTED,
  LOGIN_SUCCESSFUL,
  LOGIN_UNSUCCESSFUL,
  LOGOUT,
  updateAnimalPhotos,
  UPDATE_ANIMAL,
  UPDATE_ANIMAL_PHOTOS,
  uploadAnimalPhotos,
  UPDATE_ANIMAL_SUCCESS,
  UPDATE_ANIMAL_FAILURE,
  ADD_ANIMAL_STARTED,
  ADD_ANIMAL_SUCCESS,
  ADD_ANIMAL_FAILURE,
  updateAnimal,
  addAnimal,
  updateShelter,
  UPDATE_SHELTER_STARTED,
  UPDATE_SHELTER_SUCCESS,
  UPDATE_SHELTER_FAILURE,
  updateHost,
  UPDATE_HOST,
  UPDATE_HOST_SUCCESS,
  UPDATE_HOST_FAILURE,
  registerHost,
  REGISTER_HOST_STARTED,
  REGISTER_HOST_SUCCESS,
  REGISTER_HOST_FAILURE,
  UPDATE_HOST_IMAGE_STARTED,
  UPDATE_HOST_IMAGE_SUCCESS,
  UPDATE_HOST_IMAGE_FAILURE,
  UPDATE_SHELTER_IMAGE_STARTED,
  UPDATE_SHELTER_IMAGE_SUCCESS,
  UPDATE_SHELTER_IMAGE_FAILURE,
  uploadPhoto,
  getAnimal,
  GET_ANIMAL_STARTED,
  GET_ANIMAL_SUCCESS,
  GET_ANIMAL_FAILURE,
  GET_HOST_STARTED,
  GET_HOST_SUCCESS,
  GET_HOST_FAILURE,
  getHost
};
