import Image from "next/image";
import styles from "../../../styles/article.module.css";
import Link from "next/link";

export default function what_is() {
  return (
    <>
      <Link href="/sockets">
        <a className={styles.back}>
          <p>Regresar</p>
        </a>
      </Link>
      <div className={styles.container}>
        <article className={styles.article}>
          <header className={styles.header}>¿Que son los sockets?</header>
          <div className={styles.content}>
            <p>
              Socket designa un concepto abstracto por el cual dos procesos
              (posiblemente situados en computadoras distintas) pueden
              intercambiar cualquier flujo de datos, generalmente de manera
              fiable y ordenada. Además es una estructura de datos que permite
              que dos maquinas se comuniquen entre ellas.
            </p>
            <p>
              El término socket es también usado como el nombre de una interfaz
              de programación de aplicaciones (API) para la familia de
              protocolos de Internet TCP/IP, provista usualmente por el sistema
              operativo.
            </p>
            <div className={styles.image}>
              <Image
                src="/images/sockets/que-es-un-socket.png"
                alt="sockets programming"
                width="300px"
                height="400px"
                objectFit="contain"
              />
            </div>
            <p>
              Los sockets de Internet constituyen el mecanismo para la entrega
              de paquetes de datos provenientes de la tarjeta de red a los
              procesos o hilos apropiados. Un socket queda definido por un par
              de direcciones IP local y remota, un protocolo de transporte y un
              par de números de puerto local y remoto.
            </p>
            <h3>Origenes</h3>
            <p>
              En los orígenes de Internet, las primeras computadoras en
              implementar sus protocolos fueron las de la Universidad de
              Berkeley. Dicha implementación tuvo lugar en una variante del
              sistema operativo Unix conocida como BSD Unix. Pronto se hizo
              evidente que los programadores necesitarían un medio sencillo y
              eficaz para escribir programas capaces de intercomunicarse entre
              sí. Esta necesidad dio origen a la primera especificación e
              implementación de sockets, también en Unix. Hoy día, los sockets
              están implementados como bibliotecas de programación para multitud
              de sistemas operativos, simplificando la tarea de los
              programadores.
            </p>
            <br />
            <br />
            <a href="https://es.wikipedia.org/wiki/Socket_de_Internet">
              <small>Fuente: <ins>https://es.wikipedia.org/wiki/Socket_de_Internet</ins></small>
            </a>
          </div>
        </article>
      </div>
    </>
  );
}
