import Slider from "react-slick";
import { SETTINGS_CAROUSEL } from "./Carousel.constant";
import Styled from './styled';

export function Carousel({ medias }: { medias?: string[]}) {
  return (
    <Slider {...SETTINGS_CAROUSEL}>
        {medias?.map((media) => (
            <Styled.ContentSlide key={media}>
                <Styled.SlideImage src={media} alt={media}  />
            </Styled.ContentSlide>
        ))}
    </Slider>
  );
}