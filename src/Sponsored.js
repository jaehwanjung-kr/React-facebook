import React from "react";
import "./Sponsored.css";
import SponsorItem from "./SponsorItem";

function Sponsored() {
  return (
    <div className="sponsored">
      <h>Sponsored</h>
      <SponsorItem
        src="https://scontent-ssn1-1.xx.fbcdn.net/v/t45.1600-4/cp0/q90/spS444/p296x100/213343665_23847579271110126_7152875122753548665_n.png.jpg?_nc_cat=107&ccb=1-3&_nc_sid=67cdda&_nc_ohc=JnCdZDyadRcAX-ef1iS&_nc_oc=AQnuQNJHSZOLmALlzmcefCujZoiGe6kzwOIALW5ADuHkK4dT9TK7EhDHgpLS5Lty5A0&_nc_ht=scontent-ssn1-1.xx&oh=4d7c0641fcd1a5bbf685028f6c28ebaf&oe=6108E76B"
        title="단 10만원대로 이걸 다~ 배울수 있다고?"
      />
      <SponsorItem
        src="https://scontent-ssn1-1.xx.fbcdn.net/v/t45.1600-4/cp0/q90/spS444/p296x100/214472704_23848355638640117_2495540880817255449_n.png.jpg?_nc_cat=107&ccb=1-3&_nc_sid=67cdda&_nc_ohc=OxJx2K6lECcAX87Wjyl&_nc_ht=scontent-ssn1-1.xx&oh=046dd4bfbf1a6dd63731ff87aee3f5aa&oe=6109DFE4"
        title="교육비 무료🔥 엘리스 AI 트랙 3기 모집!"
      />
    </div>
  );
}

export default Sponsored;
