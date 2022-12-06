export class EndpointsConstants {
  private static readonly PORT = 4000;

  public static readonly API = `http://localhost:${EndpointsConstants.PORT}`;
  public static readonly LIVROS = `${EndpointsConstants.API}/livros`;
}
