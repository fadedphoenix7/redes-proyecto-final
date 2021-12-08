import Image from "next/image";
import styles from "../../styles/article.module.css";
import Link from "next/link";
import RelatedCard from "../../components/relatedCard/relatedCard";

export default function Seguridad() {
  return (
    <>
      <div className={styles.container}>
        <article className={styles.article}>
          <header className={styles.header}>
            {" "}
            Seguridad en la comunicacion de datos en una red
          </header>
          <div className={styles.content}>
            <div className={styles.image}>
              <Image
                src="/images/security/red/seguridad.png"
                alt="sockets programming"
                width="500px"
                height="300px"
                objectFit="contain"
              />
            </div>
            <br />
            <p>
              La seguridad de redes consiste en las políticas y prácticas
              adoptadas para prevenir y supervisar el acceso no autorizado, el
              uso indebido, la modificación o la denegación de una red
              informática y sus recursos accesibles. La seguridad de redes
              involucra la autorización del acceso a datos en la red, que es
              controlada por el administrador de red. Los usuarios eligen o se
              les asigna una identificación y contraseña u otra información de
              autenticación que les permite acceder a información y programas
              dentro de sus autorizaciones.
            </p>
            <p>
              La seguridad de red cubre una variedad de redes de computadoras,
              tanto públicas como privadas, que se usan en trabajos cotidianos;
              realizar transacciones y comunicaciones entre empresas, agencias
              gubernamentales e individuos. Las redes pueden ser privadas, como
              dentro de una empresa, y otras que pueden estar abiertas al
              público.
            </p>
            <p>
              La seguridad de la redes está presente en organizaciones, empresas
              y otros tipos de instituciones. Hace como su nombre indica:
              protege la red, además de proteger y supervisar las operaciones
              que se realizan. La forma más común y simple de proteger un
              recurso de red es asignándole un nombre único y la contraseña
              correspondiente.
            </p>
            <div className="">
              <h3>Mas informacion</h3>
              <Link href="/seguridad/redes">
                <a>
                  <RelatedCard q="concept_sr" />
                </a>
              </Link>
              <Link href="/seguridad/ipsec">
                <a>
                  <RelatedCard q="ipsec_sr" />
                </a>
              </Link>
              <Link href="/seguridad/vpn">
                <a>
                  <RelatedCard q="vpn_sr" />
                </a>
              </Link>
            </div>
          </div>
        </article>
        <article className={styles.article}>
          <header className={styles.header}> Seguridad en la web</header>
          <div className={styles.content}>
            <div className={styles.image}>
              <Image
                src="/images/security/web/seguridad.jpg"
                alt="sockets programming"
                width="600px"
                height="300px"
                objectFit="contain"
              />
            </div>
            <br />
            <p>
              Ha lanzado su sitio web y ha hecho todo lo posible para garantizar
              su éxito, pero es posible que haya pasado por alto un componente
              crítico: la seguridad del sitio web. Los ataques cibernéticos
              causan una limpieza costosa , dañan su reputación y desalientan a
              los visitantes a regresar . Afortunadamente, puede evitarlo con
              una seguridad efectiva del sitio web. Discutiremos los conceptos
              básicos de la seguridad del sitio web y las soluciones que
              ayudarán a garantizar que su sitio web no sea eliminado por un
              ataque cibernético.
            </p>
            <p>
              La seguridad del sitio web es cualquier acción o aplicación tomada
              para garantizar que los datos del sitio web no estén expuestos a
              los ciberdelincuentes o para evitar la explotación de los sitios
              web de cualquier manera.
            </p>
            <p>
              La seguridad web, también conocida como «seguridad cibernética»,
              implica proteger el sitio web o la aplicación web al detectar,
              prevenir y responder a los ataques. Los sitios web y las
              aplicaciones web son tan propensos a las infracciones de seguridad
              como los hogares físicos, las tiendas y las ubicaciones
              gubernamentales. Desafortunadamente, los delitos cibernéticos
              ocurren todos los días, y se necesitan grandes medidas de
              seguridad web para proteger los sitios web y las aplicaciones web
              para que no se vean comprometidos.
            </p>
            <div className="">
              <h3>Mas informacion</h3>
              <Link href="/seguridad/web">
                <a>
                  <RelatedCard q="what_is_sw" />
                </a>
              </Link>
              <Link href="/seguridad/https">
                <a>
                  <RelatedCard q="http_sw" />
                </a>
              </Link>
              <Link href="/seguridad/ssl">
                <a>
                  <RelatedCard q="ssl_sw" />
                </a>
              </Link>
            </div>
          </div>
        </article>
      </div>
    </>
  );
}
