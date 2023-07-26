import localPosts from '../../../data/local-database.json';
import { Post } from './05-dependency-b';

// El objetivo es que sirva para extenderse o que otras clases sepan que cosas tienen que implementar
export abstract class PostProvider {
  // Devuelve una promesa que se resuelve en un array de Posts
  abstract getPosts(): Promise<Post[]>;
}

export class LocalDataBaseService implements PostProvider {
  constructor() {}

  async getPosts() {
    return [
      {
        userId: 1,
        id: 1,
        title:
          'sunt aut facere repellat provident occaecati excepturi optio reprehenderit',
        body: 'quia et suscipit suscipit recusandae consequuntur expedita et cum reprehenderit molestiae ut ut quas totam nostrum rerum est autem sunt rem eveniet architecto',
      },
      {
        userId: 1,
        id: 2,
        title: 'qui est esse',
        body: 'est rerum tempore vitae sequi sint nihil reprehenderit dolor beatae ea dolores neque fugiat blanditiis voluptate porro vel nihil molestiae ut reiciendis qui aperiam non debitis possimus qui neque nisi nulla',
      },
    ];
  }
}

export class JsonDataBaseService implements PostProvider {
  async getPosts() {
    return localPosts;
  }
}

/** Aquí podemos agregar otro proveedor y no hay necesidad de tocar el PostService. Y se puede cambiar
 * el proveedor fácilmente yendo al archivo a.
 * Además, si luego cambia la implementación de este método para obtener los nuevos POSTS (Por ejemplo se usa
 * graphql), se modificaría aquí únicamente o podríamos crear un nuevo proveedor.
 */

export class WebApiPostService implements PostProvider {
  async getPosts(): Promise<Post[]> {
    const resp = await fetch('https://jsonplaceholder.typicode.com/posts');
    const data = await resp.json();
    return data;
  }
}
