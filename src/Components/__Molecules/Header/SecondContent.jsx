import { useState, useEffect, useRef } from "react";
import styled from "styled-components";

const MainDiv = styled.div`
  width: 100%;
  /* max-width: 1050px; */
  height: auto;
  display: flex;
  justify-content: space-between;
`;

const Div = styled.div`
  max-width: 575px;
  height: 288px;
  width: 100%;
  margin-inline: auto;
`;

const ButtonDiv = styled.div`
  max-width: 146px;
  height: 56px;
  display: flex;
  padding-top: 200px;
`;

const Morebutton = styled.button`
  max-width: 146px;
  height: 56px;
  flex-shrink: 0;
  border-radius: 28px;
  background: #fff;
  color: #000;
  font-family: Inter;
  font-size: 16px;
  font-weight: 700;
  letter-spacing: 5px;
  text-transform: uppercase;
  cursor: pointer;
`;

const P = styled.p`
  color: #fff;
  font-family: Inter;
  font-size: 20px;
  font-weight: 400;
  letter-spacing: 4px;
  text-transform: uppercase;
`;

const H1 = styled.h1`
  color: #fff;
  font-family: Inter;
  font-size: 100px;
  font-weight: 700;
  line-height: 200px;
  letter-spacing: -5px;
`;

const P2 = styled.p`
  color: #fff;
  font-family: Inter;
  font-size: 24px;
  font-weight: 700;
  letter-spacing: 4.8px;
  text-transform: uppercase;
`;

const GrayDiv = styled.div`
  display: ${({ isVisible }) => (isVisible ? "flex" : "none")};
  width: 100%;
  height: 400px;
  background: rgba(255, 255, 255, 0.75);
  backdrop-filter: blur(20px);
  justify-content: space-evenly;
  align-items: center;
  position: absolute;
  top: 100%;
  left: 0;
`;

const FirstSide = styled.div`
  display: flex;
  flex-direction: column;
  gap: 42px;
`;

const SecondSide = styled.div`
  display: flex;
  flex-direction: column;
  gap: 42px;
`;

const SmallText = styled.p`
  color: #303030;
  font-family: Inter;
  font-size: 15px;
  font-weight: 400;
  letter-spacing: 3px;
  text-transform: uppercase;
`;

const LargeText = styled.h1`
  color: #303030;
  font-family: Inter;
  font-size: 56px;
  font-weight: 700;
`;

function SecondContent() {
  const [isExpanded, setIsExpanded] = useState(false);
  const [time, setTime] = useState(new Date());
  const [timezone, setTimezone] = useState("გეძებ");
  const [dayOfYear, setDayOfYear] = useState(0);
  const [dayOfWeek, setDayOfWeek] = useState(0);
  const [weekNumber, setWeekNumber] = useState(0);
  const grayDivRef = useRef(null);
  const [greeting, setGreeting] = useState("GOOD EVENING");

  useEffect(() => {
    const interval = setInterval(() => {
      const now = new Date();
      setTime(now);
      setTimezone(Intl.DateTimeFormat().resolvedOptions().timeZone);

      const hours = now.getHours();
      setGreeting(hours >= 18 ? "GOOD EVENING" : "GOOD MORNING");

      const startOfYear = new Date(now.getFullYear(), 0, 0);
      const diff = now - startOfYear;
      const oneDay = 1000 * 60 * 60 * 24;
      setDayOfYear(Math.floor(diff / oneDay));

      setDayOfWeek(now.getDay());

      const firstDayOfYear = new Date(now.getFullYear(), 0, 1);
      const pastDays = Math.floor(diff / oneDay);
      setWeekNumber(Math.ceil((pastDays + firstDayOfYear.getDay()) / 7));
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  const formattedTime = time.toLocaleTimeString("en-GB", {
    hour: "2-digit",
    minute: "2-digit",
  });

  const smoothScroll = (position) => {
    window.scrollTo({
      top: position,
      behavior: "smooth",
    });
  };

  const toggleVisibility = () => {
    if (!isExpanded) {
      setIsExpanded(true);
      setTimeout(() => {
        if (grayDivRef.current) {
          smoothScroll(grayDivRef.current.offsetTop);
        }
      }, 100);
    } else {
      smoothScroll(0);
      setTimeout(() => {
        setIsExpanded(false);
      }, 1000);
    }
  };

  return (
    <>
      <MainDiv>
        <Div>
          <P>{greeting} IT’S CURRENTLY</P>
          <H1>{formattedTime}</H1>
          <P2> {timezone}</P2>
        </Div>
        <ButtonDiv>
          <Morebutton onClick={toggleVisibility}>
            {isExpanded ? "Less" : "More"}
          </Morebutton>
        </ButtonDiv>
      </MainDiv>
      <GrayDiv isVisible={isExpanded} ref={grayDivRef}>
        <FirstSide>
          <div>
            <SmallText>CURRENT TIMEZONE</SmallText>
            <LargeText>{timezone}</LargeText>
          </div>
          <div>
            <SmallText>Day of the year</SmallText>
            <LargeText>{dayOfYear}</LargeText>
          </div>
        </FirstSide>
        <SecondSide>
          <div>
            <SmallText>Day of the week</SmallText>
            <LargeText>{dayOfWeek}</LargeText>
          </div>
          <div>
            <SmallText>Week number</SmallText>
            <LargeText>{weekNumber}</LargeText>
          </div>
        </SecondSide>
      </GrayDiv>
    </>
  );
}

export default SecondContent;
