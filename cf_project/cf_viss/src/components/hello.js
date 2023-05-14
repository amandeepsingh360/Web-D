import React from "react";
import { useState } from "react";
import request from "./request";
import PieLang from "./PieLang";

const Hello = () =>{

    const [ data , setData ] = useState({userName:"",tuser:"",Submissions:[],contest:{},userInfo:{},show:0});

    // userName,tuser,submissions,contest,userInfo,

    const onchange = (e) => {
        setData({tuser:e});
        console.log(e);
    };

    const onSubmit = async () => {
          setData({ show: 1 });
          try {
             const rData = await request(data["tuser"]);
             setData({
                userName : data["tuser"],
                tuser : data["tuser"],
                Submissions : rData[0],
                contest : rData[1],
                userInfo : rData[2],
                show : 1
             });
          } catch (ex) {
            setData({ show: 0 });
            if (ex.message === "Network Error") console.log("Invalid Username");
          }
    };

    const  getUnsolvedProblems = () => {
        const submissions = data["Submissions"].filter(c => c.verdict !== "OK").map(c => c.id);
        console.log(submissions);
        return submissions;
    };

    const  programLang = () => {
        const plang = data["Submissions"].map(p => p.programmingLanguage);
        let counts = {};
        for (let i = 0; i < plang.length; i++) {
             let num = plang[i];
             counts[num] = counts[num] ? counts[num] + 1 : 1;
         }
        console.log(counts);
        return counts;
    };

    if(data["show"]===0){
        
        onSubmit();

    };

    if(data["show"]===1){

        console.log(data["userName"]);
        console.log(data["contest"]);

    }

    return(

        <div>

            {data["userName"]}

        </div>

    );

};

export default Hello;