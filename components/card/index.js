import getDataToCard from "../../services/card-info";
import Image from "next/dist/client/image";
import style from "../../styles/card.module.css";
import Link from "next/link";

export default function Card({ title }) {
  const data = getDataToCard({ title });
  console.log(title);
  return (
    <>
      <Link href={data.url} >
        <a className={style.card}>
          <article className={style.article}>
            <header className={style.title}>{data.title}</header>
            <div className={style.img}>
              <Image src={data.img_src} alt={data.title} width="300px" height="300px" objectFit='contain' />
            </div>
            <p>{data.description}</p>
          </article>
        </a>
      </Link>
    </>
  );
}
