"use client";
import {
  AspectRatio,
  HStack,
  Image,
  Skeleton,
  Stack,
  StackProps,
  useBreakpointValue,
} from "@chakra-ui/react";
import { useKeenSlider } from "keen-slider/react";
import { useState } from "react";
import { IoChevronBackOutline, IoChevronForwardOutline } from "react-icons/io5";

import {
  Carousel,
  CarouselIconButton,
  CarouselSlide,
  useCarousel,
} from "../Carousel/Carousel";
import { ProductImage } from "./_data";

interface GalleryProps {
  images: ProductImage[];
  aspectRatio?: number;
  rootProps?: StackProps;
}

export const Gallery = (props: GalleryProps) => {
  const { images, aspectRatio = 4 / 3, rootProps } = props;
  const [currentSlide, setCurrentSlide] = useState(0);
  const [loaded, setLoaded] = useState(false);

  const [sliderRef, instanceRef] = useKeenSlider<HTMLDivElement>({
    initial: 0,
    slideChanged(slider) {
      setCurrentSlide(slider.track.details.rel);
    },
    created() {
      setLoaded(true);
    },
  });

  const next = () => {
    if (currentSlide + 1 === images.length) {
      return;
    } else {
      setCurrentSlide((prev) => (prev += 1));
    }
  };
  const back = () => {
    if (currentSlide === 0) {
      return;
    } else {
      setCurrentSlide((prev) => (prev -= 1));
    }
  };

  return (
    <Stack spacing="4" {...rootProps}>
      <AspectRatio ratio={aspectRatio}>
        <Image
          src={images[currentSlide].src}
          objectFit="cover"
          alt={images[currentSlide].alt}
          fallback={<Skeleton />}
        />
      </AspectRatio>
      <HStack spacing="4">
        {loaded && instanceRef.current && (
          <CarouselIconButton
            onClick={back}
            icon={<IoChevronBackOutline />}
            aria-label="Previous slide"
          />
        )}
        <Carousel ref={sliderRef} direction="row" width="full">
          {loaded &&
            instanceRef.current &&
            images.map((image, i) => (
              <CarouselSlide
                key={i}
                onClick={() => setCurrentSlide(i)}
                cursor="pointer"
              >
                <AspectRatio
                  ratio={aspectRatio}
                  transition="all 200ms"
                  opacity={currentSlide === i ? 1 : 0.4}
                  _hover={{ opacity: 1 }}
                >
                  <Image
                    src={image.src}
                    objectFit="cover"
                    alt={image.alt}
                    fallback={<Skeleton />}
                  />
                </AspectRatio>
              </CarouselSlide>
            ))}
        </Carousel>
        {loaded && instanceRef.current && (
          <CarouselIconButton
            onClick={next}
            icon={<IoChevronForwardOutline />}
            aria-label="Next slide"
          />
        )}
      </HStack>
    </Stack>
  );
};
