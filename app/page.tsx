"use client";

import styled from "styled-components";

import { useState } from "react";
import Link from "next/link";

const StyledDiv = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export default function Home() {
  const [city, setCity] = useState("");

  return (
    <StyledDiv>
      <h1>Weather Forecast</h1>
      <p>Enter a city name below to get weather for the next 7days</p>
      <input type="text" value={city} placeholder="City name" onChange={(e) => setCity(e.target.value)} />
      <Link href={`/${city}`}>Get Weather</Link>
    </StyledDiv>
  );
}