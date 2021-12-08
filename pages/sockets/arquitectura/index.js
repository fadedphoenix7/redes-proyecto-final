import Image from "next/image";
import styles from "../../../styles/article.module.css";
import Link from "next/link";

export default function architecture() {
  return (
    <>
      <Link href="/sockets">
        <a className={styles.back}>
          <p>Regresar</p>
        </a>
      </Link>
      <div className={styles.container}>
        <article className={styles.article}>
          <header className={styles.header}>
            Arquitectura cliente / servidor
          </header>
          <div className={styles.content}>
            <p>
              A la hora de comunicar dos programas, existen varias posibilidades
              para establecer la conexión inicialmente. Una de ellas es la
              utilizada aquí. Uno de los programas debe estar arrancado y en
              espera de que otro quiera conectarse a él. Nunca da &quot;el
              primer paso&quot; en la conexión. Al programa que actúa de esta
              forma se le conoce como servidor. Su nombre se debe a que
              normalmente es el que tiene la información que sea disponible y la
              &quot;sirve&quot; al que se la pida. Por ejemplo, el servidor de
              páginas web tiene las páginas web y se las envía al navegador que
              se lo solcite.
            </p>
            <div className={styles.image}>
            <Image
                src="/images/sockets/architecture.jpg"
                alt="sockets programming"
                width="450px"
                height="400px"
                objectFit="contain"
              />
              </div>
            <h3>La conexion</h3>
            <ul>
              <li>Dirección IP del servidor.</li>
              <p>
                El servidor no necesita la dirección de ninguno de los dos
                ordenadores, al igual que nosotros, para recibir una llamada por
                teléfono, no necesitamos saber el número de nadie, ni siquiera
                el nuestro. El cliente sí necesita saber el número del servidor,
                al igual que nosotros para llamar a alguien necesitamos saber su
                número de teléfono.
              </p>
              <li>Servicio que queremos crear / utilizar.</li>
              <p>
                Cada servicio dentro del ordenador debe tener un número único
                que lo identifique (como la extensión de teléfono). Estos
                números son enteros normales y van de 1 a 65535. Los número
                bajos, desde 1 a 1023 están reservados para servicios habituales
                de los sistemas operativos (www, ftp, mail, ping, etc). El resto
                están a disposición del programador y sirven para cosas como
                Quake. Tanto el servidor como el cliente deben conocer el número
                del servicio al que atienden o se conectan. El servidor le
                indica al sistema operativo qué servicio quiere atender, al
                igual que en una empresa el empleado recién contratado (o
                alguien en su lugar) debe informar a la telefonista en qué
                extensión se encuentra.
              </p>
            </ul>
            <div className={styles.image}>
              <Image
                src="/images/sockets/que-es-un-socket.png"
                alt="sockets programming"
                width="300px"
                height="400px"
                objectFit="contain"
              />
            </div>
            <br />
            <br />
            <a href="http://www.chuidiang.org/clinux/sockets/sockets_simp.php#sockets">
              <small>
                Fuente:{" "}
                <ins>http://www.chuidiang.org/clinux/sockets/sockets_simp.php#sockets</ins>
              </small>
            </a>
          </div>
        </article>
      </div>
    </>
  );
}
