import Image from "next/image";
import styles from "./page.module.css";

export default function Home() {
  return (
    <main className={styles.main}>
      <div className={styles["card-container"]}>
        <div className={styles.card}>
          <Image
            src="/icons/arrow_left.svg"
            alt="Go back"
            width={24}
            height={20}
            className={styles["back-arrow"]}
          />
          <h1 className={styles.header}>You have 10 Team Members</h1>
          <div>
            <div className={styles["team-member"]}>
              <Image
                src="/images/profile_photo.png"
                alt="Profile photo of Jenny Appleseed"
                width={48}
                height={48}
                className={styles["profile-photo"]}
              />
              <div className={styles["team-member__details"]}>
                <div>Jenny Appleseed</div>
                <div>jenny.appleseed@example.com</div>
              </div>
              <Image
                src="/icons/x_circle.svg"
                alt="Dismiss"
                width={32}
                height={32}
              />
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
