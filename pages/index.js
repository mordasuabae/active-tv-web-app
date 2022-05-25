import FreeToWatch from "../components/free-to-watch";
import HomeBanner from "../components/home-banner";
import PopularNow from "../components/popular-now";

export default function Home() {
  return (
    <>
      <HomeBanner />
      <FreeToWatch />
      <PopularNow />
    </>
  );
}
