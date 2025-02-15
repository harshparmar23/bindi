import HomeLanding from "@/app/components/HomeLanding"; // Adjust the path as necessary
import { InfiniteName } from "@/app/components/HomeInfiniteName";
import TopCategories from "@/app/components/HomeTopCategories";
import ImageGallery from "@/app/components/HomeImageGallery";
import CustomerReviews from "@/app/components/HomeCustomerReviews";
import TopItems from "@/app/components/HomeTopItems";
import FAQs from "@/app/components/HomeFaqs";
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
