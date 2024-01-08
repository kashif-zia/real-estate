import React from "react";

const BootstrapButtonSection = () => {
  return (
   <div className="theme-card">
   <div className="card-header bg-transparent">
      <h5 className="f-w-600"> Bootstrap button</h5>
   </div>
   <div className="card-body pb-0">
      <button type="button" className="btn btn-primary">Primary</button>
       <button type="button" className="btn btn-secondary">Secondary</button>
       <button type="button" className="btn btn-success">Success</button>
       <button type="button" className="btn btn-danger">Danger</button>
       <button type="button" className="btn btn-warning">Warning</button>
       <button type="button" className="btn btn-info">Info</button>
       <button type="button" className="btn btn-light">Light</button>
       <button type="button" className="btn btn-dark">Dark</button>

       <button type="button" className="btn btn-link">Link</button>
   </div>
</div>
   );
};

export default BootstrapButtonSection;