import { useState } from "react";

export default function App() {

    const [newData,setNewData]=useState("");
    const [memberData,setMemberData]=useState("");

    function setN(event){
      const inputData=event.target.value;
      setNewData(inputData)
    }

    function setM(event){
      const inputData=event.target.value;
      setMemberData(inputData);
    }
    
    function newPass(event){
      if(newData==="AAA"){
        console.log("OK")
        window.location.href = '';
      }else{
        console.log("NO")
      }
      document.newButton.reset();
    }

    function memberPass(event){
      if(memberData==="BBB"){
        console.log("OK")
        window.location.href = '';
        //URLを付ける
      }else{
        console.log("NO")
      }
      document.memberButton.reset();
    }

    return (
      <div>
        <div>
          <header>Apple</header>
        </div>
        <main>
          <div className="new">
          <form name="newButton">
            <input type="text" id="new" onChange={setN}></input>
            <button type="button" onClick={newPass}>newmember</button>
          </form>
          </div>
          <form name="memberButton">
          <div　className="member">
            <input type="text" id="member" onChange={setM}></input>
            <button type="button" onClick={memberPass}>member</button>
          </div>
          </form>
          <div>
            <p className="sub">日本大学文理学部情報科学科Webプログラミング</p>
          </div>
        </main>
      </div>
    );
  }