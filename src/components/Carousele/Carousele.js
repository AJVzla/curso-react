import React, {useEffect, useState} from 'react';
import './Carousele.sass';
import Carousel from 'react-bootstrap/Carousel';
import Spinner from 'react-bootstrap/Spinner';
import swal from 'sweetalert';

const Carousele = () => {
 const [user, setUser] = useState([]);
 const [loading, setLoading] = useState(false);
  useEffect(() => {
  setLoading(true);
  fetch("https://valorant-api.com/v1/bundles")
  .then((res) => res.json())
  .then((data) => {
   
    const userData = [
      
    {
      slide: data.data[4].displayIcon,
      slideName: data.data[4].displayName,
    },
    {
      slide: data.data[2].displayIcon,
    slideName: data.data[2].displayName,
    },
    {
      slide: data.data[0].displayIcon,
    slideName: data.data[0].displayName,
    },
    {
      slide: data.data[5].displayIcon,
    slideName: data.data[5].displayName,
    },
    {
      slide: data.data[22].displayIcon,
    slideName: data.data[22].displayName,
    },
    {
      slide: data.data[7].displayIcon,
    slideName: data.data[7].displayName,
    },

    {
      slide: data.data[24].displayIcon,
      slideName: data.data[24].displayName,
    },
   
   ];
   setUser(userData);
   console.log(data);
  })
  .catch((err) => {
    swal("Houston", "we have a problem in carousel component", "error");
  })
  .finally(() => {
    setLoading(false);
  });
  }, []);


  return(

      <>
         {loading ? (
        <Spinner animation="grow" variant="dark" role="status">
          <span className="sr-only"></span>
        </Spinner>
        ) : null}

        <Carousel fade>
        {user.map((element, i) => {
            return (
             <Carousel.Item>
                <img
                  className="d-block w-100"
                  src={element.slide}
                  alt="{element.slideName}"
                />
                <Carousel.Caption>
                  <h3>{element.slideName}</h3>
                </Carousel.Caption>
              </Carousel.Item>
            );
          })}
        </Carousel>
      </>


  );
}
export default Carousele;