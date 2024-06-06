import Image from "next/image";
import s from "./page.module.scss";
import { Header } from "@/components/Header/Header";

export default function Home() {
  return (
    <main className={s.main}>
     <Header />
    </main>
  );
}
