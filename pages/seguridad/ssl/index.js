import Image from "next/image";
import styles from "../../../styles/article.module.css";
import Link from "next/link";

export default function what_is() {
  return (
    <>
      <Link href="/seguridad">
        <a className={styles.back}>
          <p>Regresar</p>
        </a>
      </Link>
      <div className={styles.container}>
        <article className={styles.article}>
          <header className={styles.header}>¿Qué es el SSL?</header>
          <div className={styles.content}>
            <p>
              El Nivel de Conectores Seguros (Secure Sockets Layer o SSL) fue el
              protocolo de cifrado más ampliamente utilizado para garantizar la
              seguridad de las comunicaciones a través de Internet antes de ser
              sustituido por el TLS (Inglés) (Seguridad de la Capa de
              Transporte, o Transport Layer Security) en 1999. Aunque el desuso
              del protocolo SSL dio paso a la adopción del TLS, la mayoría de
              personas sigue refiriéndose a este tipo de tecnología como «SSL».
            </p>
            <p>
              EL SSL proporciona un canal seguro entre dos computadoras o
              dispositivos que operan a través de Internet o de una red interna.
              Un ejemplo frecuente es el uso de SSL para proteger las
              comunicaciones entre un navegador web y un servidor web. Este
              protocolo cambia la dirección del sitio web de HTTP a HTTPS, donde
              «S» significa «seguridad».
            </p>
            <div className={styles.image}>
              <Image
                src="/images/security/web/ssl.png"
                alt="sockets programming"
                width="600px"
                height="300px"
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
            <h3>Por que usar SSL</h3>
            <p>
              Son muchas las transacciones y comunicaciones que realizamos cada
              día a través de Internet, por lo que usar SSL es en realidad lo
              más lógico. El SSL es compatible con los siguientes principios de
              seguridad de la información: <br/>
              <li>Cifrado: protege la transmisión de
              datos (p. ej., de navegador a servidor, de servidor a servidor, de
              aplicación a aplicación, etc.). </li>
              <li>Autenticación: garantiza que el
              servidor al que se conecta es, en efecto, el servidor correcto.</li>
              <li>Integridad de los datos: garantiza que los datos solicitados o
              enviados son realmente los datos legítimos.</li>
            </p>
            <div className={styles.image}>
              <Image
                src="/images/security/web/ssl-2.png"
                alt="sockets programming"
                width="600px"
                height="300px"
                objectFit="contain"
              />
            </div>
            <br />
            <br />
            <a href="https://www.globalsign.com/es/ssl-information-center/what-is-ssl">
              <small>
                Fuente:{" "}
                <ins>https://www.globalsign.com/es/ssl-information-center/what-is-ssl</ins>
              </small>
            </a>
          </div>
        </article>
      </div>
    </>
  );
}
