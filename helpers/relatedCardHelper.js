
const what_is_s = {
    title: "Que son los sockets",
    image_src: "/images/sockets/que-es-un-socket.png",
    description: "Socket designa un concepto abstracto por el cual dos procesos (posiblemente situados en computadoras distintas) pueden intercambiar cualquier flujo de datos, generalmente de manera fiable y ordenada. Además es una estructura de datos que permite que dos maquinas se comuniquen entre ellas."
}

const architecture_s = {
    title: "Arquitectura",
    image_src: "/images/sockets/architecture.jpg",
    description: "A la hora de comunicar dos programas, existen varias posibilidades para establecer la conexión inicialmente. Una de ellas es la utilizada aquí. Uno de los programas debe estar arrancado y en espera de que otro quiera conectarse a él. Nunca da \"el primer paso\" en la conexión. "
}

const how_to_s = {
    title: "Ejemplo con python",
    image_src: "/images/sockets/python.png",
    description: "Aprende a crear tu primer programa usando sockets con el lenguaje de programcion de pythpn"
}

const concept_sr = {
    title: "Definicion de seguridad de redes",
    image_src: "/images/security/red/seguridad-red.jpg",
    description: "La seguridad de redes empieza con la autenticación, usualmente con un nombre de usuario y una contraseña. Ya que esto requiere solamente autenticar un nombre de usuario, por ejemplo, con la contraseña, se utiliza el término autenticación de un factor."
}

const ipsec_sr = {
    title: "IPSec",
    image_src: "/images/security/red/ipsec.png",
    description: "IPSec (Internet Protocol Security) está compuesto por varios protocolos de seguridad diferentes y está diseñado para garantizar que los paquetes de datos enviados a través de una red IP permanezcan invisibles e inaccesibles para terceros."
}

const vpn_sr = {
    title: "VPN",
    image_src: "/images/security/red/vpn.webp",
    description: "Las VPN cifran su tráfico en internet y disfrazan su identidad en línea. Esto le dificulta a terceros el seguimiento de sus actividades en línea y el robo de datos. El cifrado se hace en tiempo real."
}

const what_is_sw = {
    title: "Que es la seguridad web",
    image_src: "/images/security/web/seguridad-2.webp",
    description: "Hay muchos factores que intervienen en la seguridad web y la protección web. Cualquier sitio web o aplicación que sea seguro está seguramente respaldado por diferentes tipos de puntos de control y técnicas para mantenerlo seguro."
}

const http_sw = {
    title: "Http Secure",
    image_src: "/images/security/web/http-https.jpg",
    description: "El Protocolo seguro de transferencia de hipertexto (en inglés, Hypertext Transfer Protocol Secure o HTTPS) es un protocolo de aplicación basado en el protocolo HTTP, destinado a la transferencia segura de datos de hipertexto, es decir, es la versión segura de HTTP."
}

const ssl_sw = {
    title: "SSL",
    image_src: "/images/security/web/ssl.png",
    description: "EL SSL proporciona un canal seguro entre dos computadoras o dispositivos que operan a través de Internet o de una red interna. Un ejemplo frecuente es el uso de SSL para proteger las comunicaciones entre un navegador web y un servidor web."
}

const what_is_iot = {
    title: "¿Qué es el Internet de las cosas (IoT)?",
    image_src: "/images/iot/iot-2.jpg",
    description: "El Internet de las cosas (IoT) es el proceso que permite conectar elementos físicos cotidianos al Internet: desde objetos domésticos comunes, como las bombillas de luz, hasta recursos para la atención de la salud, como los dispositivos médicos; también abarca prendas y accesorios personales inteligentes e incluso los sistemas de las ciudades inteligentes."
}

const tech_iot = {
    title: "Tecnologias Compatibles",
    image_src: "/images/iot/compatibles.jpg",
    description: "Mediante la informática de bajo coste, la nube, big data, analítica y tecnologías móviles, las cosas físicas pueden compartir y recopilar datos con una mínima intervención humana. En este mundo hiperconectado, los sistemas digitales pueden grabar, supervisar y ajustar cada interacción entre las cosas conectadas. El mundo físico y el mundo digital van de la mano y cooperan entre sí."
}

const future_iot = {
    title: "Futuro e innovacion",
    image_src: "/images/iot/innovation.jpg",
    description: "Para entender más sobre qué es Internet de las cosas te brindamos ejemplos innovadores de su uso en la actualidad."
}

const data = {
    what_is_s,
    architecture_s,
    how_to_s,
    concept_sr,
    ipsec_sr,
    vpn_sr,
    what_is_sw,
    http_sw,
    ssl_sw,
    what_is_iot,
    tech_iot,
    future_iot
}


export default function helper({q}) {
    return data[q];
}