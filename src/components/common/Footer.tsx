import Link from "next/link";
// import { useTranslation } from "@/i18n";
// import { Locale } from "@/types";
// import { languages } from "@/i18n/settings";

export default async function Footer() {
  // { locale }: { locale: Locale }
  // const { t } = await useTranslation(locale, "footer");

  return (
    <footer>
      <ul>
        <li>
          <Link href="/about-us">about us</Link>
        </li>
        <li>
          <Link href="/how-it-works">how it works</Link>
        </li>
        <li>
          <Link href="/log-in">log in</Link>
        </li>
        <li>
          <Link href="/sign-in">sign in</Link>
        </li>
      </ul>
      {/* {languages
        .filter((l) => locale !== l)
        .map((l) => {
          return (
            <li key={l}>
              <Link href={`/${l}`}>{l}</Link>
            </li>
          );
        })} */}
    </footer>
  );
}
