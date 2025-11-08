import React from 'react';

export default function About() {
  return (
    <section style={{ paddingTop: 100, textAlign: 'center', background: '#f9fafb', minHeight: '100vh' }}>
      <h2 style={{ fontSize: '2rem', color: '#333', marginBottom: '10px' }}>About Winter Vogue</h2>
      <p style={{ maxWidth: 700, margin: '10px auto', lineHeight: '1.6', fontSize: '1.1rem', color: '#555' }}>
        <strong>Winter Vogue 2025</strong> brings you stylish, eco-friendly winter wear curated from sustainable brands.
        Our mission is to keep you warm, confident, and kind to the planet — where fashion meets responsibility.
      </p>

      <div style={{
        display: 'flex',
        justifyContent: 'center',
        flexWrap: 'wrap',
        gap: '20px',
        marginTop: '40px',
      }}>
        <div style={{
          width: '280px',
          background: 'white',
          borderRadius: '10px',
          padding: '20px',
          boxShadow: '0 2px 10px rgba(0,0,0,0.1)',
        }}>
          <h3>🌿 Sustainability</h3>
          <p style={{ color: '#555' }}>
            Every product is crafted using eco-friendly materials, ensuring minimal impact on the environment.
          </p>
        </div>

        <div style={{
          width: '280px',
          background: 'white',
          borderRadius: '10px',
          padding: '20px',
          boxShadow: '0 2px 10px rgba(0,0,0,0.1)',
        }}>
          <h3>🧥 Quality & Comfort</h3>
          <p style={{ color: '#555' }}>
            Experience premium winter fashion that’s both warm and breathable — designed for comfort and durability.
          </p>
        </div>

        <div style={{
          width: '280px',
          background: 'white',
          borderRadius: '10px',
          padding: '20px',
          boxShadow: '0 2px 10px rgba(0,0,0,0.1)',
        }}>
          <h3>🌎 Our Vision</h3>
          <p style={{ color: '#555' }}>
            To build a global community that embraces sustainable fashion — making winters elegant and eco-conscious.
          </p>
        </div>
      </div>

      <div style={{ marginTop: '50px', maxWidth: 700, marginInline: 'auto', color: '#444' }}>
        <h3>💬 What Makes Us Special?</h3>
        <p>
          Winter Vogue isn’t just about clothing — it’s a movement towards mindful living. 
          With every purchase, you support artisans, eco-conscious designers, and green manufacturing practices.  
          Join us in redefining winter style — <strong>fashion with a purpose.</strong>
        </p>
      </div>
    </section>
  );
}
