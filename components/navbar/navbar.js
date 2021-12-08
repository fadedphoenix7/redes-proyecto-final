import Link from "next/link";
import styles from "../../styles/navbar.module.css";

export default function NavBar() {
  return (
    <>
      <nav className={styles.navbar}>
        <Link href="/">
          <a>
            <div>
              <h3>Home</h3>
            </div>
          </a>
        </Link>
        <ul>
          <Link href="/sockets">
            <a>
              <li>
                <div>
                  <p>Sockets</p>
                </div>
              </li>
            </a>
          </Link>
          <Link href="/seguridad">
            <a>
              <li>
                <div>
                  <p>Seguridad</p>
                </div>
              </li>
            </a>
          </Link>
          <Link href="/internetdelascosas">
            <a>
              <li>
                <div>
                  <p>Internet de las cosas</p>
                </div>
              </li>
            </a>
          </Link>
          <Link href="/creditos">
            <a>
              <li>
                <div>
                  <p>Creditos</p>
                </div>
              </li>
            </a>
          </Link>
        </ul>
      </nav>
    </>
  );
}
