import React from "react";
import "./Feed.css";
import MessageSender from "./MessageSender";
import Post from "./Post";
import StoryReel from "./StoryReel";

function Feed() {
  return (
    <div className="feed">
      <StoryReel />
      <MessageSender />
      <Post
        profilePic="https://scontent-ssn1-1.xx.fbcdn.net/v/t1.18169-9/27073266_1830461346966043_7101114666264933584_n.jpg?_nc_cat=108&ccb=1-3&_nc_sid=09cbfe&_nc_ohc=HD7tTTPjpQAAX865C6P&_nc_ht=scontent-ssn1-1.xx&oh=1e3cd0b3aa34d24b7cf1bd65adcabd84&oe=6124AFF7"
        message="My all, My everything"
        timestamp="This is a timestamp"
        username="Jungpyo"
        image="https://i.ytimg.com/vi/dj_KwfiuRl4/sddefault.jpg"
      />
      <Post
        profilePic="https://scontent-ssn1-1.xx.fbcdn.net/v/t1.6435-9/36933711_1887938014606897_2756301605874696192_n.jpg?_nc_cat=107&ccb=1-3&_nc_sid=09cbfe&_nc_ohc=AGz-UMUBPKgAX-COuXc&_nc_ht=scontent-ssn1-1.xx&oh=b68936401dce10909c6ade60f5cc95a1&oe=61252E68"
        message="How cute they are xD"
        timestamp="This is a timestamp"
        username="Jaehwan"
        image="https://mblogthumb-phinf.pstatic.net/MjAyMDA5MDdfMjQ1/MDAxNTk5NDY1MjUxMjM4.zbBfDyquP67Utlw2d6pFOtHqnJyfkukH3PTDgDTg8Zkg.qQWiX02sgIaExMrU-guWXKDRsmnGBBxeS_bz2Ioy8YUg.PNG.vet6390/%EA%B0%95%EC%95%84%EC%A7%80_%EA%B3%A0%EC%96%91%EC%9D%B4_%ED%95%A8%EA%BB%98_%ED%82%A4%EC%9A%B0%EA%B8%B0.PNG?type=w800"
      />
      <Post
        profilePic="https://t1.daumcdn.net/cfile/tistory/253B144B563F17EE14"
        message="Its hard to lose with me hahaha I'm LoL King"
        timestamp="This is a timestamp"
        username="Dopa"
        image="https://i.ytimg.com/vi/4hsiapbSTJY/hqdefault.jpg"
      />
    </div>
  );
}

export default Feed;
