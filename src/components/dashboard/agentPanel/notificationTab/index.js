import React from "react";

const AgentNotifications = () => {
  return (
    <div className='dashboard-content'>
      <div className='tab-listing' id='notifcation'>
        <div className='common-card'>
          <div className='common-header notification-h'>
            <h5>Notifications</h5>
          </div>
          <div className='row'>
          
            <div className='card notification-card notification-invitation mb-3'>
              <div className='card-body'>
                <div className='message-box'>
                  <div className='notification-message'>
                    <div className="notificaton-img-box">
                    <div className='dot-div'>
                      <span className='notification-dot'></span>
                    </div>
                    <div className='notification-img'>
                      <div className='change-pic'>
                        <img src='/assets/images/avatar/3.jpg' className='notification_img' alt='' />
                      </div>
                    </div>
                    </div>
                   <div className="message"> Jane invited you to join 'Familia' group</div>
                  </div>
                  <div className='message-time'>9:30am</div>
                </div>
              </div>
            </div>

            <div className='card notification-card notification-invitation mb-3'>
              <div className='card-body'>
                <div className='message-box'>
                  <div className='notification-message'>
                    <div className="notificaton-img-box">
                    <div className='dot-div'>
                      <span className='notification-dot'></span>
                    </div>
                    <div className='notification-img'>
                      <div className='change-pic'>
                        <img src='/assets/images/avatar/3.jpg' className='notification_img' alt='' />
                      </div>
                    </div>
                    </div>
                   <div className="message"> Jane invited you to join 'Familia' group</div>
                  </div>
                  <div className='message-time'>9:30am</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AgentNotifications;
