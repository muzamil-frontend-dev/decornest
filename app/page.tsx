import styles from "@/app/ui/home.module.css";
import { lusitana } from "@/app/ui/fonts";

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col p-6">
      <div className={styles.shape}>
        <p className={`${lusitana.className} antialiased`}>
          Welcome to Next.js!
        </p>
      </div>
    </div>
  );
}
