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
          <header className={styles.header}>¿Que es la seguridad web?</header>
          <div className={styles.content}>
            <p>
              es un sistema de medidas de protección y protocolos que pueden
              proteger su sitio web o aplicación web para que no sea pirateado o
              ingresado por personal no autorizado. Esta división integral de
              seguridad de la información es vital para la protección de sitios
              web, aplicaciones web y servicios web. Todo lo que se aplique a
              través de Internet debe tener algún tipo de seguridad web para
              protegerlo.
            </p>
            <p>
              Hay muchos factores que intervienen en la seguridad web y la
              protección web. Cualquier sitio web o aplicación que sea seguro
              está seguramente respaldado por diferentes tipos de puntos de
              control y técnicas para mantenerlo seguro.
            </p>
            <p>
              Hay una variedad de estándares de seguridad que deben seguirse en
              todo momento, y estos estándares están implementados y resaltados
              por OWASP. La mayoría de los desarrolladores web con experiencia
              seguirán los estándares de OWASP y también vigilarán la base de
              datos de incidentes de piratería en la web para ver cuándo, cómo y
              por qué diferentes personas están pirateando diferentes sitios web
              y servicios.
            </p>
            <div className={styles.image}>
              <Image
                src="/images/security/web/seguridad-2.webp"
                alt="sockets programming"
                width="600px"
                height="300px"
                objectFit="contain"
              />
            </div>
            <h3>Tecnologia disponible</h3>
            <p>
              Existen diferentes tipos de tecnologías disponibles para mantener
              los mejores estándares de seguridad. Algunas soluciones técnicas
              populares para probar, construir y prevenir amenazas incluyen:
            </p>
            <ul>
              <li>Herramientas de prueba de caja negra</li>
              <li>Herramientas de fuzzing</li>
              <li>Herramientas de prueba de caja blanca</li>
              <li>Cortafuegos de aplicaciones web (WAF)</li>
              <li>Escáneres de seguridad o vulnerabilidad</li>
              <li>Herramientas de craqueo de contraseña</li>
              <li>Probabilidad de amenaza</li>
            </ul>
            <div className={styles.image}>
              <Image
                src="/images/security/web/Seguridad-t.png"
                alt="sockets programming"
                width="600px"
                height="300px"
                objectFit="contain"
              />
            </div>
            <br />
            <br />
            <a href="https://blog.hostdime.com.co/que-es-la-seguridad-web-definicion-significado-concepto/">
              <small>
                Fuente:{" "}
                <ins>https://blog.hostdime.com.co/que-es-la-seguridad-web-definicion-significado-concepto/</ins>
              </small>
            </a>
          </div>
        </article>
      </div>
    </>
  );
}
