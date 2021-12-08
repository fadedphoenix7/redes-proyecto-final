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
          <header className={styles.header}>Seguridad en la red</header>
          <div className={styles.content}>
            <p>
              La seguridad de redes empieza con la autenticación, usualmente con
              un nombre de usuario y una contraseña. Ya que esto requiere
              solamente autenticar un nombre de usuario, por ejemplo, con la
              contraseña, se utiliza el término autenticación de un factor. Con
              un doble factor de autenticación se utiliza algo que el usuario
              &quot;tiene&quot;, por ejemplo, un token de seguridad, una tarjeta de
              crédito o un teléfono celular; y con un factor triple de
              autenticación se usa algo que el usuario &quot;es&quot;, por ejemplo huella
              dactilar o reconocimiento de iris.
            </p>
            <p>
              Una vez autenticado, un cortafuegos aplica políticas de acceso,
              por ejemplo, asignar los servicios a los cuales pueden acceder los
              usuarios de la red.1​ Aunque esta medida es efectiva para prevenir
              acceso no autorizado, este componente puede fallar al revisar
              contenido que puede ser dañino, un ejemplo sería un gusano
              informático o un troyano que esté siendo transmitido en la red. Un
              antivirus o un Sistema de prevención de intrusos (SPI)2​ ayuda a
              detectar e inhibir la acción de un malware. Un sistema de
              prevención de intrusos, basado en anomalías, también puede
              monitorear la red, por ejemplo usando wireshark se puede analizar
              tráfico en la red con propósitos de auditoría o para un análisis
              de alto nivel.
            </p>
            <div className={styles.image}>
              <Image
                src="/images/security/red/seguridad-red.jpg"
                alt="sockets programming"
                width="500px"
                height="300px"
                objectFit="contain"
              />
            </div>
            <p>
              La comunicación entre dos hosts en una red puede ser encriptada
              para asegurar la privacidad.F
            </p>
            <p>
              La seguridad de una arquitectura de red, hoy en día debe diseñarse
              bajo un concepto de capas dándole profundidad a la defensa y, tal
              cual lo propone Alejandro Corletti Estrada en su libro Seguridad
              en Redes5​ también deben considerarse diferentes planos o alturas
              de la red. Estos conceptos se pueden ver reflejados en la
              siguiente imagen.
            </p>
            <h3>Tipos de ataques</h3>
            <p>
              Las redes están sujetas a ataques de fuentes maliciosas. Los
              ataques pueden ser de dos categorías: &quot;pasivos&quot; cuando un intruso
              intercepta datos que viajan a través de la red, y &quot;activos&quot; cuando
              un intruso inicia comandos para interrumpir el funcionamiento
              normal de la red o para realizar reconocimiento y &quot;espionaje&quot; para
              encontrar y obtener acceso a activos disponibles a través de la
              red.
            </p>
            <ul>
              <li>Pasivos</li>
              <ul>
                <li>Escucha telefonica</li>
                <li>Escaner de puertos</li>
                <li>Escaneo libre</li>
              </ul>
              <li>Activos</li>
              <ul>
                <li>Ataque de denegacion de servicio</li>
                <li>DNS spoofing</li>
                <li>Ataque Man-in-the-middle</li>
                <li>Ataque smurf</li>
                <li>Desbordamiento de buffer</li>
                <li>Desbordamiento de monticulo</li>
                <li>Inyeccion SQL</li>
                <li>Phishing</li>
                <li>Cross-site scripting</li>
                <li>CSRF</li>
              </ul>
            </ul>
            <div className={styles.image}>
              <Image
                src="/images/security/red/tipos-ataque.jpg"
                alt="sockets programming"
                width="500px"
                height="400px"
                objectFit="contain"
              />
            </div>
            <br />
            <br />
            <a href="https://es.wikipedia.org/wiki/Seguridad_de_redes">
              <small>
                Fuente:{" "}
                <ins>https://es.wikipedia.org/wiki/Seguridad_de_redes</ins>
              </small>
            </a>
          </div>
        </article>
      </div>
    </>
  );
}
