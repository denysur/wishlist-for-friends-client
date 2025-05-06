// import { Locale } from "@/types";
import Footer from "@/components/common/Footer";

export default async function HomePage() {
  // {
  //   // params: { locale },
  // }: {
  //   // params: { locale: Locale };
  // }
  return (
    <>
      <main>
        <h1 className="text-primary-main">Wishlist For Friends</h1>
      </main>
      <Footer
      // locale={locale}
      />
    </>
  );
}
