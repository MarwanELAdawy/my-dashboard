import axios from 'axios';

// Getting a random photo from Unsplash
const Host = 'https://api.unsplash.com/';
const ApplicationId =
  'c9e6673001a00330add57d7644324db57a2ca4fa304c1a07e9e1fd362b9d0a02';
const RandomPhotos = 'photos/random';

// APIs
const RandomPhotosApi = Host + RandomPhotos + '?client_id=' + ApplicationId;

export default function getRandomImage() {
  let image;
  return axios
    .get(RandomPhotosApi)
    .then(data => {
      image = data.data.urls.regular;
      return image;
    })
    .catch(err => {
      return err;
    });
}
