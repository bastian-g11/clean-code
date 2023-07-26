import { PostProvider } from './05-dependency-c';

export interface Post {
  body: string;
  id: number;
  title: string;
  userId: number;
}

/** Si yo quisiera probar mi PostService, lo único que habría que hacer es
 * mandarle un Provider el cual me asegure que esté implementando la clase abstracta y eso es todo.
 * No tengo que probar que efectivamente llegue al endpoint, ni que efectivamente haga X cosa. Puedo
 * probar de manera aislada cada uno de esos componentes
 */
export class PostService {
  private posts: Post[] = [];

  /** Se elimina la dependencia oculta usando inyeccion de dependencias, pero además podemos
   * hacer que acepte distintos tipos de proveedores, ya que aquí estaría acoplado a una implementación
   * específica
   */
  // constructor(private postProvider: JsonDataBaseService) {}

  /** Nuestra método ahora depende de una abstracción */
  constructor(private postProvider: PostProvider) {}

  async getPosts() {
    this.posts = await this.postProvider.getPosts();

    return this.posts;
  }
}
