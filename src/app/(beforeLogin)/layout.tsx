type Props = { children: React.ReactNode; modal: React.ReactNode };
import styles from "@/app/page.module.css";

export default function Layout({ children, modal }: Props) {
  return (
    <div className={styles.container}>
      {children}
      {modal}
    </div>
  );
}
