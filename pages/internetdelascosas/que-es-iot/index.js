import Image from "next/image";
import styles from "../../../styles/article.module.css";
import Link from "next/link";

export default function what_is() {
  return (
    <>
      <Link href="/internetdelascosas">
        <a className={styles.back}>
          <p>Regresar</p>
        </a>
      </Link>
      <div className={styles.container}>
        <article className={styles.article}>
          <header className={styles.header}>
            ¿Qué es el Internet de las cosas (IoT)?
          </header>
          <div className={styles.content}>
            <p>
              El Internet de las cosas (IoT) es el proceso que permite conectar
              elementos físicos cotidianos al Internet: desde objetos domésticos
              comunes, como las bombillas de luz, hasta recursos para la
              atención de la salud, como los dispositivos médicos; también
              abarca prendas y accesorios personales inteligentes e incluso los
              sistemas de las ciudades inteligentes.
            </p>
            <p>
              El término IoT hace referencia a todos los sistemas de
              dispositivos físicos que reciben y transfieren datos a través de
              redes inalámbricas con intervención humana mínima, lo cual es
              posible gracias a la integración de dispositivos informáticos en
              todo tipo de objetos.
            </p>
            <p>
              Por ejemplo, un termostato inteligente (es decir, que utiliza el
              IoT) recibe datos de la ubicación de su automóvil inteligente
              mientras conduce para ajustar la temperatura de su casa antes de
              que llegue. Todo esto se logra sin su intervención e incluso
              ofrece un mejor resultado que si lo hiciera de forma manual.
            </p>
            <div className={styles.image}>
              <Image
                src="/images/iot/iot-2.jpg"
                alt="sockets programming"
                width="600px"
                height="400px"
                objectFit="contain"
              />
            </div>
            <p>
              Un sistema de IoT tradicional, como el hogar inteligente descrito
              anteriormente, funciona enviando, recibiendo y analizando datos de
              forma permanente en un ciclo de retroalimentación. Según el tipo
              de tecnología de IoT, las personas o los sistemas de inteligencia
              artificial y aprendizaje automático (IA/ML) pueden analizar estos
              datos casi de inmediato o durante un cierto tiempo.
            </p>
            <h3>IoT empresarial</h3>
            <p>
              Por lo general, el IoT capta la atención de los consumidores,
              cuyas experiencias con tecnologías como los relojes inteligentes
              se ven afectadas por las preocupaciones en torno a la seguridad y
              la privacidad que supone el hecho de estar conectados de forma
              permanente. Esta perspectiva se aplica a todos los tipos de
              proyectos de IoT empresarial, especialmente cuando el usuario
              final es el público en general.
            </p>
            <p>
              Además, la seguridad es un aspecto muy importante a la hora de
              diseñar sistemas de IoT. Aun así, muchas empresas consideran que
              implementar esta tecnología vale la pena; por eso, es posible
              encontrar casos prácticos exitosos en casi todos los sectores.
            </p>
            <h3>Ejemplos</h3>
            <h5>IoT industrial (IIoT)</h5>
            <p>
              Imagínese el ciclo de vida de la maquinaria pesada que se utiliza
              en las obras en construcción. Con el tiempo, es posible que los
              especialistas que manejan los equipos los sometan a distintos
              tipos de esfuerzos, así que es de esperarse que haya averías
              durante las operaciones. Para abordar este problema, se pueden
              agregar sensores especializados a las partes de la maquinaria que
              son más propensas a sufrir daños o a utilizarse excesivamente.
              Estos se pueden emplear para realizar un mantenimiento predictivo,
              para mejorar el desempeño del personal (lo que representa un buen
              ejemplo de la recopilación y el análisis inmediatos de los datos)
              y para brindar información a los ingenieros que diseñaron el
              equipo sobre cómo mejorar los modelos nuevos (lo cual es un
              ejemplo del análisis a largo plazo).El IoT industrial (IIoT)
              abarca este tipo de casos prácticos en las actividades de las
              fábricas, las empresas de energía y otros sectores.
            </p>
            <div className={styles.image}>
              <Image
                src="/images/iot/industry.jpg"
                alt="sockets programming"
                width="600px"
                height="300px"
                objectFit="contain"
              />
            </div>
            <h5>IoT en la logística y el transporte</h5>
            <p>
              Una de las primeras implementaciones del IoT en el sector de la
              logística y el transporte consistió en etiquetar los contenedores
              de transporte con dispositivos de identificación por
              radiofrecuencia (RFID). Estas etiquetas almacenan datos que se
              pueden captar por medio de ondas de radio, lo cual permite que las
              empresas de logística realicen un seguimiento de los movimientos
              de los contenedores en ciertos puestos de control con RFID, como
              en el caso de los depósitos o las terminales de carga portuarias.
              Gracias a los avances en el IoT, se han desarrollado dispositivos
              de seguimiento con baterías que transfieren datos permanentemente
              a las aplicaciones de IoT sin la necesidad de tener lectores en
              las instalaciones, lo cual posibilita que las empresas analicen la
              información de los envíos de forma instantánea en cada tramo de la
              cadena de suministro.
            </p>
            <div className={styles.image}>
              <Image
                src="/images/iot/iot-transport.jpg"
                alt="sockets programming"
                width="600px"
                height="400px"
                objectFit="contain"
              />
            </div>
            <h5>IoT en la agricultura</h5>
            <p>
              El IoT ha revolucionado el sector agrícola de varias formas, como
              es el caso del uso de sensores de humedad. Cuando los instalan en
              los campos, los agricultores obtienen datos más precisos para
              programar los períodos de riego. Además, pueden conectarlos a las
              aplicaciones de IoT que controlan la maquinaria de riego, la cual
              se activa automáticamente en función de los datos que generan los
              sensores.
            </p>
            <div className={styles.image}>
              <Image
                src="/images/iot/iot-agri.png"
                alt="sockets programming"
                width="600px"
                height="400px"
                objectFit="contain"
              />
            </div>
            <br />
            <iframe
              width="560"
              height="315"
              src="https://www.youtube.com/embed/fWrY571yHYI"
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
            <br />
            <a href="https://www.redhat.com/es/topics/internet-of-things/what-is-iot">
              <small>
                Fuente:{" "}
                <ins>
                  https://www.redhat.com/es/topics/internet-of-things/what-is-iot
                </ins>
              </small>
            </a>
          </div>
        </article>
      </div>
    </>
  );
}
