import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import axios from "axios";
import { useEffect, useState } from "react";

// const options = {
//   method: "GET",
//   url: "https://api-football-v1.p.rapidapi.com/v3/fixtures",
//   params: {
//     league: "1",
//     season: "2022",
//     from: "2022-11-19",
//     to: "2022-12-25",
//     timezone: "America/Bogota",
//   },
//   headers: {
//     "X-RapidAPI-Key": process.env.RAPIDAPI,
//     "X-RapidAPI-Host": "api-football-v1.p.rapidapi.com",
//   },
// };

const Home: NextPage = () => {
  const [data, setData] = useState([] as any);
  // useEffect(() => {
  //   axios
  //     .request(options)
  //     .then(function (response) {
  //       //console.log(response.data);

  //       setData(response.data.response);
  //     })
  //     .catch(function (error) {
  //       console.error(error);
  //     });
  // }, []);

  return <>hugo</>;
};

export default Home;
