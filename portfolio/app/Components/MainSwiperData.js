export default function MainSwiperData(props) {
  return (
    <div className="main-swiper-contents">
      <h2 className="portfolio-title">{props.title}</h2>
      <div className="portfolio-skill">
        {props.skill.map((e, index) => {
          return <p key={index}>{e}</p>;
        })}
      </div>
      <ul className="portfolio-data">
        <li>
          <span>작업일</span>
          <p>{props.date}</p>
        </li>
        <li>
          <span>기여도</span>
          <p>{props.per}</p>
        </li>
      </ul>
      <div className={"portfolio-step-wrap " + props.step}>
        <div className="portfolio-step step01">
          <div className="circle"></div>
          <p className="step-title">기획</p>
        </div>
        <div className="portfolio-step step02">
          <div className="circle"></div>
          <p className="step-title">디자인</p>
        </div>
        <div className="portfolio-step step03">
          <div className="circle"></div>
          <p className="step-title">마크업</p>
        </div>
        <div className="portfolio-step step04">
          <div className="circle"></div>
          <p className="step-title">프론트</p>
        </div>
        <div className="portfolio-step step05">
          <div className="circle"></div>
          <p className="step-title">백</p>
        </div>
        <div className="step-bar">
          <div className="step-bar-inner"></div>
        </div>
      </div>
    </div>
  );
}
