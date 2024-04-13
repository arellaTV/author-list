import Image from "next/image";
import styles from "./page.module.css";

async function getAuthors() {
  const res = await fetch("http://localhost:8080/authors");
  // The return value is *not* serialized
  // You can return Date, Map, Set, etc.

  if (!res.ok) {
    // This will activate the closest `error.js` Error Boundary
    throw new Error("Failed to fetch data");
  }

  return res.json();
}

export default async function Home() {
  const authors = await getAuthors();

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
            {authors.map((author) => {
              return (
                <div
                  className={styles["team-member"]}
                  key={`author-${author?.id}`}
                >
                  <Image
                    src="/images/profile_photo.png"
                    alt={`Profile photo of ${author?.author_name}`}
                    width={48}
                    height={48}
                    className={styles["profile-photo"]}
                  />
                  <div className={styles["team-member__details"]}>
                    <div className={styles["team-member__name"]}>
                      {author?.author_name}
                    </div>
                    <div className={styles["team-member__email"]}>
                      {author?.author_email}
                    </div>
                  </div>
                  <Image
                    src="/icons/x_circle.svg"
                    alt="Dismiss"
                    width={32}
                    height={32}
                    className={styles["team-member__dismiss"]}
                  />
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </main>
  );
}
