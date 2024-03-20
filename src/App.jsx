import axios from "axios";
import { useEffect, useState } from "react";
import { Col, Container, Row } from "react-bootstrap";

const App = () => {
  let [product, setProduct] = useState([]);

  let getdata = () => {
    axios.get("https://dummyjson.com/products").then((response) => {
      setProduct(response.data.products);
    });
  };
  useEffect(() => {
    getdata();
  }, []);
  return (
    <>
      <Container>
        <div className="main">
          <Row>
            <h1 className="text-center">MultiShop</h1>
            {product.map((item) => (
              <Col xs={4}>
                <h4>{item.title}</h4>
                <img src={item.thumbnail} className="w-100" alt="" />
                <h5>Price:${item.price}</h5>
              </Col>
            ))}
          </Row>
        </div>
      </Container>
    </>
  );
};

export default App;
