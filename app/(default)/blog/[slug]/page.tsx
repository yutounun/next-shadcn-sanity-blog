import Portable from "../_components/portable";
import { Suspense } from "react";
import { SkeletonPostPage } from "@/components/ui/skeleton";
import { client } from "@/microcms/client";

type Props = {
  params: { slug: string; postName: string; authorImg: any };
};

export default async function slugCategoryPage({ params }: Props) {
  const post = await client.get({
    endpoint: "blogs",
    contentId: params.slug,
  });
  return (
    <Suspense fallback={<SkeletonPostPage />}>
      <Portable post={post} />
    </Suspense>
  );
}
