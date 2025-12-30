// Main JS moved out of index.html
const defaultConfig = {
  background_color: '#0f172a',
  surface_color: '#1e293b',
  text_color: '#f1f5f9',
  primary_action_color: '#3b82f6',
  secondary_action_color: '#8b5cf6',
  hero_name: 'Alvaro Cascante',
  hero_title: 'Mobile & Java Developer',
  hero_description: 'Building amazing web experiences and mobile applications',
  linkedin_url: 'https://www.linkedin.com/in/alvaro-cascante-retana/',
  github_url: 'https://github.com/AlvaroCascante',
  project_title: 'Pedal Pal',
  project_tagline: 'Smart Bike Maintenance Tracker',
  project_description: 'A comprehensive mobile-first application for tracking bike maintenance, managing multiple bikes, and scheduling service reminders. Built with modern web technologies and responsive design.',
  cta_button_text: 'Get In Touch',
  font_family: 'Inter',
  font_size: 16
};

function renderApp() {
  const app = document.getElementById('app');
  const config = window.elementSdk?.config || defaultConfig;

  app.style.backgroundColor = config.background_color;
  app.style.color = config.text_color;
  app.style.fontFamily = `${config.font_family}, -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif`;

  const baseSize = config.font_size;

  app.innerHTML = `
    <style>
      :root {
        --primary-color: ${config.primary_action_color};
        --secondary-color: ${config.secondary_action_color};
      }
    </style>

    <!-- Hero Section -->
    <section class="fade-in" style="padding: 80px 24px; text-align: center; background: linear-gradient(135deg, ${config.background_color} 0%, ${config.surface_color} 100%);">
      <div style="max-width: 800px; margin: 0 auto;" class="container">
        <div style="width: 120px; height: 120px; border-radius: 50%; margin: 0 auto 32px; overflow: hidden; box-shadow: 0 10px 30px rgba(0,0,0,0.3); background: linear-gradient(135deg, ${config.primary_action_color}, ${config.secondary_action_color});">
          <img src="images/profile2.png" alt="${config.hero_name}" style="width: 100%; height: 100%; object-fit: cover;" onerror="this.style.display='none'; this.parentElement.innerHTML='${config.hero_name.charAt(0).toUpperCase()}'; this.parentElement.style.display='flex'; this.parentElement.style.alignItems='center'; this.parentElement.style.justifyContent='center'; this.parentElement.style.fontSize='48px'; this.parentElement.style.fontWeight='700'; this.parentElement.style.color='white';" loading="lazy">
        </div>

        <h1 class="gradient-text" style="font-size: ${baseSize * 3}px; font-weight: 800; margin-bottom: 16px; line-height: 1.2;">
          ${config.hero_name}
        </h1>

        <p style="font-size: ${baseSize * 1.5}px; color: ${config.text_color}; opacity: 0.9; margin-bottom: 24px; font-weight: 500;">
          ${config.hero_title}
        </p>

        <p style="font-size: ${baseSize * 1.125}px; color: ${config.text_color}; opacity: 0.7; max-width: 600px; margin: 0 auto 40px; line-height: 1.6;">
          ${config.hero_description}
        </p>

        <div style="display: flex; gap: 16px; justify-content: center; flex-wrap: wrap;">
          <a href="${config.linkedin_url}" target="_blank" rel="noopener noreferrer" class="social-link" style="display: inline-flex; align-items: center; gap: 12px; padding: 14px 28px; background-color: ${config.primary_action_color}; color: white; border-radius: 12px; text-decoration: none; font-size: ${baseSize}px; font-weight: 600; box-shadow: 0 4px 12px rgba(59, 130, 246, 0.3);">
            <!-- LinkedIn SVG -->
            <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
              <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
            </svg>
            LinkedIn
          </a>

          <a href="${config.github_url}" target="_blank" rel="noopener noreferrer" class="social-link" style="display: inline-flex; align-items: center; gap: 12px; padding: 14px 28px; background-color: ${config.surface_color}; color: ${config.text_color}; border: 2px solid ${config.primary_action_color}; border-radius: 12px; text-decoration: none; font-size: ${baseSize}px; font-weight: 600;">
            <!-- GitHub SVG -->
            <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
              <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
            </svg>
            GitHub
          </a>
        </div>
      </div>
    </section>

    <!-- Featured Project Section -->
    <section class="slide-in" style="padding: 80px 24px; background-color: ${config.background_color};">
      <div style="max-width: 1200px; margin: 0 auto;" class="container">
        <div style="text-align: center; margin-bottom: 60px;">
          <h2 style="font-size: ${baseSize * 2.5}px; font-weight: 700; margin-bottom: 16px;">Featured Projects</h2>
          <div style="width: 80px; height: 4px; background: linear-gradient(90deg, ${config.primary_action_color}, ${config.secondary_action_color}); margin: 0 auto; border-radius: 2px;"></div>
        </div>

        <div class="project-card" style="background-color: ${config.surface_color}; border-radius: 24px; overflow: hidden; box-shadow: 0 10px 30px rgba(0,0,0,0.2);">
          <div style="padding: 48px;">
            <div style="display: flex; align-items: center; gap: 16px; margin-bottom: 24px;">
              <div style="width: 60px; height: 60px; background: linear-gradient(135deg, ${config.primary_action_color}, ${config.secondary_action_color}); border-radius: 16px; display: flex; align-items: center; justify-content: center; font-size: 32px;">
                🚲
              </div>
              <div>
                <h3 style="font-size: ${baseSize * 2}px; font-weight: 700; margin-bottom: 4px;">${config.project_title}</h3>
                <p style="font-size: ${baseSize * 1.125}px; color: ${config.primary_action_color}; font-weight: 600;">${config.project_tagline}</p>
              </div>
            </div>

            <p style="font-size: ${baseSize * 1.125}px; line-height: 1.7; color: ${config.text_color}; opacity: 0.8; margin-bottom: 32px;">
              ${config.project_description}
            </p>

            <p style="font-size: ${baseSize * 1}px; color: ${config.text_color}; opacity: 0.8; margin-bottom: 24px;">
              Design & prototypes: <a href="https://pedalpal.quetoquenana.com/design" target="_blank" rel="noopener noreferrer" style="color: ${config.primary_action_color}; text-decoration: underline;">View the design</a>
            </p>

            <div style="display: flex; flex-wrap: wrap; gap: 12px; margin-bottom: 32px;">
              <span style="padding: 8px 16px; background-color: ${config.background_color}; border-radius: 20px; font-size: ${baseSize * 0.875}px; color: ${config.primary_action_color}; font-weight: 500;">Mobile-First (Android & iOS)</span>
              <span style="padding: 8px 16px; background-color: ${config.background_color}; border-radius: 20px; font-size: ${baseSize * 0.875}px; color: ${config.primary_action_color}; font-weight: 500;">Springboth Backend</span>
              <span style="padding: 8px 16px; background-color: ${config.background_color}; border-radius: 20px; font-size: ${baseSize * 0.875}px; color: ${config.primary_action_color}; font-weight: 500;">Firebase</span>
              <span style="padding: 8px 16px; background-color: ${config.background_color}; border-radius: 20px; font-size: ${baseSize * 0.875}px; color: ${config.primary_action_color}; font-weight: 500;">Postgres</span>
              <span style="padding: 8px 16px; background-color: ${config.background_color}; border-radius: 20px; font-size: ${baseSize * 0.875}px; color: ${config.primary_action_color}; font-weight: 500;">Flyway</span>
            </div>

            <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(200px, 1fr)); gap: 24px; padding: 24px; background-color: ${config.background_color}; border-radius: 16px; margin-bottom: 32px;">
              <div style="text-align: center;">
                <div style="font-size: ${baseSize * 2}px; font-weight: 700; color: ${config.primary_action_color}; margin-bottom: 8px;">✓</div>
                <div style="font-size: ${baseSize * 0.875}px; opacity: 0.8;">Multi-bike tracking</div>
              </div>
              <div style="text-align: center;">
                <div style="font-size: ${baseSize * 2}px; font-weight: 700; color: ${config.primary_action_color}; margin-bottom: 8px;">✓</div>
                <div style="font-size: ${baseSize * 0.875}px; opacity: 0.8;">Maintenance history</div>
              </div>
              <div style="text-align: center;">
                <div style="font-size: ${baseSize * 2}px; font-weight: 700; color: ${config.primary_action_color}; margin-bottom: 8px;">✓</div>
                <div style="font-size: ${baseSize * 0.875}px; opacity: 0.8;">Service reminders</div>
              </div>
              <div style="text-align: center;">
                <div style="font-size: ${baseSize * 2}px; font-weight: 700; color: ${config.primary_action_color}; margin-bottom: 8px;">✓</div>
                <div style="font-size: ${baseSize * 0.875}px; opacity: 0.8;">Responsive design</div>
              </div>
            </div>

            <div style="text-align: center;">
              <a href="https://github.com/AlvaroCascante/PedalPalService" target="_blank" rel="noopener noreferrer" style="display: inline-flex; align-items: center; gap: 12px; padding: 16px 32px; background-color: ${config.primary_action_color}; color: white; border-radius: 12px; text-decoration: none; font-size: ${baseSize * 1.125}px; font-weight: 600; box-shadow: 0 4px 12px rgba(59, 130, 246, 0.3);">
                View on GitHub
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true">
                  <path d="M5 12h14M12 5l7 7-7 7"/>
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Call to Action Section -->
    <section style="padding: 80px 24px; background: linear-gradient(135deg, ${config.surface_color} 0%, ${config.background_color} 100%); text-align: center;">
      <div style="max-width: 700px; margin: 0 auto;" class="container">
        <h2 style="font-size: ${baseSize * 2.5}px; font-weight: 700; margin-bottom: 24px;">Let's Work Together</h2>
        <p style="font-size: ${baseSize * 1.125}px; opacity: 0.8; margin-bottom: 40px; line-height: 1.7;">
          I'm always interested in hearing about new projects and opportunities. Whether you have a question or just want to say hi, feel free to reach out!
        </p>
        <a href="${config.linkedin_url}" target="_blank" rel="noopener noreferrer" style="display: inline-block; padding: 18px 40px; background-color: ${config.primary_action_color}; color: white; border-radius: 12px; text-decoration: none; font-size: ${baseSize * 1.125}px; font-weight: 600; box-shadow: 0 6px 20px rgba(59, 130, 246, 0.4); transition: transform 0.3s ease;">
          ${config.cta_button_text}
        </a>
      </div>
    </section>

    <!-- Footer will be loaded separately into #footer-root -->
  `;

  attachHoverEffects();
  loadFooter();
}

