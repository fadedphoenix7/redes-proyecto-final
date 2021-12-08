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
          <header className={styles.header}>Tecnologias compatibles</header>
          <div className={styles.content}>
            <p>
              Mediante la informática de bajo coste, la nube, big data,
              analítica y tecnologías móviles, las cosas físicas pueden
              compartir y recopilar datos con una mínima intervención humana. En
              este mundo hiperconectado, los sistemas digitales pueden grabar,
              supervisar y ajustar cada interacción entre las cosas conectadas.
              El mundo físico y el mundo digital van de la mano y cooperan entre
              sí.
            </p>
            <p>
              Si bien la idea de IoT existe desde hace mucho tiempo, una
              colección de avances recientes en una serie de tecnologías
              diferentes la ha hecho práctica.
            </p>
            <div className={styles.image}>
              <Image
                src="/images/iot/compatibles.jpg"
                alt="sockets programming"
                width="500px"
                height="400px"
                objectFit="contain"
              />
            </div>
            <h3>¿Qué tecnologías han hecho posible IoT?</h3>
            <li>
              Acceda a la tecnología de sensores de bajo coste y baja potencia.
              Los sensores asequibles y fiables están haciendo posible la
              tecnología IoT para más fabricantes.
            </li>
            <li>
              Conectividad Una gran cantidad de protocolos de red para Internet
              ha facilitado la conexión de sensores a la nube y a otras “cosas”
              para lograr una transferencia de datos eficiente
            </li>
            <li>
              Plataformas de informáticas en la nube. El aumento en la
              disponibilidad de plataformas en la nube permite a las empresas y
              a los consumidores acceder a la infraestructura que necesitan para
              escalar sin tener que administrarlo todo.
            </li>
            <li>
              Machine learning y analítica. Con los avances en machine learning
              y analítica, junto con el acceso a cantidades grandes y variadas
              de datos almacenados en la nube, las empresas pueden recopilar
              información más rápida y fácilmente. Por un lado, el surgimiento
              de estas tecnologías aliadas sigue traspasando los límites de IoT;
              por otro, los datos producidos por IoT también alimentan estas
              tecnologías.
            </li>
            <li>
              Inteligencia artificial (IA) conversacional. Los avances en las
              redes neuronales han llevado el procesamiento del lenguaje natural
              (PLN) a los dispositivos IoT (como los asistentes personales
              digitales Alexa, Cortana y Siri) y los han hecho atractivos,
              asequibles y viables para uso doméstico.
            </li>
            <h3>Industrias que usan IOT </h3>
            <h5>Fabricación</h5>
            <p>
              Los fabricantes pueden disfrutar de una ventaja competitiva
              mediante el uso de la supervisión de la línea de producción a fin
              de realizar el mantenimiento proactivo de los equipos cuando los
              sensores detectan una falla inminente. Los sensores pueden medir
              realmente cuándo se ve comprometida la producción. Con la ayuda de
              alertas de sensores, los fabricantes pueden verificar rápidamente
              la precisión del equipo o eliminarlo de la producción hasta que se
              repare. Esto permite a las empresas reducir los costes operativos,
              obtener mayor tiempo de actividad y mejorar la gestión del
              rendimiento de los activos.
            </p>
            <h5>Transporte y logística</h5>
            <p>
              Los sistemas de transporte y logística se benefician de una
              variedad de aplicaciones de IoT. Las flotas de automóviles,
              camiones, barcos y trenes que llevan mercancía se pueden redirigir
              según las condiciones climáticas, la disponibilidad del vehículo o
              la disponibilidad del conductor, gracias a los datos del sensor
              IoT. La propia mercancía también podría estar equipada con
              sensores para el seguimiento y localización, así como el control
              de la temperatura. Las industrias de alimentos y bebidas, flores y
              productos farmacéuticos suelen llevar mercancía sensible a la
              temperatura que se beneficiaría enormemente de las aplicaciones de
              supervisión de IoT que envían alertas cuando las temperaturas
              suben o bajan a un nivel peligroso para el producto.
            </p>
            <h5>Comercio minorista</h5>
            <p>
              Las aplicaciones de IoT permiten a las empresas minoristas
              administrar el inventario, mejorar la experiencia del cliente,
              optimizar la cadena de suministro y reducir los costes operativos.
              Por ejemplo, los estantes inteligentes equipados con sensores de
              peso pueden recopilar información basada en RFID y enviar los
              datos a la plataforma IoT para supervisar automáticamente el
              inventario y activar alertas si los artículos se están agotando.
              Beacons puede enviar ofertas y promociones específicas a los
              clientes para proporcionar una experiencia atractiva.
            </p>
            <h5>Sector público</h5>
            <p>
              Las ventajas de IoT en el sector público y otros entornos
              relacionados con los servicios son igualmente amplios. Por
              ejemplo, las empresas de servicios públicos pueden usar
              aplicaciones basadas en IoT para notificar a sus usuarios sobre
              interrupciones masivas e incluso sobre interrupciones menores de
              los servicios de agua, electricidad o alcantarillado. Las
              aplicaciones de IoT pueden recopilar datos sobre el alcance de una
              interrupción e implementar recursos para ayudar a las empresas de
              servicios públicos a recuperarse de las interrupciones con mayor
              velocidad.
            </p>
            <h5>Atención sanitaria</h5>
            <p>
              La supervisión de activos IoT brinda múltiples ventajas a la
              industria de la salud. Los médicos, enfermeros y camilleros a
              menudo necesitan saber la ubicación exacta de los activos de
              asistencia al paciente, como las sillas de ruedas. Cuando las
              sillas de ruedas de un hospital están equipadas con sensores de
              IoT, pueden rastrearse desde la aplicación de supervisión de
              activos de IoT para que cualquiera que busque una pueda encontrar
              rápidamente la silla de ruedas disponible más cercana. De este
              modo, muchos activos hospitalarios pueden rastrearse para
              garantizar el uso adecuado, así como la contabilidad financiera de
              los activos físicos en cada departamento.
            </p>
            <br />
            <br />
            <a href="https://www.oracle.com/mx/internet-of-things/what-is-iot/">
              <small>
                Fuente:{" "}
                <ins>https://www.oracle.com/mx/internet-of-things/what-is-iot/</ins>
              </small>
            </a>
          </div>
        </article>
      </div>
    </>
  );
}
