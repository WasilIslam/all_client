import axios from "axios";
import React from "react";
import {useEffect} from "react";
import {useState} from "react";

const getCookie = async () => {
  const res = await axios.get(process.env.REACT_APP_API + "/cookie",{withCredentials:true});
  const {data} = res;
  console.log(data);
  return data;
};

const Cookieparser = () => {
  const [cookie, setCookie] = useState("");
  useEffect(() => {
    const initialize = async () => {
      try {
        setCookie(await getCookie());
      } catch (err) {
        console.log(err);
      }
    };
    initialize();
  }, []);
  return <div>Check the cookie it must be set</div>;
};

export default Cookieparser;
