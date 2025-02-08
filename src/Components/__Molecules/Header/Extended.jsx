import styled from "styled-components";
const GrayDiv = styled.div`
  display: none;
  max-width: 1440px;
  height: 400px;
  background: rgba(255, 255, 255, 0.75);
  backdrop-filter: blur(20.387113571166992px);
  /* display: flex; */
  justify-content: space-evenly;
  align-items: center;
  margin-inline: auto;
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
const P1 = styled.p`
  color: #303030;
  font-family: Inter;
  font-size: 15px;
  font-style: normal;
  font-weight: 400;
  line-height: 28px; /* 186.667% */
  letter-spacing: 3px;
  text-transform: uppercase;
`;
const H1 = styled.h1`
  color: #303030;
  font-family: Inter;
  font-size: 56px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
`;
const P2 = styled.p`
  color: #303030;
  font-family: Inter;
  font-size: 15px;
  font-style: normal;
  font-weight: 400;
  line-height: 28px; /* 186.667% */
  letter-spacing: 3px;
  text-transform: uppercase;
`;
const H2 = styled.h1`
  color: #303030;
  font-family: Inter;
  font-size: 56px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
`;
const P3 = styled.p`
  color: #303030;
  font-family: Inter;
  font-size: 15px;
  font-style: normal;
  font-weight: 400;
  line-height: 28px; /* 186.667% */
  letter-spacing: 3px;
  text-transform: uppercase;
`;
const H3 = styled.h1`
  color: #303030;
  font-family: Inter;
  font-size: 56px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
`;
const P4 = styled.p`
  color: #303030;
  font-family: Inter;
  font-size: 15px;
  font-style: normal;
  font-weight: 400;
  line-height: 28px; /* 186.667% */
  letter-spacing: 3px;
  text-transform: uppercase;
`;
const H4 = styled.h1`
  color: #303030;
  font-family: Inter;
  font-size: 56px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
`;
function Extended() {
  return (
    <>
      <GrayDiv>
        <FirstSide>
          <div>
            <P1>CURRENT TIMEZONE</P1>
            <H1>Europe/London</H1>
          </div>
          <div>
            <P2>Day of the year</P2>
            <H2>295</H2>
          </div>
        </FirstSide>
        <SecondSide>
          <div>
            <P3>Day of the week</P3>
            <H3>5</H3>
          </div>
          <div>
            <P4>Week number</P4>
            <H4>42</H4>
          </div>
        </SecondSide>
      </GrayDiv>
    </>
  );
}
export default Extended;
