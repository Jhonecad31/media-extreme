'use client';

import { useEffect, useState } from 'react';
import Image from 'next/image';

interface HomeContentProps {
  lang: string;
  dict: any;
}

export default function HomeContent({ lang, dict }: HomeContentProps) {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const observerOptions = {
      threshold: 0.1,
      rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          (entry.target as HTMLElement).style.opacity = '1';
          (entry.target as HTMLElement).style.transform = 'translateY(0)';
          observer.unobserve(entry.target);
        }
      });
    }, observerOptions);

    const cards = document.querySelectorAll('.feature-item, .glass-card');
    
    cards.forEach((card, index) => {
      const el = card as HTMLElement;
      el.style.opacity = '0';
      el.style.transform = 'translateY(30px)';
      el.style.transition = `opacity 0.6s ease ${index * 0.1}s, transform 0.6s ease ${index * 0.1}s`;
      observer.observe(el);
    });
    
    return () => observer.disconnect();
  }, []);

  return (
    <>
      <header className={`glass ${scrolled ? 'scrolled' : ''}`}>
        <div className="logo-text">{dict.header.title}</div>
        <ul className="nav-links">
          <li><a href="/en" className={lang === 'en' ? 'active' : ''}>{dict.header.english}</a></li>
          <li><a href="/es" className={lang === 'es' ? 'active' : ''}>{dict.header.spanish}</a></li>
          <li><a href="/pt" className={lang === 'pt' ? 'active' : ''}>{dict.header.portuguese}</a></li>
        </ul>
      </header>

      <section className="hero">
        <div className="hero-content">
          <h1>{dict.hero.title}</h1>
          <p>{dict.hero.description}</p>
          <a href="#experiences" className="btn-primary">
            {dict.hero.button} <i className='bx bx-right-arrow-alt'></i>
          </a>
        </div>
      </section>

      <section className="features">
        <div className="container">
          <h2 className="section-title">{dict.features.title}</h2>
          <div className="features-grid">
            <div className="feature-item glass-card">
              <i className='bx bx-car feature-icon'></i>
              <h3>{dict.features.transportation.title}</h3>
              <p>{dict.features.transportation.desc}</p>
              <span className="badge">{dict.features.transportation.badge}</span>
            </div>
            
            <div className="feature-item glass-card">
              <i className='bx bx-calendar-check feature-icon'></i>
              <h3>{dict.features.availability.title}</h3>
              <p>{dict.features.availability.desc}</p>
            </div>

            <div className="feature-item glass-card">
              <i className='bx bx-time feature-icon'></i>
              <h3>{dict.features.schedule.title}</h3>
              <p>{dict.features.schedule.desc}</p>
              <span className="badge">{dict.features.schedule.badge}</span>
            </div>

            <div className="feature-item glass-card">
              <i className='bx bx-group feature-icon'></i>
              <h3>{dict.features.family.title}</h3>
              <p>{dict.features.family.desc}</p>
              <span className="badge">{dict.features.family.badge}</span>
            </div>
          </div>
        </div>
      </section>

      <section id="experiences" className="experiences">
        <div className="container">
          <h2 className="section-title">{dict.experiences.title}</h2>
          
          <div className="experience-grid">
            <div className="glass-card experience-card">
              <div className="img-wrapper">
                <img src="/img/atv_adventure.png" alt={dict.experiences.atv.title} />
              </div>
              <div className="experience-content">
                <h2>{dict.experiences.atv.title}</h2>
                
                <a href="#" className="resource-link">
                  <div className="resource-icon"><i className='bx bxs-file-pdf'></i></div>
                  <div className="resource-text">
                    <strong>{dict.experiences.resources.factsheet}</strong>
                    <span>{dict.experiences.resources.factsheet_desc}</span>
                  </div>
                </a>

                <a href="#" className="resource-link">
                  <div className="resource-icon"><i className='bx bxl-dropbox'></i></div>
                  <div className="resource-text">
                    <strong>{dict.experiences.resources.photos}</strong>
                    <span>{dict.experiences.resources.photos_desc}</span>
                  </div>
                </a>
                
                <a href="#" className="resource-link">
                  <div className="resource-icon"><i className='bx bx-video'></i></div>
                  <div className="resource-text">
                    <strong>{dict.experiences.resources.videos}</strong>
                    <span>{dict.experiences.resources.videos_desc}</span>
                  </div>
                </a>
              </div>
            </div>

            <div className="glass-card experience-card">
              <div className="img-wrapper">
                <img src="https://images.unsplash.com/photo-1544644181-1484b3fdfc62?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" alt={dict.experiences.puerto_morelos.title} />
              </div>
              <div className="experience-content">
                <h2>{dict.experiences.puerto_morelos.title}</h2>
                
                <a href="#" className="resource-link">
                  <div className="resource-icon"><i className='bx bxs-file-pdf'></i></div>
                  <div className="resource-text">
                    <strong>{dict.experiences.resources.factsheet}</strong>
                    <span>{dict.experiences.resources.factsheet_desc}</span>
                  </div>
                </a>

                <a href="#" className="resource-link">
                  <div className="resource-icon"><i className='bx bxl-dropbox'></i></div>
                  <div className="resource-text">
                    <strong>{dict.experiences.resources.photos}</strong>
                    <span>{dict.experiences.resources.photos_desc}</span>
                  </div>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <footer>
        <div className="container">
          <p>{dict.footer.copyright}</p>
        </div>
      </footer>
    </>
  );
}
