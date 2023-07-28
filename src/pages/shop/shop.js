import React,{ useState } from "react";
import { PRODUCTS } from "../../products";
import { Product } from "./product";
import "./shop.css";
import { Col, Row } from "react-bootstrap";
import 'bootstrap/dist/css/bootstrap.min.css';

export const Shop = () => {
  const itemsList = PRODUCTS;
  const [filteredList, setFilteredList] = useState(itemsList); 
  const [searchQuery, setSearchQuery] = useState("");
  

  //Search list of objects
  const handleSearch = (event) => {
    const query = event.target.value;
    setSearchQuery(query);
    const searchList = itemsList.filter((item) => {
      return item.productName.toLowerCase().indexOf(query.toLowerCase()) !== -1;
    });
    setFilteredList(searchList);
  };

  return (
    <div className="shop">
      <div className="shopTitle">
        <input id="search-box" placeholder='Search Company Name...' onChange={handleSearch} />
      </div>
      <div className="products">
      <Row lg={4} md={2} xs={1}>
        {filteredList.map((product) => (
          <Col>
            <Product data={product} />
          </Col>
        ))}
      </Row>
      </div>
    </div>
  );
};