function attachHoverEffects() {
  const ctaButton = document.querySelector('a[href*="linkedin"]:last-of-type');
  if (ctaButton) {
    ctaButton.addEventListener('mouseenter', (e) => {
      e.target.style.transform = 'translateY(-4px)';
    });
    ctaButton.addEventListener('mouseleave', (e) => {
      e.target.style.transform = 'translateY(0)';
    });
  }
}

async function loadFooter() {
  const root = document.getElementById('footer-root');
  if (!root) return;
  try {
    const res = await fetch('partials/footer.html', { cache: 'no-store' });
    if (res.ok) {
      root.innerHTML = await res.text();
      const yearEl = root.querySelector('#year');
      if (yearEl) yearEl.textContent = new Date().getFullYear();
      return;
    }
  } catch (err) {
    // swallow and provide fallback footer
  }
  root.innerHTML = `<footer style="padding: 40px 24px; background-color: ${defaultConfig.background_color}; text-align: center; border-top: 1px solid ${defaultConfig.surface_color};"><p style="font-size: 14px; opacity: 0.6">© ${new Date().getFullYear()} ${defaultConfig.hero_name}. Built with care.</p></footer>`;
}

async function onConfigChange(config) {
  renderApp();
}

const element = {
  defaultConfig,
  onConfigChange,
  mapToCapabilities: (config) => ({
    recolorables: [
      {
        get: () => config.background_color || defaultConfig.background_color,
        set: (value) => {
          config.background_color = value;
          window.elementSdk.setConfig({ background_color: value });
        }
      },
      {
        get: () => config.surface_color || defaultConfig.surface_color,
        set: (value) => {
          config.surface_color = value;
          window.elementSdk.setConfig({ surface_color: value });
        }
      },
      {
        get: () => config.text_color || defaultConfig.text_color,
        set: (value) => {
          config.text_color = value;
          window.elementSdk.setConfig({ text_color: value });
        }
      },
      {
        get: () => config.primary_action_color || defaultConfig.primary_action_color,
        set: (value) => {
          config.primary_action_color = value;
          window.elementSdk.setConfig({ primary_action_color: value });
        }
      },
      {
        get: () => config.secondary_action_color || defaultConfig.secondary_action_color,
        set: (value) => {
          config.secondary_action_color = value;
          window.elementSdk.setConfig({ secondary_action_color: value });
        }
      }
    ],
    borderables: [],
    fontEditable: {
      get: () => config.font_family || defaultConfig.font_family,
      set: (value) => {
        config.font_family = value;
        window.elementSdk.setConfig({ font_family: value });
      }
    },
    fontSizeable: {
      get: () => config.font_size || defaultConfig.font_size,
      set: (value) => {
        config.font_size = value;
        window.elementSdk.setConfig({ font_size: value });
      }
    }
  }),
  mapToEditPanelValues: (config) => new Map([
    ['hero_name', config.hero_name || defaultConfig.hero_name],
    ['hero_title', config.hero_title || defaultConfig.hero_title],
    ['hero_description', config.hero_description || defaultConfig.hero_description],
    ['linkedin_url', config.linkedin_url || defaultConfig.linkedin_url],
    ['github_url', config.github_url || defaultConfig.github_url],
    ['project_title', config.project_title || defaultConfig.project_title],
    ['project_tagline', config.project_tagline || defaultConfig.project_tagline],
    ['project_description', config.project_description || defaultConfig.project_description],
    ['cta_button_text', config.cta_button_text || defaultConfig.cta_button_text]
  ])
};

if (window.elementSdk) {
  window.elementSdk.init(element);
}

document.addEventListener('DOMContentLoaded', renderApp);

