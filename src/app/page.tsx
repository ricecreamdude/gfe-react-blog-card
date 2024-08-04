import BlogCard from "@/components/BlogCard/BlogCard";
import { ChipVariantEnum } from "@/components/Chip/Chip";

const BlogCardData = {
  title: "Top 5 Living Room Inspirations",
  text: "Curated vibrants colors for your living, make it pop & calm in the same time.",

}

export default function Home() {
  return (
    <main>
        <BlogCard 
          chipVariant={ChipVariantEnum.interior}
          title={BlogCardData.title} 
          text={BlogCardData.text}
        />
    </main>
  );
}
