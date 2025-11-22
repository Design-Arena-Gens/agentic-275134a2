'use client'

import { useState, useEffect } from 'react'

export default function Home() {
  const [loaded, setLoaded] = useState(false)

  useEffect(() => {
    setLoaded(true)
  }, [])

  return (
    <main style={{
      minHeight: '100vh',
      background: 'linear-gradient(135deg, #0a0a0a 0%, #1a1a2e 50%, #0f3460 100%)',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      padding: '20px',
      fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',
      position: 'relative',
      overflow: 'hidden'
    }}>
      {/* Animated metro tunnel background effect */}
      <div style={{
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        background: `
          repeating-linear-gradient(
            90deg,
            rgba(0, 255, 255, 0.03) 0px,
            rgba(0, 255, 255, 0.03) 2px,
            transparent 2px,
            transparent 60px
          ),
          repeating-linear-gradient(
            0deg,
            rgba(255, 0, 255, 0.03) 0px,
            rgba(255, 0, 255, 0.03) 2px,
            transparent 2px,
            transparent 60px
          )
        `,
        animation: loaded ? 'tunnelShift 20s linear infinite' : 'none',
        opacity: 0.6
      }} />

      {/* Neon glow effects */}
      <div style={{
        position: 'absolute',
        top: '10%',
        left: '10%',
        width: '300px',
        height: '300px',
        background: 'radial-gradient(circle, rgba(0, 255, 255, 0.3) 0%, transparent 70%)',
        filter: 'blur(60px)',
        animation: loaded ? 'pulse 4s ease-in-out infinite' : 'none'
      }} />
      <div style={{
        position: 'absolute',
        bottom: '10%',
        right: '10%',
        width: '400px',
        height: '400px',
        background: 'radial-gradient(circle, rgba(255, 0, 255, 0.3) 0%, transparent 70%)',
        filter: 'blur(80px)',
        animation: loaded ? 'pulse 5s ease-in-out infinite 1s' : 'none'
      }} />

      {/* Main content container */}
      <div style={{
        position: 'relative',
        zIndex: 1,
        maxWidth: '1200px',
        width: '100%',
        background: 'rgba(255, 255, 255, 0.03)',
        backdropFilter: 'blur(20px)',
        border: '1px solid rgba(0, 255, 255, 0.2)',
        borderRadius: '20px',
        padding: '60px 40px',
        boxShadow: '0 20px 60px rgba(0, 0, 0, 0.5), 0 0 40px rgba(0, 255, 255, 0.1)',
        transform: loaded ? 'translateY(0)' : 'translateY(20px)',
        opacity: loaded ? 1 : 0,
        transition: 'all 0.8s ease-out'
      }}>
        {/* Title */}
        <h1 style={{
          fontSize: 'clamp(2.5rem, 6vw, 5rem)',
          fontWeight: 900,
          textAlign: 'center',
          margin: '0 0 20px 0',
          background: 'linear-gradient(135deg, #00ffff 0%, #ff00ff 50%, #00ffff 100%)',
          WebkitBackgroundClip: 'text',
          WebkitTextFillColor: 'transparent',
          backgroundClip: 'text',
          textShadow: '0 0 40px rgba(0, 255, 255, 0.5)',
          letterSpacing: '-2px'
        }}>
          Canker-Blossom
        </h1>

        {/* Subtitle */}
        <p style={{
          fontSize: 'clamp(1rem, 2vw, 1.3rem)',
          color: '#00ffff',
          textAlign: 'center',
          margin: '0 0 50px 0',
          fontWeight: 300,
          letterSpacing: '2px',
          textTransform: 'uppercase'
        }}>
          Editorial Portrait Series
        </p>

        {/* Portrait description card */}
        <div style={{
          background: 'linear-gradient(135deg, rgba(0, 255, 255, 0.1) 0%, rgba(255, 0, 255, 0.1) 100%)',
          border: '2px solid rgba(0, 255, 255, 0.3)',
          borderRadius: '15px',
          padding: '40px',
          marginBottom: '40px',
          position: 'relative',
          overflow: 'hidden'
        }}>
          <div style={{
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            height: '3px',
            background: 'linear-gradient(90deg, #00ffff, #ff00ff, #00ffff)',
            animation: loaded ? 'slideRight 3s linear infinite' : 'none'
          }} />

          <h2 style={{
            fontSize: 'clamp(1.5rem, 3vw, 2.5rem)',
            color: '#ffffff',
            marginTop: 0,
            marginBottom: '25px',
            fontWeight: 700
          }}>
            Portrait of Bold Confidence
          </h2>

          <div style={{
            color: '#e0e0e0',
            fontSize: 'clamp(1rem, 2vw, 1.2rem)',
            lineHeight: '1.8',
            marginBottom: '20px'
          }}>
            <p style={{ margin: '0 0 20px 0' }}>
              A striking young Korean woman commands attention in this urban editorial portrait,
              her confident gaze piercing directly through the lens to connect with the viewer.
            </p>
          </div>

          {/* Fashion details grid */}
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
            gap: '20px',
            marginTop: '30px'
          }}>
            <div style={{
              background: 'rgba(0, 255, 255, 0.05)',
              border: '1px solid rgba(0, 255, 255, 0.2)',
              borderRadius: '10px',
              padding: '20px'
            }}>
              <h3 style={{
                color: '#00ffff',
                fontSize: '1.1rem',
                marginTop: 0,
                marginBottom: '10px',
                textTransform: 'uppercase',
                letterSpacing: '1px'
              }}>
                Fashion
              </h3>
              <ul style={{
                listStyle: 'none',
                padding: 0,
                margin: 0,
                color: '#ffffff'
              }}>
                <li style={{ marginBottom: '8px' }}>✦ Teal satin bomber jacket</li>
                <li style={{ marginBottom: '8px' }}>✦ Black mini-skirt</li>
                <li style={{ marginBottom: '8px' }}>✦ Chunky sneakers</li>
                <li style={{ marginBottom: '8px' }}>✦ Slick hairstyle</li>
              </ul>
            </div>

            <div style={{
              background: 'rgba(255, 0, 255, 0.05)',
              border: '1px solid rgba(255, 0, 255, 0.2)',
              borderRadius: '10px',
              padding: '20px'
            }}>
              <h3 style={{
                color: '#ff00ff',
                fontSize: '1.1rem',
                marginTop: 0,
                marginBottom: '10px',
                textTransform: 'uppercase',
                letterSpacing: '1px'
              }}>
                Atmosphere
              </h3>
              <ul style={{
                listStyle: 'none',
                padding: 0,
                margin: 0,
                color: '#ffffff'
              }}>
                <li style={{ marginBottom: '8px' }}>✦ Neon metro tunnel</li>
                <li style={{ marginBottom: '8px' }}>✦ Reflective tiles</li>
                <li style={{ marginBottom: '8px' }}>✦ Electric color palette</li>
                <li style={{ marginBottom: '8px' }}>✦ Modern urban edge</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Visual representation area */}
        <div style={{
          background: 'linear-gradient(135deg, #0a4d4d 0%, #4d0a4d 100%)',
          borderRadius: '15px',
          padding: '60px 40px',
          textAlign: 'center',
          border: '2px solid rgba(0, 255, 255, 0.3)',
          position: 'relative',
          minHeight: '400px',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          overflow: 'hidden'
        }}>
          {/* Simulated metro tile reflections */}
          <div style={{
            position: 'absolute',
            inset: 0,
            background: `
              repeating-linear-gradient(
                0deg,
                transparent 0px,
                transparent 48px,
                rgba(0, 255, 255, 0.1) 48px,
                rgba(0, 255, 255, 0.1) 50px
              ),
              repeating-linear-gradient(
                90deg,
                transparent 0px,
                transparent 48px,
                rgba(255, 0, 255, 0.1) 48px,
                rgba(255, 0, 255, 0.1) 50px
              )
            `,
            opacity: 0.5
          }} />

          {/* Central figure silhouette */}
          <div style={{
            position: 'relative',
            width: '280px',
            height: '350px',
            background: 'linear-gradient(135deg, rgba(0, 255, 255, 0.2) 0%, rgba(255, 0, 255, 0.2) 100%)',
            borderRadius: '10px',
            border: '3px solid rgba(0, 255, 255, 0.5)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            marginBottom: '30px',
            boxShadow: `
              0 0 30px rgba(0, 255, 255, 0.4),
              0 0 60px rgba(255, 0, 255, 0.3),
              inset 0 0 40px rgba(0, 255, 255, 0.1)
            `,
            animation: loaded ? 'portraitGlow 3s ease-in-out infinite' : 'none'
          }}>
            <div style={{
              fontSize: '5rem',
              filter: 'drop-shadow(0 0 20px rgba(0, 255, 255, 0.8))'
            }}>
              👤
            </div>
          </div>

          <p style={{
            color: '#00ffff',
            fontSize: '1.2rem',
            fontWeight: 300,
            letterSpacing: '3px',
            textTransform: 'uppercase',
            margin: 0,
            textShadow: '0 0 20px rgba(0, 255, 255, 0.8)'
          }}>
            Conceptual Portrait Series
          </p>
        </div>

        {/* Footer tagline */}
        <p style={{
          textAlign: 'center',
          color: 'rgba(255, 255, 255, 0.6)',
          fontSize: '0.9rem',
          marginTop: '40px',
          marginBottom: 0,
          fontStyle: 'italic'
        }}>
          Where fashion meets urban electricity
        </p>
      </div>

      {/* CSS Animations */}
      <style jsx global>{`
        @keyframes pulse {
          0%, 100% {
            opacity: 0.3;
            transform: scale(1);
          }
          50% {
            opacity: 0.5;
            transform: scale(1.1);
          }
        }

        @keyframes tunnelShift {
          0% {
            transform: translate(0, 0);
          }
          100% {
            transform: translate(60px, 60px);
          }
        }

        @keyframes slideRight {
          0% {
            transform: translateX(-100%);
          }
          100% {
            transform: translateX(100%);
          }
        }

        @keyframes portraitGlow {
          0%, 100% {
            box-shadow:
              0 0 30px rgba(0, 255, 255, 0.4),
              0 0 60px rgba(255, 0, 255, 0.3),
              inset 0 0 40px rgba(0, 255, 255, 0.1);
          }
          50% {
            box-shadow:
              0 0 50px rgba(0, 255, 255, 0.6),
              0 0 80px rgba(255, 0, 255, 0.5),
              inset 0 0 60px rgba(0, 255, 255, 0.2);
          }
        }

        * {
          box-sizing: border-box;
        }
      `}</style>
    </main>
  )
}
