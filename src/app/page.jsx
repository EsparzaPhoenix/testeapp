"use client";

import styles from "../styles/layout/app/home/home.module.scss"
import Image from "next/image";

export default function Home() {
  return (
    <main className={` ${styles["padrao"]}`}>
      <h1> Home </h1>
      <Image src="/image/Galina.png" width={1854} height={1056}></Image>
    </main>
  )
}
