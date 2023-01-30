import { useState, useEffect, useCallback } from "react";
import moment from "moment";
import { Carousel, CarouselIndicators, CarouselItem } from "reactstrap";
import { Link } from "react-router-dom";
import { Container, Col, Row } from "reactstrap";
import "bootstrap/dist/css/bootstrap.min.css";
//import "../../assets/css/now-ui-kit.min.css";
import "./fixture.style.css";

function Fixture() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [animating, setAnimating] = useState(false);
  const [fixture, setFixture] = useState([]);

  const getUrl = () => {
    return "http://localhost:5500/fixtures";
  };

  const getFixture = useCallback(async () => {
    const response = await fetch(getUrl());
    const data = await response.json();
    setFixture(data);
  }, []);

  useEffect(() => {
    getFixture();
  }, [getFixture]);

  //console.log(fixture);
  const onExiting = () => {
    setAnimating(true);
    console.log("render");
  };
  const onExited = () => {
    setAnimating(false);
  };
  const next = () => {
    if (animating) return;
    const nextIndex = activeIndex === fixture.length - 1 ? 0 : activeIndex + 1;
    setActiveIndex(nextIndex);
  };
  const previous = () => {
    if (animating) return;
    const nextIndex = activeIndex === 0 ? fixture.length - 1 : activeIndex - 1;
    setActiveIndex(nextIndex);
  };
  const goToIndex = (newIndex) => {
    if (animating) return;
    setActiveIndex(newIndex);
  };
  return (
    <div className="mb-14 bg-white" id="fixture">
      <Container>
        <Row className="howto justify-content-center">
        <Col md={6}>
            <Carousel
              className=" carousel_height"
              activeIndex={activeIndex}
              next={next}
              previous={previous}
              enableTouch={true}
            >
              <CarouselIndicators
                items={fixture}
                activeIndex={activeIndex}
                onClickHandler={goToIndex}
              />
              {fixture.map((item) => {
                return (
                  <CarouselItem
                    onExiting={onExiting}
                    onExited={onExited}
                    key={item.fixture.id}
                  >
                    <div className="fixture_container" >
                      <div className="fixture-info">
                        <div className="fixture-date">
                          <p>{moment(item.fixture.date).format("D MMM")}</p>
                        </div>
                        <div className="fixture-type">
                          <p>
                            {item.league.name}, {item.league.round}
                          </p>
                        </div>
                      </div>
                      <div className="fixture">
                        <div className="team-info">
                          <p>{item.teams.home.name}</p>
                          <div className="team-logo">
                            <img
                              className="team-logo"
                              src={item.teams.home.logo}
                            />
                          </div>
                        </div>
                        <div className="fixture-kickoff">
                          <p>
                            {moment(item.fixture.date).format("ddd, HH:mm ")}
                          </p>
                        </div>
                        <div className="team-info">
                          <div className="team-logo">
                            <img
                              className="team-logo"
                              src={item.teams.away.logo}
                            />
                          </div>
                          <p>{item.teams.away.name}</p>
                        </div>
                      </div>
                    </div>
                  </CarouselItem>
                );
              })}
              <Link
                className="carousel-control-prev"
                data-slide="prev"
                onClick={(e) => {
                  e.preventDefault();
                  previous();
                }}
                role="button"
              >
                <i className="now-ui-icons arrows-1_minimal-left" />
              </Link>
              <Link
                className="carousel-control-next"
                data-slide="next"
                onClick={(e) => {
                  e.preventDefault();
                  next();
                }}
                role="button"
              >
                <i className="now-ui-icons arrows-1_minimal-right" />
              </Link>
            </Carousel>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

//   useEffect(() => {
//     const fetchData = async () => {
//       const response = await fetch("http://localhost:5500/fixtures");
//       const json = await response.json();
//       //console.log(json)
//       json.map((item) => {
//         const teams = item.teams;
//         console.log('teams:',teams)
//         setFixture(teams)
//         //console.log(teams)
//         const away = teams.away.name
//         const home =teams.home.name
//         const homeLogo = teams.home.logo
//         const awayLogo = teams.away.logo
//         //console.log(teams.home.name,teams.away.name);
//         //console.log(teams);
//         //console.log(away)
//         //console.log(teams.away.logo);
//         return teams
//       });

//     };
//     // call the function
//     fetchData()
//       // make sure to catch any error
//       .catch(console.error);

//   }, []);
//   //console.log(awayLogo)
//   console.log('render')
// console.log(fixture)
// useEffect(() => {
//   const options = {
//     method: "GET",
//     headers: {
//       "X-RapidAPI-Key": "e67f45540dmsh7e5fd2507dadc3cp19a187jsnbdfc75526260",
//       "X-RapidAPI-Host": "api-football-v1.p.rapidapi.com",
//     },
//   };

//   fetch(
//     "https://api-football-v1.p.rapidapi.com/v3/fixtures?team=40&next=5",
//     options
//   )
//     .then((response) => {
//       return response.json();
//     })
//     .then((json) => {
//       let data = json.response;
//       console.log({ data });
//     });
// }, []);

/*{
  return (
    <>
      <div className="fixture_container">
        <div className="fixture-info">
          <div className="fixture-date">
            <p>12 Jan </p>
          </div>
          <div className="fixture-type">
            <p>FA Cup 4th Round</p>
          </div>
        </div>
        <div className="fixture">
          <div className="team-info">
            <p>Brighton</p>
            <div className="team-logo">
              <Team1 className="lfc-icon" />
            </div>
          </div>
          <div className="fixture-kickoff">
            <p>Sun, 3:00 </p>
          </div>
          <div className="team-info">
            <div className="team-logo">
              <Lfc_Icon className="lfc-icon" />
            </div>
            <p>Liverpool</p>
          </div>
        </div>
      </div> 
    </>
  );
}
}*/

export default Fixture;
