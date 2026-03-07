'use client';
import { useState } from 'react';

export default function Home() {
  const [ourWorkOpen, setOurWorkOpen] = useState(false);
  const [aboutUsOpen, setAboutUsOpen] = useState(false);
  const [contactUsOpen, setContactUsOpen] = useState(false);

  const DropdownMenu = ({ isOpen, items }) => (
    isOpen && (
      <div
        style={{
          position: 'absolute',
          top: '100%',
          left: 0,
          marginTop: '5px',
          backgroundColor: 'white',
          border: '2px solid #4d0000',
          borderRadius: '5px',
          minWidth: '150px',
          boxShadow: '0 4px 8px rgba(0,0,0,0.1)',
          zIndex: 1000,
        }}
      >
        {items.map((item, index) => (
          <div
            key={index}
            style={{
              display: 'block',
              padding: '12px 20px',
              color: '#4d0000',
              cursor: 'pointer',
              borderBottom: index < items.length - 1 ? '1px solid #e0e0e0' : 'none',
              backgroundColor: 'white',
              textAlign: 'left',
              borderRadius: index === items.length - 1 ? '0 0 5px 5px' : '0',
            }}
            onMouseEnter={(e) => (e.target.style.backgroundColor = '#f0f0f0')}
            onMouseLeave={(e) => (e.target.style.backgroundColor = 'white')}
          >
            {item}
          </div>
        ))}
      </div>
    )
  );

  return (
    <main style={{ display: 'flex', flexDirection: 'column', height: '97vh' }}>
      {/* Header Section - 10% height */}
      <header
        style={{
          height: '10%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          backgroundColor: '#f5f5f5',
          color: '#4d0000',
          padding: '0 20px',
        }}
      >
        <h1 style={{ margin: 0, fontSize: '24px', fontWeight: '60' }}>
          SAPNE
        </h1>

        {/* Menu Buttons Container */}
        <div style={{ display: 'flex', gap: '30px', alignItems: 'center' }}>
          {/* Our Work Dropdown */}
          <div style={{ position: 'relative' }}>
            <div
              onMouseEnter={() => setOurWorkOpen(true)}
              onMouseLeave={() => setOurWorkOpen(false)}
              style={{
                color: '#4d0000',
                cursor: 'pointer',
                fontSize: '16px',
                fontWeight: 'bold',
              }}
            >
              Our Work ▼
            </div>
            <div onMouseEnter={() => setOurWorkOpen(true)} onMouseLeave={() => setOurWorkOpen(false)}>
              <DropdownMenu isOpen={ourWorkOpen} items={['Test 1', 'Test 2', 'Test 3']} />
            </div>
          </div>

          {/* About Us Dropdown */}
          <div style={{ position: 'relative' }}>
            <div
              onMouseEnter={() => setAboutUsOpen(true)}
              onMouseLeave={() => setAboutUsOpen(false)}
              style={{
                color: '#4d0000',
                cursor: 'pointer',
                fontSize: '16px',
                fontWeight: 'bold',
              }}
            >
              About Us ▼
            </div>
            <div onMouseEnter={() => setAboutUsOpen(true)} onMouseLeave={() => setAboutUsOpen(false)}>
              <DropdownMenu isOpen={aboutUsOpen} items={['Test 1', 'Test 2', 'Test 3']} />
            </div>
          </div>

          {/* Contact Us Dropdown */}
          <div style={{ position: 'relative' }}>
            <div
              onMouseEnter={() => setContactUsOpen(true)}
              onMouseLeave={() => setContactUsOpen(false)}
              style={{
                color: '#4d0000',
                cursor: 'pointer',
                fontSize: '16px',
                fontWeight: 'bold',
              }}
            >
              Contact Us ▼
            </div>
            <div onMouseEnter={() => setContactUsOpen(true)} onMouseLeave={() => setContactUsOpen(false)}>
              <DropdownMenu isOpen={contactUsOpen} items={['Test 1', 'Test 2', 'Test 3']} />
            </div>
          </div>

          {/* Donate Button - Rightmost */}
          <button
            style={{
              padding: '10px 20px',
              backgroundColor: '#4d0000',
              color: '#f5f5f5',
              border: 'none',
              borderRadius: '5px',
              cursor: 'pointer',
              fontSize: '16px',
              fontWeight: 'bold',
            }}
          >
            Donate
          </button>
        </div>
      </header>

      {/* Image Section - 90% height */}
      <section
        style={{
          height: '90%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          overflow: 'hidden',
        }}
      >
        <img
          src="/kids.jpg"
          alt="SAPNE NGO"
          style={{
            width: '100%',
            height: '100%',
            objectFit: 'cover',
          }}
        />
      </section>
    </main>
  )
}
