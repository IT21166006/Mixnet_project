import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import "../../Styles/store.css";

function Itemtable() {
  const [items, setItems] = useState([]);
  const [searchInput, setSearchInput] = useState("");

  // Fetch data
  function getItems() {
    axios
      .get("http://localhost:8070/emp/")
      .then((res) => {
        setItems(res.data);
      })
      .catch((err) => {
        alert(err.message);
      });
    setSearchInput("");
  }

  useEffect(() => {
    getItems();
  }, []);

  // Delete data
  function deleteItem(item) {
    if (window.confirm('Do you want to delete "' + item.itemname + '" ?')) {
      axios
        .delete(`http://localhost:8070/emp/delete/${item._id}`)
        .then(() => {
          getItems();
        })
        .catch((err) => {
          alert(err);
        });
    }
  }

  // Search data
  function searchItem() {
    if (searchInput !== "") {
      axios
        .get(`http://localhost:8070/emp/search/${searchInput}`)
        .then((res) => {
          setItems(res.data);
        })
        .catch((err) => {
          alert(err.message);
        });
    } else {
      getItems();
    }
  }

  useEffect(() => {
    const delayDebounceFn = setTimeout(() => {
      searchItem();
    }, 1000);
    return () => clearTimeout(delayDebounceFn);
  }, [searchInput]);

  return (
    <div className="container">
      <section id="content">
        <main>
          <div className="head-title">
            <div className="left">
              <center>
                <h1 className="manageoffertitle">Marketplace</h1>
              </center>
            </div>
          </div>

          <div className="item-cards">
            {items.map((item, index) => (
              <div className="item-card" key={index}>
                <img
                  src={`http://localhost:8070/uploads/${item.itemimage}`}
                  alt={item.itemname}
                  style={{ width: '80px', height: '80px' }}
                />
                <h3>{item.itemname}</h3>
                <p>{item.itemdescription}</p>
                <p>Price: {item.itemprice}</p>
                <p>Owner: {item.itemownerdetails}</p>
                <div className="btn-group">
                  <Link to={`/update/${item._id}`}>
                    <button className="btn btn-success">Edit</button>
                  </Link>
                  <button
                    className="btn btn-danger"
                    onClick={() => deleteItem(item)}
                  >
                    Remove
                  </button>
                </div>
              </div>
            ))}
          </div>

          <div className="newofferbtn">
            <Link to={"/createitem"}>
              <button className="btn btn-success">
                <i className="bx bx-user-plus"></i>
                <span className="text">Create Item</span>
              </button>
            </Link>
          </div>
        </main>
      </section>
    </div>
  );
}

export default Itemtable;
