import React, { useState } from 'react';
import axios from 'axios';
import { Heart, Shield, Users, MessageSquare, ArrowRight, CheckCircle, Star, Sparkles, Feather, Wine, Music } from 'lucide-react';
import Reveal from './components/Reveal';

const App = () => {
  const [email, setEmail] = useState('');
  const [honeypot, setHoneypot] = useState('');
  const [status, setStatus] = useState({ type: '', message: '' });
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (honeypot) return;

    setLoading(true);
    setStatus({ type: '', message: '' });

    try {
      const response = await axios.post('http://localhost:5000/api/waitlist', { email });
      setStatus({ type: 'success', message: response.data.message });
      setEmail('');
    } catch (err) {
      setStatus({
        type: 'error',
        message: err.response?.data?.message || 'Something went wrong. Please try again.'
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="app" style={{ position: 'relative' }}>
      {/* Global Dynamic Background Decorations */}
      <div className="bg-decorations">
        {/* Variety of floating romantic elements scattered across the viewport */}
        <Heart className="floating-icon float-1" size={60} style={{ top: '15%', left: '8%' }} />
        <Feather className="floating-icon float-2" size={40} style={{ top: '35%', right: '12%' }} />
        <Wine className="floating-icon float-3" size={45} style={{ bottom: '25%', left: '10%' }} />
        <Music className="floating-icon float-1" size={35} style={{ bottom: '15%', right: '20%' }} />
        <Heart className="floating-icon float-2" size={30} style={{ top: '65%', left: '45%' }} />
        <Sparkles className="floating-icon float-3" size={25} style={{ top: '10%', right: '40%' }} />
        <Feather className="floating-icon float-1" size={50} style={{ bottom: '40%', right: '5%' }} />

        {/* Soft persistent glows */}
        <div className="orb" style={{ top: '20%', right: '10%' }}></div>
        <div className="orb" style={{ bottom: '20%', left: '10%' }}></div>
      </div>

      {/* Navigation */}
      <nav style={{
        padding: '24px 8%',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        position: 'fixed',
        top: 0,
        width: '100%',
        zIndex: 1000,
        background: 'rgba(255, 249, 246, 0.85)',
        backdropFilter: 'blur(20px)',
        borderBottom: '1px solid var(--glass-border)'
      }}>
        <div style={{ fontSize: '1.8rem', fontWeight: '700', color: 'var(--accent)', fontFamily: 'Playfair Display', display: 'flex', alignItems: 'center', gap: '10px' }}>
          <Heart size={28} fill="var(--accent)" />
          MayaMilan
        </div>
        <button
          onClick={() => document.getElementById('waitlist').scrollIntoView({ behavior: 'smooth' })}
          className="btn-premium"
          style={{ padding: '12px 28px', fontSize: '0.9rem' }}
        >
          Request Invitation
        </button>
      </nav>

      {/* Hero Section */}
      <section id="hero" style={{ position: 'relative', zIndex: 1 }}>
        <div className="container" style={{ textAlign: 'center' }}>
          <Reveal>
            <h1 style={{ fontSize: 'clamp(3.5rem, 10vw, 6.5rem)', marginBottom: '32px', lineHeight: 0.95 }}>
              Where <span className="romantic-font" style={{ fontSize: '1.1em' }}>Souls</span> <br />
              Meet with <span style={{ color: 'var(--accent)' }}>Intent.</span>
            </h1>
            <p style={{ fontSize: '1.35rem', color: 'var(--text-secondary)', maxWidth: '750px', margin: '0 auto 48px', fontWeight: '400' }}>
              Moving beyond the swipe to foster genuine human resonance. MayaMilan is a premium ecosystem designed for those seeking their last first date.
            </p>
            <div style={{ display: 'flex', gap: '24px', justifyContent: 'center', flexWrap: 'wrap' }}>
              <button onClick={() => document.getElementById('waitlist').scrollIntoView({ behavior: 'smooth' })} className="btn-premium">
                Secure Early Access <ArrowRight size={18} style={{ marginLeft: '12px' }} />
              </button>
              <button onClick={() => document.getElementById('about').scrollIntoView({ behavior: 'smooth' })} className="btn-outline">
                Our Philosophy
              </button>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Philosophy Section */}
      <section id="about" style={{ background: 'var(--bg-secondary)', position: 'relative', zIndex: 1 }}>
        <div className="container">
          <Reveal>
            <div style={{ textAlign: 'center', marginBottom: '100px' }}>
              <h2 style={{ fontSize: '3.8rem', marginBottom: '24px' }}>The Art of Intimacy</h2>
              <p style={{ color: 'var(--text-secondary)', maxWidth: '750px', margin: '0 auto', fontSize: '1.2rem', fontWeight: '300' }}>
                We've traded digital noise for <span className="romantic-font" style={{ fontSize: '1.4rem' }}>meaningful silence</span> and deep emotional resonance.
              </p>
            </div>
          </Reveal>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(340px, 1fr))', gap: '48px' }}>
            {[
              {
                icon: <Heart color="var(--accent)" size={48} />,
                title: 'Behavioral Resonance',
                desc: 'Our engine identifies patterns in how you care, connect, and communicate, matching you with souls that truly align.'
              },
              {
                icon: <Shield color="var(--accent)" size={48} />,
                title: 'Sacred Privacy',
                desc: "A gated environment where your identity is verified and your presence is protected. For those who value exclusivity."
              },
              {
                icon: <MessageSquare color="var(--accent)" size={48} />,
                title: 'Deep Dialogue',
                desc: 'Communication tools that invite vulnerability and storytelling, ensuring every conversation has a heartbeat.'
              }
            ].map((feature, idx) => (
              <Reveal key={idx} threshold={0.2 + (idx * 0.1)}>
                <div className="glass-card" style={{ padding: '60px 40px' }}>
                  <div style={{ marginBottom: '32px' }}>{feature.icon}</div>
                  <h3 style={{ fontSize: '1.8rem', marginBottom: '20px' }}>{feature.title}</h3>
                  <p style={{ color: 'var(--text-secondary)', fontSize: '1.05rem' }}>{feature.desc}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Feature Highlight Section */}
      <section style={{ position: 'relative', zIndex: 1 }}>
        <div className="container" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))', gap: '80px', alignItems: 'center' }}>
          <Reveal>
            <div className="glass-card" style={{
              aspectRatio: '0.9',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              background: 'white',
              borderRadius: '100px'
            }}>
              <div style={{ position: 'relative' }}>
                <Heart size={140} color="var(--accent)" fill="var(--accent-muted)" />
              </div>
            </div>
          </Reveal>
          <Reveal>
            <h2 style={{ fontSize: '3.8rem', marginBottom: '40px', lineHeight: 1.1 }}>
              Designed for <br />
              <span className="romantic-font" style={{ fontSize: '1.2em' }}>Forever.</span>
            </h2>
            <div style={{ display: 'grid', gap: '32px' }}>
              {[
                { title: 'Identity Verification', desc: 'Secure, high-integrity verification for a community of serious intent.' },
                { title: 'Emotional Intelligence', desc: 'Matching that prioritizes temperament and lifestyle over shallow metrics.' },
                { title: 'Ad-Free Haven', desc: 'No distractions. Just you and the potential for a life-altering connection.' }
              ].map((item, idx) => (
                <div key={idx} style={{ display: 'flex', gap: '24px' }}>
                  <div style={{
                    width: '36px',
                    height: '36px',
                    borderRadius: '50%',
                    background: 'var(--accent)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    flexShrink: 0,
                    color: '#fff',
                    fontWeight: '800'
                  }}>{idx + 1}</div>
                  <div>
                    <h4 style={{ fontSize: '1.4rem', marginBottom: '10px' }}>{item.title}</h4>
                    <p style={{ color: 'var(--text-secondary)', fontSize: '1.1rem' }}>{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      {/* Redesigned Invitation Section (Join the Collective) */}
      <section id="waitlist" style={{ position: 'relative', zIndex: 1, paddingBottom: '160px' }}>
        <div className="container">
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '40px', alignItems: 'center' }}>
            <Reveal>
              <h2 style={{ fontSize: '4.8rem', lineHeight: 1, marginBottom: '24px' }}>
                Join the <br /><span className="romantic-font" style={{ fontSize: '1.3em' }}>Collective</span>
              </h2>
              <p style={{ fontSize: '1.4rem', color: 'var(--text-secondary)', maxWidth: '450px', marginBottom: '40px' }}>
                We are currently extending private invitations to a limited circle of intentional founding members.
              </p>
              <div style={{ display: 'flex', gap: '12px', alignItems: 'center', color: 'var(--accent)', fontWeight: '600' }}>
                <CheckCircle size={20} /> Only 150 spots remaining this month.
              </div>
            </Reveal>

            <Reveal>
              <div className="glass-card" style={{ padding: '60px 50px', background: '#ffffff', position: 'relative' }}>
                {/* Decorative corner element */}
                <div style={{ position: 'absolute', top: 0, right: 0, width: '80px', height: '80px', background: 'var(--accent-muted)', borderRadius: '0 40px 0 100%' }}></div>

                <h3 style={{ fontSize: '1.8rem', marginBottom: '32px' }}>Request Early Access</h3>
                <form onSubmit={handleSubmit}>
                  <input type="text" style={{ display: 'none' }} value={honeypot} onChange={(e) => setHoneypot(e.target.value)} />

                  <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
                      <label style={{ fontSize: '0.9rem', fontWeight: '600', color: 'var(--text-secondary)' }}>Email Address</label>
                      <input
                        type="email"
                        placeholder="your@email.com"
                        required
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        style={{
                          padding: '18px 24px',
                          borderRadius: '16px',
                          border: '2px solid var(--glass-border)',
                          fontSize: '1rem',
                          outline: 'none',
                          width: '100%'
                        }}
                      />
                    </div>

                    <button type="submit" className="btn-premium" disabled={loading} style={{ width: '100%', justifyContent: 'center', padding: '20px' }}>
                      {loading ? 'Processing Invitation...' : 'Send Request'}
                    </button>

                    <p style={{ fontSize: '0.8rem', color: 'var(--text-secondary)', textAlign: 'center' }}>
                      By requesting access, you agree to our <span style={{ textDecoration: 'underline', cursor: 'pointer' }}>exclusive member code</span>.
                    </p>
                  </div>

                  {status.message && (
                    <div style={{
                      marginTop: '24px',
                      padding: '16px',
                      borderRadius: '12px',
                      background: status.type === 'success' ? '#f0fdf4' : '#fef2f2',
                      color: status.type === 'success' ? '#166534' : '#991b1b',
                      fontSize: '0.95rem',
                      display: 'flex',
                      alignItems: 'center',
                      gap: '12px'
                    }}>
                      {status.type === 'success' ? <Sparkles size={18} /> : <MessageSquare size={18} />}
                      {status.message}
                    </div>
                  )}
                </form>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer style={{ padding: '100px 8% 40px', borderTop: '1px solid var(--glass-border)', background: '#fff9f6', position: 'relative', zIndex: 1 }}>
        <div className="container" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', flexWrap: 'wrap', gap: '60px' }}>
          <div>
            <div style={{ fontSize: '1.8rem', fontWeight: '700', color: 'var(--accent)', fontFamily: 'Playfair Display', marginBottom: '16px' }}>MayaMilan</div>
            <p style={{ color: 'var(--text-secondary)', maxWidth: '300px' }}>
              Elevated human connection through warm, intentional matching.
            </p>
          </div>
          <div style={{ display: 'flex', gap: '60px' }}>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
              <span style={{ fontWeight: '700', fontSize: '0.9rem', color: '#3d2a2a' }}>Platform</span>
              <a href="#" style={{ color: 'var(--text-secondary)', textDecoration: 'none' }}>Genesis</a>
              <a href="#" style={{ color: 'var(--text-secondary)', textDecoration: 'none' }}>Sanctuary</a>
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
              <span style={{ fontWeight: '700', fontSize: '0.9rem', color: '#3d2a2a' }}>Foundation</span>
              <a href="#" style={{ color: 'var(--text-secondary)', textDecoration: 'none' }}>Privacy Policy</a>
              <a href="#" style={{ color: 'var(--text-secondary)', textDecoration: 'none' }}>Membership Terms</a>
            </div>
          </div>
        </div>
        <div style={{ marginTop: '80px', textAlign: 'center', opacity: 0.6 }}>
          <p style={{ fontSize: '0.9rem' }}>© 2026 MayaMilan. Designed with heart.</p>
        </div>
      </footer>
    </div>
  );
};

export default App;
