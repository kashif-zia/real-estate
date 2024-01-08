import React from "react";
import { Container, Row } from "reactstrap";
import { Logo } from "../../components/elements/Logo";
import Img from "../../libs/utils/BackgroundImageRatio";
import useTimer from "../../libs/utils/useTimer";

const ComingSoon = () => {
  const [days, hours, minutes, seconds] = useTimer(new Date("dec 1, 2022 16:37:52").getTime());
  return (
    <>
      <div className='coming-soon comingsoon-countdown'>
        <Img src='/assets/images/inner-pages/coming-soon.jpg' alt='' className='img-fluid bg-img' />
        <Container>
          <Row>
            <div className='col-xl-6 offset-xl-3 col-lg-8 offset-lg-2'>
              <div className='coming-soon-detail'>
                <div>
                  <Logo />
                  <h2>
                    Our website is <br /> coming soon, follow us for update now !
                  </h2>
                  <form action='#' className='theme-form w-100'>
                    <div className='form-group'>
                      <input type='text' name='password' id='name' className='form-control' placeholder='Enter your email address' required />
                      <button type='submit' className='btn btn-gradient btn-flat'>
                        subscribe
                      </button>
                    </div>
                  </form>
                  <div className='timer'>
                    <ul>
                      <li>
                        <div className='counter'>
                          <div>
                            <span id='days'>{days}</span>days
                          </div>
                        </div>
                      </li>
                      <li>
                        <div className='counter'>
                          <div>
                            <span id='hours'>{hours}</span>Hour
                          </div>
                        </div>
                      </li>
                      <li>
                        <div className='counter'>
                          <div>
                            <span id='minutes'>{minutes}</span>min
                          </div>
                        </div>
                      </li>
                      <li>
                        <div className='counter'>
                          <div>
                            <span id='seconds'>{seconds}</span>sec
                          </div>
                        </div>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </Row>
        </Container>
        <div className='cloud-img'>
          <Img src='/assets/images/others/cloud.png' alt='' className='img-fluid bg-img' />
        </div>
      </div>
    </>
  );
};

export default ComingSoon;
