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
          <header className={styles.header}>Ejemplos de innovacion</header>
          <div className={styles.content}>
            <p>
              Para entender más sobre qué es Internet de las cosas te brindamos
              ejemplos innovadores de su uso en la actualidad.
            </p>
            <div className={styles.image}>
              <Image
                src="/images/iot/innovation.jpg"
                alt="sockets programming"
                width="600px"
                height="300px"
                objectFit="contain"
              />
            </div>
            <h4>Zapatillas Inteligentes</h4>
            <p>
              La Gemini 2 es capaz de medir la distancia y el tiempo recorrido
              así como las calorías consumidas, sincronizando con su app vía
              bluetooth, donde se puede almacenar toda la actividad del usuario
              y solo después de finalizada la rutina, podrá descargar todos los
              datos al dispositivo móvil.
            </p>
            <div className={styles.image}>
              <Image
                src="/images/iot/gemini-2.jpg"
                alt="sockets programming"
                width="600px"
                height="300px"
                objectFit="contain"
              />
            </div>
            <h4>Sensores para el jardín</h4>
            <p>
              La compañía Parrot ofrece el sensor Flower Power, destinado a
              jardines, que registra datos sobre la luz solar, la temperatura,
              el nivel de fertilizante en el suelo y la humedad. De esta manera,
              el sensor analiza lo que necesitan las plantas y envía alertas a
              través de bluetooth al smartphone del usuario.
            </p>
            <div className={styles.image}>
              <Image
                src="/images/iot/sensor-parot.jpg"
                alt="sockets programming"
                width="600px"
                height="300px"
                objectFit="contain"
              />
            </div>
            <h4>Puertas de Garajes Inteligentes</h4>
            <p>
              Otro ejemplo de Internet de la cosas es Garageio, un dispositivo
              que puede controlar el acceso al garaje mediante una aplicación.
              Desde el celular puedes abrir y cerrar las puertas, así como
              recibir alertas cuando esta se abra. Incluso puedes permitir el
              ingreso a otras personas desde cualquier parte con un solo clic.
            </p>
            <div className={styles.image}>
              <Image
                src="/images/iot/gerajeio.jpg"
                alt="sockets programming"
                width="600px"
                height="300px"
                objectFit="contain"
              />
            </div>
            <h4>Wearables para perros</h4>
            <p>
              Con el dispositivo Fitbark, las mascotas también estarán
              conectadas. Este se coloca en el collar del perro para monitorear
              su actividad, calidad de sueño y ofrece detalles sobre su
              comportamiento. También detecta signos de enfermedad y controla
              una variedad de problemas médicos
            </p>
            <div className={styles.image}>
              <Image
                src="/images/iot/fitbark.jpg"
                alt="sockets programming"
                width="600px"
                height="300px"
                objectFit="contain"
              />
            </div>
            <h4>Botones Inteligentes</h4>
            <p>
              Amazon llegó a un acuerdo con un fabricante de detergente que
              permite tener un botón, que es smart, acoplado a la lavadora. De
              esta manera, cuando falte el producto, tú puedes comprarlo solo
              con pulsar el botón. Amazon recibe la orden de compra y la envía
              directamente a tu domicilio.
            </p>
            <div className={styles.image}>
              <Image
                src="/images/iot/amazon.jpg"
                alt="sockets programming"
                width="600px"
                height="300px"
                objectFit="contain"
              />
            </div>
            <h4>Horno Inteligentes</h4>
            <p>
              La empresa Dacor desarrolló un horno llamado Discovery IQ que
              tiene WI-FI y puede ser controlado vía smartphone o tablet.
              Reconoce muchas recetas y hacer el trabajo solo. Cuanto el plato
              está listo, envía un mensaje al usuario.
            </p>
            <div className={styles.image}>
              <Image
                src="/images/iot/discovery.jpg"
                alt="sockets programming"
                width="600px"
                height="300px"
                objectFit="contain"
              />
            </div>
            <h4>Reguladores de Luz</h4>
            <p>
              Una startup especializada en el mundo del Internet de las cosas
              llamada Plum desarrolló un regulador de luz inteligente y dos
              formas de volver los enchufes smart. A través de una app, se puede
              controlar la electricidad, conectarla o desconectarla y regular
              las luces de casa.
            </p>
            <div className={styles.image}>
              <Image
                src="/images/iot/plum.jpg"
                alt="sockets programming"
                width="600px"
                height="300px"
                objectFit="contain"
              />
            </div>
            <h4>Cubo de Basura Inteligente</h4>
            <p>
              Qube es un cubo de basura, inteligente y conectado que ayuda a
              reciclar. Tiene diferentes compartimentos en los que se coloca el
              tipo de residuo que corresponda. Cuenta con una puerta motorizada
              que se levanta al acercar la mano. Tiene conectividad WIFI, puerto
              USB y presenta informes al móvil sobre nuestro reciclaje y control
              de residuos, informando sobre los kilos que vamos generando o si
              nos quedan bolsas
            </p>
            <div className={styles.image}>
              <Image
                src="/images/iot/cubo.jpg"
                alt="sockets programming"
                width="600px"
                height="300px"
                objectFit="contain"
              />
            </div>

            <br />
            <br />
            <a href="https://www.idat.edu.pe/blog/internet-de-las-cosas-10-ejemplos-innovadores">
              <small>
                Fuente:{" "}
                <ins>https://www.idat.edu.pe/blog/internet-de-las-cosas-10-ejemplos-innovadores</ins>
              </small>
            </a>
          </div>
        </article>
      </div>
    </>
  );
}
