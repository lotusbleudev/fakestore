import { useParams } from "react-router-dom";
import "./category.css";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";

const Category = () => {
  const { category } = useParams();
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch(`https://fakestoreapi.com/products/category/${category}`)
      .then((res) => res.json())
      .then((json) => setData(json));
  }, [category]);

  return (
    <>
      <section>
        <h1>{category}</h1>
        {data &&
          data.map((d, i) => (
            <Link to={"/details/" + d.id} key={i}>
              <article>
                <div>
                  <img src={d.image} alt="" />
                  <p>{d.title}</p>
                </div>
                <p>{d.price}</p>
              </article>
            </Link>
          ))}
      </section>
    </>
  );
};

export default Category;
