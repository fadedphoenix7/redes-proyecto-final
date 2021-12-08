import Image from "next/image";
import styles from "../../styles/article.module.css";
import Link from "next/link";
import RelatedCard from "../../components/relatedCard/relatedCard";

export default function IOT() {
  return (
    <>
      <div className={styles.container}>
        <article className={styles.article}>
          <header className={styles.header}> Internet de las cosas</header>
          <div className={styles.content}>
            <div className={styles.image}>
              <Image
                src="/images/iot/iot.jpg"
                alt="sockets programming"
                width="600px"
                height="300px"
                objectFit="contain"
              />
            </div>
            <br />
            <p>
              El Internet de las cosas (IoT) es el proceso que permite conectar
              elementos físicos cotidianos al Internet: desde objetos domésticos
              comunes, como las bombillas de luz, hasta recursos para la
              atención de la salud, como los dispositivos médicos; también
              abarca prendas y accesorios personales inteligentes e incluso los
              sistemas de las ciudades inteligentes.
            </p>
            <p>
              En este proceso de comunicación es dónde IoT está evolucionando ya
              que uno de los escollos a salvar es el tipo de protocolo con el
              que se comunican dichos dispositivos (es decir, &quot;el idioma&quot; que
              hablan entre ellos). Actualmente, existen dispositivos o sensores
              muy nuevos cuya comunicación y conexión a internet es fácil y
              directa, pero también existen muchos otros dispositivos más
              antiguos no estándar cuyo protocolo de comunicación y conexión no
              es trivial, es ahí dónde viene uno de estos escollos a salvar.
              Adicionalmente, cada fabricante o &quot;vendor&quot; tiene sus propios
              protocolos de comunicación que hace que no todos los dispositivos
              sean compatibles.
            </p>
            <div className="">
              <h3>Mas informacion</h3>
              <Link href="/internetdelascosas/que-es-iot">
                <a>
                  <RelatedCard q="what_is_iot" />
                </a>
              </Link>
              <Link href="/internetdelascosas/tecnologias">
                <a>
                  <RelatedCard q="tech_iot" />
                </a>
              </Link>
              <Link href="/internetdelascosas/futuro">
                <a>
                  <RelatedCard q="future_iot" />
                </a>
              </Link>
            </div>
          </div>
        </article>
      </div>
    </>
  );
}
