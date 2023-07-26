// Un problema es que nuestros servicios tienen una fuerte dependencia a Axios
import axios from 'axios';

// Si queremos modificar algo de estas funciones, toca editar el archivo directamente
export class TodoService {
  async getTodoItems() {
    const { data } = await axios.get(
      'https://jsonplaceholder.typicode.com/todos/'
    );
    return data;
  }
}

export class PostService {
  async getPosts() {
    const { data } = await axios.get(
      'https://jsonplaceholder.typicode.com/posts'
    );
    return data;
  }
}

export class PhotosService {
  async getPhotos() {
    const { data } = await axios.get(
      'https://jsonplaceholder.typicode.com/photos'
    );
    return data;
  }
}
