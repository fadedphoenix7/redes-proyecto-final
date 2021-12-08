import Image from "next/image";
import styles from "../../../styles/article.module.css";
import Link from "next/link";

export default function ipsec() {
  return (
    <>
      <Link href="/seguridad">
        <a className={styles.back}>
          <p>Regresar</p>
        </a>
      </Link>
      <div className={styles.container}>
        <article className={styles.article}>
          <header className={styles.header}>¿Que es IPSec?</header>
          <div className={styles.content}>
            <p>
              IPSec (Internet Protocol Security) está compuesto por varios
              protocolos de seguridad diferentes y está diseñado para garantizar
              que los paquetes de datos enviados a través de una red IP
              permanezcan invisibles e inaccesibles para terceros. IPSec
              proporciona altos niveles de seguridad para el Protocolo de
              Internet. El cifrado se utiliza para garantizar la
              confidencialidad y para la autenticación.
            </p>
            <p>
              IPSec tiene múltiples aplicaciones en seguridad, pero ha
              encontrado más uso en el sector VPN, donde se usa junto con L2TP e
              IKEv2. Cuando se usa en modo Túnel (a diferencia del Transporte),
              puede cifrar completamente un paquete de datos para garantizar la
              total confidencialidad y seguridad. Vamos a ver qué es IPSec, cómo
              puede mejorar su privacidad y por qué es el protocolo de elección
              para muchas VPN.
            </p>
            <div className={styles.image}>
              <Image
                src="/images/security/red/ipsec.png"
                alt="sockets programming"
                width="400px"
                height="400px"
                objectFit="contain"
              />
            </div>
            <h3>Como funciona</h3>
            <p>
              La mayoría de los otros protocolos de seguridad funcionan en la
              capa de aplicación de la comunicación de red. Una ventaja
              importante de IPsec es que, debido a que opera a nivel de red en
              lugar de a nivel de aplicación, puede encriptar un paquete
              completo de IP. Lo hace con dos mecanismos:
            </p>
            <p>
              Encabezado de autenticación (AH) : coloca una firma digital en
              cada paquete, protegiendo su red y sus datos de la interferencia
              de terceros. Un AH significa que el contenido de un paquete de
              datos no puede modificarse sin detección, y también permite la
              verificación de identidad entre los dos extremos de una conexión.
            </p>
            <p>
              Carga de Seguridad Encapsulada (ESP) : mientras que el AH evita la
              manipulación de un paquete, el ESP garantiza que la información
              dentro del paquete esté encriptada y no pueda leerse. Se utilizan
              un encabezado ESP, un tráiler y un bloque de autenticación para
              cifrar la carga útil completa de un paquete.
            </p>
            <h3>Ventajas y desvetajas</h3>
            <p>
              Como todos los sistemas de seguridad, IPSec tiene sus propios
              conjuntos de ventajas y desventajas. A continuación se muestran
              algunos de ellos:
            </p>
            Ventajas:
            <ul>
              <li>
                Como IPSec opera en la capa de red, los cambios solo deben
                realizarse en el sistema operativo en lugar de las aplicaciones
                individuales.
              </li>
              <li>
                IPSec es completamente invisible en su funcionamiento, por lo
                que es la opción ideal para las VPN.
              </li>
              <li>
                El uso de AH y ESP garantiza los niveles más altos posibles de
                seguridad y privacidad.
              </li>
            </ul>
            <div className={styles.image}>
              <Image
                src="/images/security/red/ipsec-v.jpg"
                alt="sockets programming"
                width="500px"
                height="200px"
                objectFit="contain"
              />
            </div>
            Desventajas:
            <ul>
              <li>
                IPSec es más complicado que los protocolos de seguridad
                alternativos y más difícil de configurar.
              </li>
              <li>
                Se requieren claves públicas seguras para IPSec. Si su clave se
                ve comprometida o tiene una gestión deficiente de la clave,
                puede experimentar problemas.
              </li>
              <li>
                Para la transmisión de paquetes de pequeño tamaño, IPSec puede
                ser una forma ineficiente de encriptar datos.
              </li>
            </ul>
            <br />
            <br />
            <a href="https://www.cactusvpn.com/es/la-guia-para-principiantes-de-vpn/que-es-ipsec/">
              <small>
                Fuente:{" "}
                <ins>https://www.cactusvpn.com/es/la-guia-para-principiantes-de-vpn/que-es-ipsec/</ins>
              </small>
            </a>
          </div>
        </article>
      </div>
    </>
  );
}
