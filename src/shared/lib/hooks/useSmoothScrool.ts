import { useRouter } from "next/navigation";

export const useSmoothScrool = () => {
  const router = useRouter();

  const onLinkClick = (href = "#", isAnchor?: boolean) => {
    if (!isAnchor) {
      router.push(href);
    }
    const submitFormElement = document.getElementById(href);
    if (submitFormElement) {
      submitFormElement.scrollIntoView({ behavior: "smooth" });
    }
  };

  return onLinkClick;
};
