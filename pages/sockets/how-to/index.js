import Image from "next/image";
import styles from "../../../styles/article.module.css";
import Link from "next/link";

export default function how_to() {
  return (
    <>
      <Link href="/sockets">
        <a className={styles.back}>
          <p>Regresar</p>
        </a>
      </Link>
      <div className={styles.container}>
        <article className={styles.article}>
          <header className={styles.header}>Ejemplo con python</header>
          <div className={styles.content}>
            <div className={styles.image}>
              <Image
                src="/images/sockets/python.png"
                alt="sockets programming"
                width="200px"
                height="200px"
                objectFit="contain"
              />
            </div>
            <h3>Creando un socket</h3>
            <p>
              De manera general, cuando hiciste click en el enlace que te trajo
              a esta página tu navegador hizo algo como lo siguiente: <br />
              <div className="Code">
                <code>
                  <p className="CommentCode">
                    # create an INET, STREAMing socket
                  </p>
                  <p>s = socket.socket(socket.AF_INET, socket.SOCK_STREAM)</p>
                  <p className="CommentCode">
                    # now connect to the web server on port 80 - the normal http
                    port
                  </p>
                  <p>s.connect((&quot;www.python.org&quot;, 80))</p>
                </code>
              </div>
              Cuando connect termina, el socket s puede ser usado en una
              petición para traer el texto de la página. El mismo socket leerá
              la respuesta y luego será destruido. Así es, destruido. Los
              sockets cliente son normalmente usados solo para un intercambio (o
              un pequeño numero se intercambios secuenciales).
            </p>
            <div className={styles.image}>
              <Image
                src="/images/sockets/python-socket.png"
                alt="sockets programming"
                width="600px"
                height="600px"
                objectFit="contain"
              />
            </div>
            <p>
              Lo que sucede en el servidor web es un poco más complejo. Primero,
              el servidor web crea un «socket servidor»:
            </p>
            <div className="Code">
              <code>
                <p className="CommentCode">
                  # create an INET, STREAMing socket
                </p>
                <p>
                  serversocket = socket.socket(socket.AF_INET,
                  socket.SOCK_STREAM)
                </p>
                <p className="CommentCode">
                  # bind the socket to a public host, and a well-known port
                </p>
                <p>serversocket.bind((socket.gethostname(), 80))</p>
                <p className="CommentCode"># become a server socket</p>
                <p>serversocket.listen(5)</p>
              </code>
            </div>

            <p>
              Un par de cosas que señalar: usamos socket.gethostname() para que
              el socket fuera visible al mundo exterior. Si hubiésemos usado
              s.bind((&apos;localhost&apos;, 80)) o
              s.bind((&apos;127.0.0.1&apos;, 80)) habríamos tenido un socket
              servidor pero solo habría sido visible en la misma máquina.
              s.bind((&apos;&apos;, 80)) especifica que el socket es accesible
              desde cualquier dirección que tenga la máquina. Algo más para
              señalar: los números de puerto bajos son normalmente reservados
              para servicios «conocidos» (HTTP, SNMP, etc.). Si estás probando
              los sockets usa un número grande (4 dígitos).
            </p>
            <p>
              Finalmente, el argumento que se le pasa a listen le indica a la
              librería del socket que queremos poner en cola no más de 5
              solicitudes de conexión (el máximo normal) antes de rechazar
              conexiones externas. Si el resto del código está escrito
              correctamente eso debería ser suficiente.
            </p>
            <p>
              Ahora que tenemos un socket servidor escuchando en el puerto 80 ya
              podemos entrar al bucle principal del servidor web:
            </p>
            <div className="Code">
              <code>
                <p></p>
                <p> While True: </p>
                <p className="CommentCode">
                  &emsp;&emsp;# accept connections from outside
                </p>
                <p>
                  &emsp;&emsp;(clientsocket, address) = serversocket.accept()
                </p>
                <p className="CommentCode">
                  &emsp;&emsp;# now do something with the clientsocket
                  <br />
                  &emsp;&emsp;# in this case, we&apos;ll pretend this is a
                  threaded server
                </p>
                <p>&emsp;&emsp;ct = client_thread(clientsocket))</p>
                <p>&emsp;&emsp;ct.run()</p>
              </code>
            </div>
            <h3>Video tutorial:</h3>
            <iframe
              width="560"
              height="315"
              src="https://www.youtube.com/embed/nJYp3_X_p6c"
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>

            <br />
            <br />
            <a href="https://docs.python.org/es/3/howto/sockets.html">
              <small>
                Fuente:
                <ins>https://docs.python.org/es/3/howto/sockets.html</ins>
              </small>
            </a>
          </div>
        </article>
      </div>
    </>
  );
}
