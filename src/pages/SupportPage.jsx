import React from 'react';
const SupportPage = () => (
  <div style={{backgroundColor: '#add8e6', backgroundImage: 'linear-gradient(315deg, #add8e6 0%, #fffafa 74%)', minHeight: '100vh', padding: '32px', textAlign: 'center'}}>
    <h2>Support</h2>
    <p>Need help or want to give feedback? Contact us at <a href="mailto:support@hope-i.com">support@hope-i.com</a></p>
    <form style={{marginTop: '24px'}}>
      <textarea placeholder="Your feedback..." style={{width: '100%', maxWidth: 400, minHeight: 80, borderRadius: 8, padding: 8}} />
      <br />
      <button type="submit" style={{marginTop: 12, padding: '8px 24px', borderRadius: 8, background: '#1e90ff', color: '#fff', border: 'none'}}>Send Feedback</button>
    </form>
  </div>
);
export default SupportPage; 