import { useState } from "react";
import styled from "styled-components";
import arrows from "../../../assets/icons/arrows.png";

const Div = styled.div`
  /* display: flex; */
  /* flex-direction: column; */
  /* max-width: 555px; */
  /* gap: 13px; */
`;

const SecondDiv = styled.div`
  width: 100%;
  height: auto;
  display: flex;
  gap: 10px;
`;

const H1 = styled.h1`
  color: #fff;
  font-family: Inter;
  font-size: 18px;
  font-style: normal;
  font-weight: 400;
  line-height: 28px;
  flex: 1;
`;

const P = styled.p`
  color: #fff;
  font-family: Inter;
  font-size: 18px;
  font-style: normal;
  font-weight: 700;
  line-height: 28px;
  padding-top: 10px;
`;

const Button = styled.button`
  background: none;
  border: none;
  cursor: pointer;
  display: flex;
  align-items: center;
`;

function Content() {
  const quotes = [
    {
      text: "არასოდეს ენდო მეგობრებს ზედმეტად, ისწავლე მტრების გამოყენება.",
      author: "რობერტ გრინი",
    },
    {
      text: "ის, ვინც არასდროს შეცდომილა, არასოდეს უცდია რაიმე ახალი.",
      author: "რობერტ გრინი",
    },
    {
      text: "ერთადერთი ჭეშმარიტი სიბრძნე ის არის, რომ იცი, არაფერი იცი.",
      author: "სოკრატე",
    },
    {
      text: "ჩვენი ცხოვრება ისაა, რასაც ჩვენი აზრები ქმნიან.",
      author: "მარკუს ავრელიუსი",
    },
    {
      text: "იდეები არაფერია, მათი განხორციელება კი – ყველაფერია.",
      author: "თომას ედისონი",
    },
  ];

  const [quote, setQuote] = useState(quotes[0]);

  const changeQuote = () => {
    let randomIndex;
    do {
      randomIndex = Math.floor(Math.random() * quotes.length);
    } while (quotes[randomIndex].text === quote.text);
    setQuote(quotes[randomIndex]);
  };

  return (
    <Div>
      <SecondDiv>
        <H1>{quote.text}</H1>
        <Button onClick={changeQuote}>
          <img src={arrows} alt="Change Quote" />
        </Button>
      </SecondDiv>
      <P>{quote.author}</P>
    </Div>
  );
}

export default Content;
