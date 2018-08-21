/// <reference types="@types/qlik-engineapi" />
/// <reference types="@types/qlik-visualizationextensions" />

declare module "qdt-components" {
  /**
   * Qlik-powered components built by the Qlik Demo Team. For use with simple html, Angular6, React 16 and Vue 2
   */
  export default class QdtComponents {
    constructor(config: QdtConfig, connections?: QdtConnections);

    /**
     * Will trigger destructors within QdtComponent to clean up listeners and
     * Qlik objects cleanly and safely.
     * @param element Target element where QDT-Component instance was mounted originally
     * @example
     *
     * const qdt = new QdtComponents(conifg, connections);
     *
     * const element = document.querySelector('#node');
     *
     * // Component instance and necessary qlik object initialised
     * qdt.render('QdtViz', props, element);
     *
     * // This particular component instance safely destoryed and all qlik objects assoicated with it destroyed
     * QdtComponents.unmountQdtComponent(element);
     *
     */
    static unmountQdtComponent(element: HTMLElement): void;

    /**
     * If `QdtComponents` is configured to do so, will resolve to a
     * Capabilities API App instance.
     */
    qAppPromise: Promise<AppAPI.IApp> | null;

    /**
     * If `QdtComponents` is configured to do so, will resolve to a Engine
     * API App instance as implemented by `engima.js`
     */
    qDocPromise: Promise<EngineAPI.IApp> | null;

    render(
      type: string,
      props: any,
      element: HTMLElement
    ): Promise<HTMLElement>;
  }

  export interface QdtConnections {
    /**
     * If true QdtComponent will init a connection to the Qlik Server via the
     * Capabilities API. It will directly modify the <head></head> tag to
     * include css, fonts, and necessary javascript from the Qlik Server. Qlik
     * Sense Desktop or Qlik Sense Server only.
     */
    vizApi: boolean;
    /**
     * If true QdtComponent will init a connection to the Qlik Server via
     * enigma.js, a lightweight `Promise` based implementation of the Engine
     * APIs. Works on Qlik Sense Desktop, Qlik Sense Server, and Qlik Core.
     */
    engineApi: boolean;
    /**
     * If set to a non-empty string will use that string in the `WebSocket` url
     * path as /identity/:sessionID. Otherwise, will have an identity path with
     * a randomly generated string. Closest thing to docs:
     * https://github.com/qlik-oss/enigma.js/blob/master/src/sense-utilities.js#L16
     */
    useUniqueSessionID?: string;
  }

  export interface QdtConfig {
    /**
     * Qlik Server hostname
     */
    host: string;
    /**
     * If true, then uses https:// & wss:// instead of http:// & ws://
     */
    secure: boolean;
    /**
     * Port number for Qlik Server. For sense desktop its typically `4848`,
     * otherwise in most cases leave as an empty string
     */
    port: number | "";
    /**
     * Config for Qlik proxy. If your Qlik server is using a proxy this prefixes
     * the websocket url path with the proxy path. Use empty string in most cases.
     */
    prefix: string;
    /**
     * Id for Qlik App. On Sense Desktop its the filename, whereas on Server or
     * Core it is a UUID/GUID that is generated by the server at App creation
     * or App publish time
     */
    appId: string;
  }
}