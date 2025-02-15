import dynamic from "next/dynamic";
import HomeLanding from "@/components/HomeLanding";
import TopCategories from "@/components/HomeTopCategories";
import ImageGallery from "@/components/HomeImageGallery";
import CustomerReviews from "@/components/HomeCustomerReviews";
import TopItems from "@/components/HomeTopItems";
import FAQs from "@/components/HomeFaqs";

// Dynamically import InfiniteName with no SSR
const InfiniteName = dynamic(
  () => import("@/components/HomeInfiniteName").then((mod) => mod.InfiniteName),
  { ssr: false }
);

export default function Home() {
  return (
    <div>
      <HomeLanding />
      <InfiniteName />
      <TopCategories />
      <ImageGallery />
      <TopItems />
      <CustomerReviews />
      <FAQs />
    </div>
  );
}
