import { LocalDataBaseService } from './05-dependency-c';

export interface Post {
  body: string;
  id: number;
  title: string;
  userId: number;
}

/** Este servicio no debería de preocuparse por abrir conexión a la BD, por pegarse al servidor HTTP, etc.
 * Para el servicio eso debería ser transparente. Ya que si por ejemplo se decidiera usar Graphql y cambiara
 * la implementación del LocalDataBaseService, cambiaría la forma en que se consume el servicio y eso
 * traería más problemas
 */
export class PostService {
  private posts: Post[] = [];

  constructor() {}

  /** Aquí hay una dependencia oculta (LocalDataBaseService). El problema es que si luego se cambia el
   * nombre del getFakePosts, tendría que venir a cambiarlo aquí, pero no tiene sentido que un
   * cambio como ese me force a modificar el PostService (están muy acoplados)
   */
  async getPosts() {
    /** Si cambiara el servicio a usar, cambia toda la implementación aquí. Se estaría
     * abriendo la implementación de un método que debería estar cerrado (viola OCP)
     */
    const jsonDB = new LocalDataBaseService();
    this.posts = await jsonDB.getFakePosts();

    return this.posts;
  }
}
