import Image from "next/image";
import styles from "../../styles/article.module.css";
import Link from "next/link";
import RelatedCard from "../../components/relatedCard/relatedCard";

export default function Sockets() {
  return (
    <>
      <div className={styles.container}>
        <article className={styles.article}>
          <header className={styles.header}>
            {" "}
            Programación de aplicaciones con sockets
          </header>
          <div className={styles.content}>
            <div className={styles.image}>
              <Image
                src="/images/sockets/socket.png"
                alt="sockets programming"
                width="300px"
                height="300px"
                objectFit="contain"
              />
            </div>
            <br />
            <p>
              Un socket en programación es un tunel de comunicación que ayuda a
              que 2 aplicaciones se comuniquen, los sockets son la base de
              internet y de sus protocolos como HTTP, FTP, SMTP, etc. Los
              sockets son la base de los protocolos de internet, pero también
              los podemos utilizar para sacarle provecho, es decir mediante
              sockets podemos hacer que dos aplicaciones se comuniquen entre si.
            </p>
            <p>
              Los sockets son una característica universal en cualquier lenguaje
              de programación, y ademas sin limites, una aplicación hecha en PHP
              se puede comunicar con otra hecha en JAVA y viceversa, o una
              aplicación hecha en Python se puede comunicar con una hecha C#
              .NET. Gracias a esto tenemos navegadores, clientes de correo,
              clientes FTP, etc que funcionan y se comunican con los servidores
              sin importar el sistema operativo en que funcionen o lenguaje de
              programación en que estén programados.
            </p>
            <div className="">
              <h3>Mas informacion</h3>
              <Link href="/sockets/que-son-los-sockets">
                <a>
                  <RelatedCard q="what_is_s" />
                </a>
              </Link>
              <Link href="/sockets/arquitectura">
                <a>
                  <RelatedCard q="architecture_s" />
                </a>
              </Link>
              <Link href="/sockets/how-to">
                <a>
                  <RelatedCard q="how_to_s" />
                </a>
              </Link>
            </div>
          </div>
        </article>
      </div>
    </>
  );
}
