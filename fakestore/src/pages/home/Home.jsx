import { useEffect, useState } from "react";
import "./Home.css";

const Home = () => {
  const [data, setData] = useState([]);

  let fetchProducts = async () => {
    let myRequest = new Request(`https://fakestoreapi.com/products`, {
      method: "GET",
    });

    let request = await fetch(myRequest);
    let data = await request.json();
    // return data;
    display(data);
  };

  let display = (data) => {
    setData(data);
    console.log(data);
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  return (
    <>
      <div className="main">
        {data.map((value, index) => (
          <a href={"/details/" + (index + 1)} key={index}>
            <div className="patternElement">
              <div className="leftMain">
                <img className="taille" src={value.image} alt="" />
                <p>
                  {value.title}
                  <br /> <span>Brand</span>{" "}
                </p>
              </div>
              <div className="rightMain">
                <h4>{value.price}€</h4>
              </div>
            </div>
          </a>
        ))}
      </div>
    </>
  );
};

export default Home;
