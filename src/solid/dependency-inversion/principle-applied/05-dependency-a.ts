import { PostService } from './05-dependency-b';
import {
  JsonDataBaseService,
  LocalDataBaseService,
  WebApiPostService,
} from './05-dependency-c';

// Main
(async () => {
  /** Ahora puedo usar cualquier proveedor y va a funcionar perfectamente.
   * Estamos aplicando Liskov Substitution, ya que podemos reemplazar cualquier clase por una clase
   * que implemente o extienda PostService, es decir, cualquier instancia.
   * También se aplica Open and Close, ya que si queremos, podemos seguir expandiendo los proveedores y si
   * hay algo más a modificar luego, la modificación es más sencilla
   */
  // const provider = new JsonDataBaseService();
  // const provider = new LocalDataBaseService();
  const provider = new WebApiPostService();

  const postService = new PostService(provider);

  const posts = await postService.getPosts();

  console.log({ posts });
})();
