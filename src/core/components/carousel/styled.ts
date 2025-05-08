import styled from "styled-components";

const ContentSlide = styled.div`
    width: 100%,
    height: calc(100% - 40px)
`
const SlideImage = styled.img`
    width: 100%,
    height: 100%,
    objectFit: contain
`

export default { ContentSlide, SlideImage }