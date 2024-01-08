import React from "react";
import { Col } from "reactstrap";
import InputForm from "../../home/slider-filter-search/homeElements/InputForm";

const MapModal = (props) => {
  return (
    <div className={`modal fade map-modal ${props.mapModal ? "d-block show" : ""}`} id="mapmodal" tabIndex="-1" role="dialog" aria-hidden="true">
      <div className="modal-dialog modal-dialog-centered modal-lg" role="document">
        <div className="modal-content">
          <button type="button" className="btn-close" aria-label="Close" onClick={() => props.setMapModal(false)}>
            <span aria-hidden="true">&times;</span>
          </button>
          <div className="modal-body">
            <div className="container-fluid">
              <div className="row">
                <Col xl="3" lg="5">
                  <div className="left-sidebar">
                    <div className="filter-cards">
                      <div className="advance-card">
                        <h6>filter</h6>
                        <InputForm />
                      </div>
                    </div>
                  </div>
                </Col>
                <Col xl="9" lg="7" className=" map-section mt-0">
                  {props.children}
                </Col>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MapModal;
