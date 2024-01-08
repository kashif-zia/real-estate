import React, { useState } from "react";
import Card from "./Card";

const CardsPaymentTab = () => {
  const [data, setData] = useState([
    { id: 1, paymentCard: "master", cardType: "Credit", cardNumber: "XXXX-XXXX-XXXX-3401", date: "03/25/2015", name: "Zack Lee", cvv: 123 },
    { id: 2, paymentCard: "visa", cardType: "Credit", cardNumber: "XXXX-XXXX-XXXX-3401", date: "03/25/2021", name: "John Doe", cvv: 123 },
    { id: 3, paymentCard: "american-express", cardType: "Credit", cardNumber: "XXXX-XXXX-XXXX-3401", date: "03/25/2019", name: "Robin Zack", cvv: 123 },
  ]);
  const [modal, setModal] = useState(false);
  const [editId, setEditId] = useState();

  return (
    <div className="dashboard-content">
      <div className="payment-user" id="payment">
        <div className="common-card">
          <div className="common-header">
            <h5>Cards & payment</h5>
          </div>
          <div className="row card-payment g-3">
            {data.map((elem, i) => (
              <div className="col-xl-4 col-sm-6" key={i}>
                <div className={`payment-card  ${elem.paymentCard}`}>
                  <div className="card-details">
                    <div className="text-end">
                      <h6>{elem.cardType || "credit"}</h6>
                    </div>
                    <div className="card-number">
                      <div>
                        <img src="/assets/images/icon/chip.png" className="img-fluid" alt="" />
                        <img src="/assets/images/icon/wifi.png" className="img-fluid" alt="" />
                      </div>
                      <h3>XXXX-XXXX-XXXX-3401</h3>
                    </div>
                    <div className="valid-detail">
                      <div className="title">
                        <span>valid</span>
                        <span>thru</span>
                      </div>
                      <div className="date">
                        <h3>{new Date(elem.date).getDate() + "/" + (Number(new Date(elem.date).getMonth()) + 1)}</h3>
                      </div>
                    </div>
                    <div className="name-detail">
                      <div className="name">
                        <h5>{elem.name}</h5>
                      </div>
                      <div>
                        {"american-express" === elem.paymentCard ? (
                          <img src={`/assets/images/icon/american.jpg`} className="img-fluid" alt="" />
                        ) : (
                          <img src={`/assets/images/icon/${elem.paymentCard}.png`} className="img-fluid" alt="" />
                        )}
                      </div>
                    </div>
                  </div>
                  <div className="edit-card">
                    <a
                      onClick={() => {
                        setModal("edit");
                        setEditId(elem.id);
                      }}>
                      edit
                    </a>
                    <a onClick={() => setData((prev) => prev.filter((data) => data.id !== elem.id))}>delete</a>
                  </div>
                </div>
              </div>
            ))}

            <div className="col-xl-4 col-sm-6">
              <div className="payment-card add-card" onClick={() => setModal("add")}>
                <div className="card-details">
                  <div>
                    <i className="fas fa-plus-circle"></i>
                    <h5>add new card</h5>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Card modal={modal} setModal={setModal} setData={setData} editId={modal === "edit" && editId && editId} data={data} />
    </div>
  );
};

export default CardsPaymentTab;
