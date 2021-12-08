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
          <header className={styles.header}>HTTPS secure</header>
          <div className={styles.content}>
            <p>
              El Protocolo seguro de transferencia de hipertexto (en inglés,
              Hypertext Transfer Protocol Secure o HTTPS) es un protocolo de
              aplicación basado en el protocolo HTTP, destinado a la
              transferencia segura de datos de hipertexto, es decir, es la
              versión segura de HTTP.
            </p>
            <h3>Caracteristicas </h3>
            <p>
              Usa TLS para crear un canal cifrado (cuyo nivel de cifrado depende
              del servidor remoto y del navegador utilizado por el cliente) más
              apropiado para el tráfico de información sensible que el protocolo
              HTTP. De este modo se consigue que la información sensible
              (usuario y claves de paso normalmente) no pueda ser usada por un
              atacante que haya conseguido interceptar la transferencia de datos
              de la conexión, ya que lo único que obtendrá será un flujo de
              datos cifrados que le resultará imposible de descifrar. El puerto
              estándar para este protocolo es el 443. (También comúnmente usado
              el 4433)
            </p>
            <div className={styles.image}>
              <Image
                src="/images/security/web/https.webp"
                alt="sockets programming"
                width="600px"
                height="300px"
                objectFit="contain"
              />
            </div>
            <h3>Diferencia con HTTP</h3>
            <p>
              En el protocolo HTTP las URLs comienzan con &quot;http://&quot; y utilizan
              por omisión el puerto 80, las URLs de HTTPS comienzan con
              &quot;https://&quot; y utilizan el puerto 443 por omisión. HTTP es inseguro
              y está sujeto a ataques man-in-the-middle y eavesdropping que
              pueden permitir al atacante obtener acceso a bancos y a cuentas de
              un sitio web e información confidencial. HTTPS está diseñado para
              resistir esos ataques y ser más seguro.
            </p>
            <div className={styles.image}>
              <Image
                src="/images/security/web/http-https.jpg"
                alt="sockets programming"
                width="600px"
                height="300px"
                objectFit="contain"
              />
            </div>
            <h3>Capas de red </h3>
            <p>
              El sistema de HTTPS opera en la capa más alta del modelo OSI, la
              capa de aplicación; pero el protocolo sin seguridad opera en una
              subcapa más baja, cifrando un mensaje HTTP previo a la transmisión
              y descifrando un mensaje una vez recibido. Estrictamente hablando,
              HTTPS no es un protocolo separado, pero refiere el uso del HTTP
              ordinario sobre una Capa de Conexión Segura cifrada Secure Sockets
              Layer (SSL) o una conexión con Seguridad de la Capa de Transporte
              (TLS).
            </p>
            <iframe
              width="560"
              height="315"
              src="https://www.youtube.com/embed/AqWEjTECQqM"
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
            <br />
            <br />
            <a href="https://es.wikipedia.org/wiki/Protocolo_seguro_de_transferencia_de_hipertexto#Capas_de_red">
              <small>
                Fuente:{" "}
                <ins>
                  https://es.wikipedia.org/wiki/Protocolo_seguro_de_transferencia_de_hipertexto#Capas_de_red
                </ins>
              </small>
            </a>
          </div>
        </article>
      </div>
    </>
  );
}
