import { Box } from "@chakra-ui/react";

import { ProductsList } from "@/sections/ProductsList";
import { fetchAPI } from "@/shared/api/fetch-api";

async function fetchPostsByCategory(filter: string) {
  try {
    const token = process.env.NEXT_PUBLIC_STRAPI_API_TOKEN;
    const path = `/products`;
    const urlParamsObject = {
      sort: { createdAt: "desc" },
      filters: {
        category: {
          slug: filter,
        },
      },
      populate: {
        cover: { fields: ["url"] },
        category: {
          populate: "*",
        },
        authorsBio: {
          populate: "*",
        },
        images: {
          populate: "*",
        },
        tags: {
          populate: "*",
        },
        detailsButton: {
          populate: "*",
        },
      },
    };
    const options = { headers: { Authorization: `Bearer ${token}` } };
    const responseData = await fetchAPI(path, urlParamsObject, options);
    return responseData;
  } catch (error) {
    console.error(error);
  }
}

export default async function CategoryRoute({
  params,
}: {
  params: { category: string };
}) {
  const filter = params.category;
  const { data } = await fetchPostsByCategory(filter);

  //TODO: CREATE A COMPONENT FOR THIS
  if (data.length === 0) return <div>No product </div>;

  return (
    <Box as="main" pt={"var(--chakra-sizes-headerHeight)"}>
      <ProductsList products={data} />
    </Box>
  );
}

export async function generateStaticParams() {
  return [];
}
