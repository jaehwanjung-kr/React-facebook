import React from "react";
import Story from "./Story";
import "./StoryReel.css";

function StoryReel() {
  return (
    <div className="storyReel">
      <Story
        image="https://i.ytimg.com/vi/7Rq2O6c_cSE/maxresdefault.jpg"
        profileSrc="https://t1.daumcdn.net/cfile/tistory/253B144B563F17EE14"
        title="Dopa"
      />
      <Story
        image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSLG37Z-lV0UPSbGowNWc_6eqr-XLVThw03pw&usqp=CAU"
        profileSrc="https://i0.wp.com/farbe-blog.com/wp-content/uploads/2020/12/854cfa0bff0aec283b34f4ff5f2a964c490382ce9617c7899d3b3423a2cb1b919d1b21b611e9a1939a00d381ba84895b0ea9df5d372edef031ad0fbd6341d7728513be0a976955be66aca3362c936159f1923a410068ac9a83773380dfaf6c1b-1.png?resize=800%2C800&ssl=1"
        title="Ralo"
      />
      <Story
        image="https://img.insight.co.kr/static/2020/01/20/700/u855v1s8ym0mg09bdzb3.jpg"
        profileSrc="https://w.namu.la/s/9526a1f971600dedc51a2ec5ceed6333094d9074ded5fb920a0b7ba4632a038eed8372db46124ca3dcd062558c3341f523895f405c107ee48b48474ab2689e8282f067067930b1cae34c1e47a577f6fae0183111b0e78e371e67a8df75e643e3"
        title="MonstRat"
      />
      <Story
        image="https://mblogthumb-phinf.pstatic.net/MjAxODEwMDVfMTU1/MDAxNTM4NzMxNzI0NDA4._jlKvpS83wyOCN0t7p5Op9wRkU2fEHVEwMhIoROpBOkg.UNIv_LCExkgZ7-7kF6YPBIpXmaXHRFxH1htV-5oJOiwg.JPEG.tjwlscjftj/12.jpg?type=w800"
        profileSrc="https://scontent-ssn1-1.xx.fbcdn.net/v/t1.18169-9/27073266_1830461346966043_7101114666264933584_n.jpg?_nc_cat=108&ccb=1-3&_nc_sid=09cbfe&_nc_ohc=HD7tTTPjpQAAX865C6P&_nc_ht=scontent-ssn1-1.xx&oh=1e3cd0b3aa34d24b7cf1bd65adcabd84&oe=6124AFF7"
        title="Jungpyo"
      />
      <Story
        image="https://cdn.mkhealth.co.kr/news/photo/202004/img_MKH200424005_0.jpg"
        profileSrc="https://scontent-ssn1-1.xx.fbcdn.net/v/t1.6435-9/36933711_1887938014606897_2756301605874696192_n.jpg?_nc_cat=107&ccb=1-3&_nc_sid=09cbfe&_nc_ohc=AGz-UMUBPKgAX-COuXc&_nc_ht=scontent-ssn1-1.xx&oh=b68936401dce10909c6ade60f5cc95a1&oe=61252E68"
        title="Jaehwan"
      />
    </div>
  );
}

export default StoryReel;
