import React, {useEffect, useState} from 'react';
import './Carousele.sass';
import Carousel from 'react-bootstrap/Carousel'
import Spinner from 'react-bootstrap/Spinner'

const Carousele = () => {
 const [user, setUser] = useState(null);
 const [loading, setloading] = useState(true);
  useEffect(() => {
  fetch("https://valorant-api.com/v1/bundles")
  .then((res) => res.json())
  .then((data) => {
   
    const userData = {
      
    slide: data.data[0].displayIcon,
    slideName: data.data[0].displayName,
    slide1: data.data[1].displayIcon,
    slideName1: data.data[1].displayName,
    slide2: data.data[2].displayIcon,
    slideName2: data.data[2].displayName,
    slide3: data.data[3].displayIcon,
    slideName3: data.data[3].displayName,
    slide4: data.data[4].displayIcon,
    slideName4: data.data[4].displayName,
    slide5: data.data[5].displayIcon,
    slideName5: data.data[5].displayName,
   
    };

    setUser(userData);
    setloading(false);
  });
  }, []);
  return(

      <>
          {loading ? (
          <Spinner animation="border" role="status">
            <span className="sr-only"></span>
          </Spinner>
          ) : null}
        <Carousel fade>
          {user ?(
              <Carousel.Item>
                <img
                  className="d-block w-100"
                  src={user.slide}
                  alt="{user.slideName}"
                />
                <Carousel.Caption>
                  <h3>{user.slideName}</h3>
                </Carousel.Caption>
              </Carousel.Item>
            ) : null}
           {user ?(
              <Carousel.Item>
                <img
                  className="d-block w-100"
                  src={user.slide1}
                  alt="{user.slideName1}"
                />
                <Carousel.Caption>
                  <h3>{user.slideName1}</h3>
                </Carousel.Caption>
              </Carousel.Item>
            ) : null}
           {user ?(
              <Carousel.Item>
                <img
                  className="d-block w-100"
                  src={user.slide2}
                  alt="{user.slideName2}"
                />
                <Carousel.Caption>
                  <h3>{user.slideName2}</h3>
                </Carousel.Caption>
              </Carousel.Item>
            ) : null}
           {user ?(
              <Carousel.Item>
                <img
                  className="d-block w-100"
                  src={user.slide3}
                  alt="{user.slideName3}"
                />
                <Carousel.Caption>
                  <h3>{user.slideName3}</h3>
                </Carousel.Caption>
              </Carousel.Item>
            ) : null}
           {user ?(
              <Carousel.Item>
                <img
                  className="d-block w-100"
                  src={user.slide4}
                  alt="{user.slideName4}"
                />
                <Carousel.Caption>
                  <h3>{user.slideName4}</h3>
                </Carousel.Caption>
              </Carousel.Item>
            ) : null}
           {user ?(
              <Carousel.Item>
                <img
                  className="d-block w-100"
                  src={user.slide5}
                  alt="{user.slideName5}"
                />
                <Carousel.Caption>
                  <h3>{user.slideName5}</h3>
                </Carousel.Caption>
              </Carousel.Item>
            ) : null}
        </Carousel>
      </>


  );
}
export default Carousele;