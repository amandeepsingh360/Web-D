import TextTrue from './TextTrue';
import TextFalse from './TextFalse';
import React from "react";
import { useState } from "react";
import request from "./request";
import PieLang from "./PieLang";


// userName,tuser,submissions,contest,userInfo,
    export default function Searchbar() {
        // const onchange = (e) => {
            //     setData({tuser:e});
        //     console.log(e);
        // };
        
        
        const onSubmit = async () => {
            // setData({ show: 1 });
            // data["tuser"]="jain40470";
            console.log(data["tuser"]);
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
                // console.log(data["Submissions"]);
            } catch (ex) {
                setData({ show: 0 });
                if (ex.message === "Network Error") console.log("Invalid Username");
            }
        };
        
        // const  getUnsolvedProblems = () => {
        //     const submissions = data["Submissions"].filter(c => c.verdict !== "OK").map(c => c.id);
        //     console.log(submissions);
        //     return submissions;
        // };
        
        // const  programLang = () => {
        //     const plang = data["Submissions"].map(p => p.programmingLanguage);
        //     let counts = {};
        //     for (let i = 0; i < plang.length; i++) {
        //         let num = plang[i];
        //         counts[num] = counts[num] ? counts[num] + 1 : 1;
        //     }
        //     console.log(counts);
        //     return counts;
        // };
    
        // // if(data["show"]===0){
            
        // //     onSubmit();
        
        // // };
    
        // // if(data["show"]===1){
    
        // //     console.log(data["userName"]);
        // //     console.log(data["contest"]);
        
        // // }
        const [ data , setData ] = useState({userName:"",tuser:"chaaaaaamaaandeeep",Submissions:[],contest:{},userInfo:{},show:0});
        // const [text, setText] = useState('');
        // const [btn, setbtn] = useState(false);
        // const[Shownew,setShownew] = useState(false);
        // const HandleOnChange = (event)=>{
        //     setText(event.target.value);
        //     console.log(event.target.value);
        // }

        // const onSubmit1=()=>{
        //     if(text.length>0){
        //         // const changed={userName:"",tuser:text,Submissions:[],contest:{},userInfo:{},show:0};
        //         // setData(data => ([...data, ...changed]));
        //         setData({ ...data, tuser: text })
        //         // setData({tuser:text});
        //         onSubmit();
        //         if(data["show"]===0){
        //             setShownew(1);
        //         }
        //         // else{
        //         //     setShownew(0);
        //         // }
        //         // console.log(data.show);
        //         setbtn(true);
        //     }
        //     else{
        //         setbtn(false);
        //     }
        //     // setbtn(true);
        // }
        // if(data["show"]===0){
        //     return(
        //         <>
        //             {/* <span>hi</span> */}
        //             <div>
        //                 <form action="#" className='mx-5 my-4'>
        //                     <input type="text" className='border-2 py-1 px-1 border-black' placeholder='Search' value={text} onChange={HandleOnChange}/>
        //                     <button type='Button' className='mx-3 py-1 px-1 border-2 border-black' onClick={onSubmit1}>Submit</button>
        //                 </form>
        //             </div>
        //         {/* console.log(data["tuser"]); */}
        //             <div>
        //                 <img src="Wedges-3s-200px.gif" alt="" />
        //             </div>
        //         </>
        //     );
        // }
        // else{
        //     return(
        //     <>
        //         {/* <div>hi</div> */}
        //         <div>
        //             <form action="#" className='mx-5 my-4'>
        //                 <input type="text" className='border-2 py-1 px-1 border-black' placeholder='Search' value={text} onChange={HandleOnChange}/>
        //                 <button type='Button' className='mx-3 py-1 px-1 border-2 border-black' onClick={onSubmit1}>Submit</button>
        //             </form>
        //         </div>
        //         {btn && data["show"]===1 && <TextTrue data={text}/>}
        //         {btn && data["show"]===0 && <TextFalse/>}
        //     </>

        //     );
        // }
        return(
            onSubmit()
        );
}
