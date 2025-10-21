import React, { useState } from 'react';

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <header
      style={{
        backgroundColor: '#ffffff',
        boxShadow: '0 2px 8px rgba(0, 0, 0, 0.1)',
        position: 'sticky',
        top: 0,
        zIndex: 50,
      }}
    >
      <div
        style={{
          maxWidth: '1200px',
          margin: '0 auto',
          padding: '0 20px',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          height: '60px',
        }}
      >
        {/* Logo */}
        <a
          href="#home"
          style={{
            fontSize: '24px',
            fontWeight: 'bold',
            color: '#2563eb',
            textDecoration: 'none',
            transition: 'color 0.3s ease',
          }}
          onMouseEnter={(e) => (e.target.style.color = '#1d4ed8')}
          onMouseLeave={(e) => (e.target.style.color = '#2563eb')}
        >
          EventHub
        </a>

        {/* Desktop Navigation */}
        <nav
          style={{
            display: 'flex',
            gap: '5px',
            alignItems: 'center',
          }}
        >
          <a
            href="#home"
            style={{
              padding: '8px 16px',
              color: '#374151',
              textDecoration: 'none',
              fontWeight: '500',
              transition: 'color 0.3s ease',
              cursor: 'pointer',
              fontSize: '15px',
            }}
            onMouseEnter={(e) => (e.target.style.color = '#2563eb')}
            onMouseLeave={(e) => (e.target.style.color = '#374151')}
          >
            Home
          </a>

          <a
            href="#about"
            style={{
              padding: '8px 16px',
              color: '#374151',
              textDecoration: 'none',
              fontWeight: '500',
              transition: 'color 0.3s ease',
              cursor: 'pointer',
              fontSize: '15px',
            }}
            onMouseEnter={(e) => (e.target.style.color = '#2563eb')}
            onMouseLeave={(e) => (e.target.style.color = '#374151')}
          >
            About
          </a>

          <a
            href="#contact"
            style={{
              padding: '8px 16px',
              color: '#374151',
              textDecoration: 'none',
              fontWeight: '500',
              transition: 'color 0.3s ease',
              cursor: 'pointer',
              fontSize: '15px',
            }}
            onMouseEnter={(e) => (e.target.style.color = '#2563eb')}
            onMouseLeave={(e) => (e.target.style.color = '#374151')}
          >
            Contact
          </a>

          {/* Events Dropdown */}
          <div style={{ position: 'relative', display: 'inline-block' }}>
            <button
              style={{
                padding: '8px 16px',
                color: '#374151',
                backgroundColor: 'transparent',
                border: 'none',
                fontWeight: '500',
                transition: 'color 0.3s ease',
                cursor: 'pointer',
                fontSize: '15px',
                display: 'flex',
                alignItems: 'center',
                gap: '4px',
              }}
            >
              Events <span style={{ fontSize: '12px' }}>▼</span>
            </button>

            <div
              style={{
                position: 'absolute',
                top: '100%',
                left: 0,
                backgroundColor: '#ffffff',
                borderRadius: '8px',
                boxShadow: '0 4px 12px rgba(0, 0, 0, 0.15)',
                minWidth: '200px',
                display: 'none',
              }}
              className="dropdown-menu"
            >
              {['Department', 'Cells', 'Clubs'].map((item) => (
                <a
                  key={item}
                  href={`#${item.toLowerCase()}`}
                  style={{
                    display: 'block',
                    padding: '12px 16px',
                    color: '#374151',
                    textDecoration: 'none',
                    transition: 'all 0.3s ease',
                  }}
                  onMouseEnter={(e) => {
                    e.target.style.backgroundColor = '#eff6ff';
                    e.target.style.color = '#2563eb';
                  }}
                  onMouseLeave={(e) => {
                    e.target.style.backgroundColor = 'transparent';
                    e.target.style.color = '#374151';
                  }}
                >
                  {item}
                </a>
              ))}
            </div>
          </div>
        </nav>

        {/* Mobile Menu Button */}
        <button
          style={{
            display: 'none',
            backgroundColor: 'transparent',
            border: 'none',
            fontSize: '28px',
            cursor: 'pointer',
            color: '#374151',
            transition: 'color 0.3s ease',
          }}
          onClick={toggleMenu}
          className="mobile-menu-btn"
        >
          {isOpen ? '✕' : '☰'}
        </button>
      </div>

      {/* Mobile Navigation */}
      {isOpen && (
        <div
          style={{
            position: 'absolute',
            top: '60px',
            left: 0,
            right: 0,
            backgroundColor: '#ffffff',
            borderTop: '1px solid #e5e7eb',
            display: 'flex',
            flexDirection: 'column',
            padding: '16px 20px',
            gap: '8px',
            zIndex: 40,
          }}
        >
          {['Home', 'About', 'Contact'].map((item) => (
            <a
              key={item}
              href={`#${item.toLowerCase()}`}
              style={{
                padding: '10px 12px',
                color: '#374151',
                textDecoration: 'none',
                fontWeight: '500',
                transition: 'all 0.3s ease',
                borderRadius: '6px',
                display: 'block',
              }}
              onMouseEnter={(e) => {
                e.target.style.backgroundColor = '#eff6ff';
                e.target.style.color = '#2563eb';
              }}
              onMouseLeave={(e) => {
                e.target.style.backgroundColor = 'transparent';
                e.target.style.color = '#374151';
              }}
            >
              {item}
            </a>
          ))}

          {/* Mobile Events */}
          <div style={{ padding: '10px 12px' }}>
            <div
              style={{
                color: '#374151',
                fontWeight: '600',
                marginBottom: '8px',
                fontSize: '14px',
              }}
            >
              Events
            </div>
            <div
              style={{
                paddingLeft: '16px',
                display: 'flex',
                flexDirection: 'column',
                gap: '8px',
              }}
            >
              {['Department', 'Cells', 'Clubs'].map((item) => (
                <a
                  key={item}
                  href={`#${item.toLowerCase()}`}
                  style={{
                    color: '#6b7280',
                    fontWeight: '500',
                    padding: '8px 10px',
                    textDecoration: 'none',
                    borderRadius: '6px',
                    display: 'block',
                    transition: 'all 0.3s ease',
                  }}
                  onMouseEnter={(e) => {
                    e.target.style.backgroundColor = '#eff6ff';
                    e.target.style.color = '#2563eb';
                  }}
                  onMouseLeave={(e) => {
                    e.target.style.backgroundColor = 'transparent';
                    e.target.style.color = '#6b7280';
                  }}
                >
                  {item}
                </a>
              ))}
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
