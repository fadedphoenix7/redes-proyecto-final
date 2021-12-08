import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import Card from '../components/card/index'

const articles = ['socket', 'security', 'iot']

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Redes y Seguridad</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={styles.main}>
        <p className={styles.title}>Articulos</p>
        {articles.map((article, key) => {
          return <Card title={article} key={key} />
        })}
      </main>
    </div>
  );
}
