import { Box } from "@chakra-ui/react";

import { getPageBySlug } from "@/shared/api/get-page-by-slug";
import { sectionRenderer } from "@/shared/lib/sectionRenderer";

const urlParamsObject = [
  "contentSections",
  "contentSections.benefits",
  "contentSections.buttons",
  "contentSections.image",
  "contentSections.inputSubscribe",
  "contentSections.subscribeButton",
  "contentSections.categories.img",
];

export default async function Home({ params }: any) {
  const page = await getPageBySlug("Home", params.lang, urlParamsObject);
  if (page.data.length === 0) return null;
  const contentSections = page.data[0].attributes.contentSections;
  const sections = contentSections.map((section: any, index: number) =>
    sectionRenderer(section, index),
  );
  return <Box as="main">{sections}</Box>;
}
