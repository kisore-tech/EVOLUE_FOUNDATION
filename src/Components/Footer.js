import React from 'react';

export default function Footer() {
  const headingStyle = {
    fontFamily: 'Open Sans, sans-serif',
    fontWeight: '600',
    fontSize: '15px',
    textTransform: 'uppercase',
    color: '#FFFFFF',
    marginBottom: '10px'
  };

  const sectionTitle = {
    fontWeight: '600',
    marginTop: '20px',
    marginBottom: '5px',
  };

  const textItem = {
    margin: '2px 0',
  };

  return (
    <>
      <div style={{ height: '5px', width: '100%', backgroundColor: '#005FA5' }}></div>
      
      <div style={{
        width: '100%',
        backgroundColor: '#005FA5',
        padding: '30px 50px',
        color: '#FFFFFF',
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'space-between',
        fontFamily: 'Open Sans, sans-serif'
      }}>
        {/* Left Section: Our Activities */}
        <div style={{ flex: '1 1 300px', minWidth: '250px' }}>
          <h4 style={headingStyle}>OUR ACTIVITIES</h4>
          <hr style={{ width: '92%', height: '4px', backgroundColor: 'white', border: 'none' }} />

          <div style={sectionTitle}>Living</div>
          <div style={textItem}>Food Distribution</div>
          <div style={textItem}>Youth Welfare Centers</div>
          <div style={textItem}>Caring Through Clothing</div>

          <div style={sectionTitle}>Loving</div>
          <div style={textItem}>Action For Environment Change</div>
          <div style={textItem}>Medical Assistance</div>
          <div style={textItem}>Women Economic & Social Development</div>

          <div style={sectionTitle}>Learning</div>
          <div style={textItem}>Access To Education Initiative</div>
          <div style={textItem}>Skills For Better Tomorrow</div>
          <div style={textItem}>Mental Wellness Programs</div>
        </div>

        {/* Middle Section: About Us */}
        <div style={{ flex: '1 1 200px', minWidth: '200px' }}>
          <h4 style={headingStyle}>ABOUT US</h4>
          <hr style={{ width: '92%', height: '4px', backgroundColor: 'white', border: 'none' }} />
          <div style={textItem}>Vision And Mission</div>
          <div style={textItem}>Our Identity</div>
          <div style={textItem}>Our Impact</div>
          <div style={textItem}>Our Project Locations</div>
          <div style={textItem}>Audit Report</div>
          <div style={textItem}>Our Team</div>
          <div style={textItem}>Future Strategy</div>
        </div>

        {/* Get Involved */}
        <div style={{ flex: '1 1 200px', minWidth: '200px' }}>
          <h4 style={headingStyle}>GET INVOLVED</h4>
          <hr style={{ width: '92%', height: '4px', backgroundColor: 'white', border: 'none' }} />
          <div style={textItem}>Become A Volunteer</div>
          <div style={textItem}>Spread The Words</div>
          <div style={textItem}>Donate <span style={{ fontSize: '11px' }}>(One-Time/Monthly Basis)</span></div>
          <div style={textItem}>Corporate Partners</div>
          <div style={textItem}>Benesity</div>
          <div style={textItem}>CSR</div>
        </div>

        {/* Contact Info */}
        <div style={{ flex: '1 1 300px', minWidth: '280px' }}>
          <h3 style={{ fontWeight: 'bold' }}>EVOLVE Sangh Foundation</h3>
          <p style={{ marginBottom: '5px' }}>
            <strong>232- Bapu Kutir, Lakhanpur Housing Society,</strong>
          </p>
          <p style={{ marginBottom: '20px' }}>
            <strong>Awadpuri, Kanpur 208024</strong>
          </p>
          <p>
            <strong>Contact Us:</strong> Ph No.: +91 8700000XXX<br />
            <strong>E-Mail:</strong> Info@Evolve.Org
          </p>
          <div style={{ display: 'flex', gap: '10px', marginTop: '20px' }}>
            {Array(5).fill(0).map((_, i) => (
              <div key={i} style={{ width: 40, height: 40, borderRadius: '50%', backgroundColor: 'white' }} />
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
