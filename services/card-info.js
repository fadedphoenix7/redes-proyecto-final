const socketsInfo = {
  img_src: "/images/cards/programacio-sockets.png",
  title: "Programación de aplicaciones con sockets",
  description:
    "La programación de sockets es una forma de que dos dispositivos de la misma red se comuniquen entre sí." +
    "Se comunican dos sockets, uno en el cliente y otro en el servidor.",
  url: "/sockets",
};

const securityInfo = {
  img_src: "/images/cards/seguridad.jpg",
  title: "Seguridad en la red y en la web",
  description:
    "La seguridad de nuestra informacion son te,as muy importantes cuando estamos usando redes o internet, el conocer como mantenernos seguros" +
    "y el poder conocer los diferentes tipos de ataques en una manera de poder prevenir vulnerabilidades y aprender a defendernos",
  url: "/seguridad",
};

const IOTInfo = {
  img_src: "/images/cards/iot.png",
  title: "El internet de las cosas",
  description:
    "El Internet de las cosas (IoT) es el proceso que permite conectar elementos físicos cotidianos al Internet: "+
    "desde objetos domésticos comunes, como las bombillas de luz, hasta recursos para la atención de la salud, como" +
    "los dispositivos médicos; también abarca prendas y accesorios personales inteligentes e incluso los sistemas de las ciudades inteligentes.",
  url: "/internetdelascosas",
};

export default function getDataToCard({ title }) {
  console.log(title);
  if (title === "socket") return socketsInfo;
  if (title === "security") return securityInfo;
  if (title === "iot") return IOTInfo;
  return {};
}
