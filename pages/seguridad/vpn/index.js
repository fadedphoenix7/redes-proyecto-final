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
          <header className={styles.header}>¿Que es una vpn?</header>
          <div className={styles.content}>
            <p>
              VPN significa &quot;Virtual Private Network&quot; (Red privada virtual) y
              describe la oportunidad de establecer una conexión protegida al
              utilizar redes públicas. Las VPN cifran su tráfico en internet y
              disfrazan su identidad en línea. Esto le dificulta a terceros el
              seguimiento de sus actividades en línea y el robo de datos. El
              cifrado se hace en tiempo real.
            </p>
            <div className={styles.image}>
              <Image
                src="/images/security/red/vpn.webp"
                alt="sockets programming"
                width="600px"
                height="300px"
                objectFit="contain"
              />
            </div>
            <h3>Como funciona</h3>
            <p>
              Una VPN oculta su verdadera dirección IP al permitirle a la red
              redireccionarla por un servidor remoto especial, alojado por el
              proveedor de una VPN. Esto significa que si navega en línea con
              una VPN, el servidor de la VPN se convierte en la fuente de sus
              datos. Esto significa que su Proveedor de servicios de internet
              (ISP) y otros terceros no pueden ver los sitios web que visita o
              qué datos envía y recibe en línea. Una VPN funciona como un filtro
              que convierte a todos sus datos en texto incomprensible. Si
              alguien lograra interceptar su información, de nada le sirve.
            </p>

            <h3>Beneficios</h3>
            <p>
              Una conexión VPN disfraza sus datos en línea y los protege del
              acceso externo. Cualquiera que tenga acceso a la red y quiera
              hacerlo puede ver los datos no cifrados. Con una VPN, los hackers
              y los cibercriminales no pueden descifrar estos datos.
            </p>
            <p>
              <strong>Cifrado seguro:</strong> Para leer los datos, necesita una
              clave de cifrado . Sin ella, le llevaría millones de años a una
              computadora descifrar el código en caso de un ataque de fuerza
              bruta. Con la ayuda de una VPN, sus actividades en línea se
              ocultan incluso en redes públicas.
            </p>
            <p>
              <strong>Disfrazar su paradero:</strong> los servidores de VPN
              principalmente actúan como sus servidores proxy en internet.
              Debido a que los datos de ubicación demográficos provienen de un
              servidor en otro país, su ubicación real no se puede determinar. A
              esto se suma que, en la mayoría de los casos, los proveedores de
              estos servicios no guardan registros sobre sus actividades. Por
              otra parte, algunos proveedores registran su comportamiento, pero
              no transmiten esa información a terceros. Esto significa que
              cualquier registro potencial de su comportamiento de usuario
              permanece oculto de manera permanente.
            </p>
            <p>
              <strong>Acceso a contenido regional:</strong> el contenido web
              regional no siempre es accesible desde cualquier parte. Los
              servicios y los sitios web a menudo contienen contenido que solo
              puede accederse desde ciertas partes del mundo. Las conexiones
              estándar utilizan servidores locales en el país para determinar su
              ubicación. Esto significa que no puede acceder al contenido en
              casa mientras viaja, y no puede acceder a contenido internacional
              desde casa. Con la suplantación de ubiación de VPN, puede cambiar
              a un servidor a otro país y “cambiar” su ubicación de manera
              eficaz.
            </p>
            <p>
              <strong>Transferencia segura de datos:</strong> si trabaja de
              forma remota, puede necesitar acceder a archivos importantes en la
              red de su empresa. Por razones de seguridad, este tipo de
              información requiere una conexión segura. Para obtener acceso a la
              red, a menudo se requiere una conexión VPN. Los servicios de VPN
              establecen conexiones con servidores privados y utilizan métodos
              de cifrado para reducir el riesgo de filtración de datos.
            </p>
            <div className={styles.image}>
              <Image
                src="/images/security/red/vpn-v.jpg"
                alt="sockets programming"
                width="400px"
                height="400px"
                objectFit="contain"
              />
            </div>
            <br />
            <iframe
              width="560"
              height="315"
              src="https://www.youtube.com/embed/ELmm-Sn9EiM"
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
            <br />
            <a href="https://latam.kaspersky.com/resource-center/definitions/what-is-a-vpn">
              <small>
                Fuente:{" "}
                <ins>
                  https://latam.kaspersky.com/resource-center/definitions/what-is-a-vpn
                </ins>
              </small>
            </a>
          </div>
        </article>
      </div>
    </>
  );
}
