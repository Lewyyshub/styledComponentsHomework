import { useState, useEffect } from "react";
import styled from "styled-components";
import Content from "../../__Molecules/Header/Content";
import SecondContent from "../../__Molecules/Header/SecondContent";
import Extended from "../../__Molecules/Header/Extended";
import dayImage from "../../../assets/images/day.png";
import nightImage from "../../../assets/images/night.png";

const Div = styled.div`
  background-image: url(${(props) => props.bgImage});
  background-size: cover;
  background-position: center;
  height: 100vh;
  display: flex;
  flex-direction: column;

  justify-content: space-around;
`;

function Container() {
  const [bgImage, setBgImage] = useState(dayImage);

  useEffect(() => {
    const currentHour = new Date().getHours();
    if (currentHour >= 18 || currentHour < 6) {
      setBgImage(nightImage);
    } else {
      setBgImage(dayImage);
    }
  }, []);

  return (
    <>
      <Div bgImage={bgImage}>
        <Content />
        <SecondContent />
      </Div>
      <Extended />
    </>
  );
}

export default Container;
