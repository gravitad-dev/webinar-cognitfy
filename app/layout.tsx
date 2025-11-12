  import { Inter } from 'next/font/google'
  import Script from 'next/script'

  import { generateAllEventsSchema, generateFAQSchema } from '@/lib/schema'
  import WidgetController from '@/components/WidgetController'
  import AckeeTracker from '@/components/AckeeTracker'

  import './globals.css'

  import type { Metadata } from 'next'

  const inter = Inter({
    subsets: ['latin'],
    variable: '--font-inter',
    display: 'swap',
  })

  export const metadata: Metadata = {
    title: 'Webinar Cognitfy: Automatización con ROI medible | Reduce costes hasta un 70%',
    description:
      'Aprende a calcular el coste por proceso y a desplegar automatizaciones 100% personalizadas con Cognitfy. Webinar en vivo: 20 y 21 de noviembre 2025. Plazas limitadas.',
    keywords:
      'automatización, ROI, procesos, Cognitfy, webinar, ahorro de costes, eficiencia operativa',
    authors: [{ name: 'Cognitfy' }],
    creator: 'Cognitfy',
    publisher: 'Cognitfy',
    metadataBase: new URL('https://cognitfy.com'),
    alternates: {
      canonical: '/webinar',
    },
    icons: {
      icon: '/logo/icono.png',
      apple: '/logo/icono.png',
    },
    openGraph: {
      type: 'website',
      locale: 'es_ES',
      url: '/webinar',
      title: 'Webinar Cognitfy: Reduce hasta un 70% el coste de tus procesos',
      description:
        'Aprende a medir, priorizar y automatizar procesos con Cognitfy. Webinar gratuito en vivo con 2 sesiones el 20 y 21 de noviembre 2025.',
      siteName: 'Cognitfy',
      images: [
        {
          url: '/og-image.jpg',
          width: 1200,
          height: 630,
          alt: 'Webinar Cognitfy - Automatización con ROI',
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title: 'Webinar Cognitfy: Automatización con ROI medible',
      description: 'Reduce hasta un 70% el coste de tus procesos. Sesiones en vivo el 20 y 21 de noviembre 2025.',
      images: ['/og-image.jpg'],
    },
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        'max-video-preview': -1,
        'max-image-preview': 'large',
        'max-snippet': -1,
      },
    },
  }

  interface IRootLayoutProps {
    children: React.ReactNode
  }

  const RootLayout = ({ children }: IRootLayoutProps) => {
    const eventsSchema = generateAllEventsSchema()
    const faqSchema = generateFAQSchema()

    return (
      <html lang="es" className={inter.variable}>
        <head>
          <Script
            id="json-ld-events"
            type="application/ld+json"
            dangerouslySetInnerHTML={{
              __html: JSON.stringify(eventsSchema),
            }}
          />
          <Script
            id="json-ld-faq"
            type="application/ld+json"
            dangerouslySetInnerHTML={{
              __html: JSON.stringify(faqSchema),
            }}
          />
          <Script
            src="https://unpkg.com/@elevenlabs/convai-widget-embed"
            strategy="afterInteractive"
          />
          <Script
            src="http://18.118.100.235:2337/tracker.js"
            strategy="afterInteractive"
          />
        </head>
        <body className={inter.className}>
          <AckeeTracker />
          <WidgetController />
          <div
            id="cognitfy-watermark"
            style={{
              position: 'fixed',
              bottom: '20px',
              right: '20px',
              fontSize: '12px',
              color: '#4b5563',
              fontFamily: 'system-ui, -apple-system, sans-serif',
              fontWeight: 'bold',
              opacity: 0.4,
              pointerEvents: 'none',
              zIndex: 9999,
              display: 'none',
            }}
          >
        Designed by Cognitfy
          </div>
          {children}
          <Script
            id="hide-elevenlabs-branding"
            strategy="lazyOnload"
            dangerouslySetInnerHTML={{
              __html: `
                (function() {
                  function hideBranding() {
                    const widget = document.querySelector('elevenlabs-convai');
                    if (!widget) return;
                    
                    const shadowRoot = widget.shadowRoot;
                    if (shadowRoot) {
                      const selectors = ['[class*="powered"]', '[class*="branding"]', '[class*="footer"]', 'a[href*="elevenlabs"]', 'a[href*="Agents"]'];
                      selectors.forEach(sel => {
                        shadowRoot.querySelectorAll(sel).forEach(el => {
                          el.style.display = 'none';
                          el.style.visibility = 'hidden';
                          el.style.opacity = '0';
                          el.style.height = '0';
                          el.style.overflow = 'hidden';
                        });
                      });
                      
                      const walker = document.createTreeWalker(shadowRoot, NodeFilter.SHOW_TEXT);
                      const nodesToHide = [];
                      let node;
                      while (node = walker.nextNode()) {
                        if (node.textContent && /powered\\s+by/i.test(node.textContent)) {
                          nodesToHide.push(node);
                        }
                      }
                      nodesToHide.forEach(n => {
                        if (n.parentElement) {
                          n.parentElement.style.display = 'none';
                        }
                      });
                      
                      try {
                        const style = document.createElement('style');
                        style.textContent = '[class*="powered"],[class*="branding"],[class*="footer"],a[href*="elevenlabs"],a[href*="Agents"]{display:none!important;visibility:hidden!important;opacity:0!important;height:0!important;overflow:hidden!important;}';
                        shadowRoot.appendChild(style);
                      } catch(e) {}
                    }
                  }
                  
                  function customizeButton() {
                    const widget = document.querySelector('elevenlabs-convai');
                    if (!widget) return;
                    
                    const shadowRoot = widget.shadowRoot;
                    if (!shadowRoot) return;
                    
                    const containers = shadowRoot.querySelectorAll('div');
                    let largeContainer = null;
                    
                    containers.forEach(div => {
                      const rect = div.getBoundingClientRect();
                      if (rect.width > 300 && rect.height > 300) {
                        largeContainer = div;
                      }
                    });
                    
                    const buttons = shadowRoot.querySelectorAll('button');
                    
                    buttons.forEach(btn => {
                      const svg = btn.querySelector('svg');
                      if (!svg || btn.offsetWidth === 0) return;
                      
                      const rect = btn.getBoundingClientRect();
                      const isCircular = Math.abs(rect.width - rect.height) < 10;
                      const isPhoneButton = rect.width >= 50 && rect.width <= 80;
                      
                      if (!isCircular || !isPhoneButton) return;
                      
                      const isInsideLargeContainer = largeContainer && largeContainer.contains(btn);
                      
                      if (svg.style.display !== 'none') {
                        svg.style.display = 'none';
                        
                        btn.style.width = 'auto';
                        btn.style.height = 'auto';
                        btn.style.padding = '6px 10px';
                        btn.style.borderRadius = '18px';
                        btn.style.fontSize = '10px';
                        btn.style.fontWeight = '600';
                        btn.style.whiteSpace = 'nowrap';
                        
                        let textSpan = btn.querySelector('.custom-text-widget');
                        if (!textSpan) {
                          textSpan = document.createElement('span');
                          textSpan.className = 'custom-text-widget';
                          textSpan.style.color = 'white';
                          btn.appendChild(textSpan);
                        }
                        
                        if (isInsideLargeContainer) {
                          textSpan.textContent = 'Llamar ahora';
                          btn.dataset.buttonType = 'modal-button';
                        } else {
                          textSpan.textContent = 'Toque aquí para iniciar';
                          btn.dataset.buttonType = 'floating-button';
                        }
                      }
                    });
                  }
                  
                   function positionCogniftyWatermark() {
                     const widget = document.querySelector('elevenlabs-convai');
                     const watermark = document.getElementById('cognitfy-watermark');
                     if (!widget || !watermark) return;
                     
                     const shadowRoot = widget.shadowRoot;
                     if (!shadowRoot) return;
                     
                     const container = shadowRoot.querySelector('[class*="container"]') || shadowRoot.querySelector('div');
                     if (container) {
                       const isOpen = container.offsetWidth > 100 || container.offsetHeight > 100;
                       
                       if (isOpen) {
                         const rect = container.getBoundingClientRect();
                         watermark.style.display = 'block';
                         watermark.style.bottom = (window.innerHeight - rect.bottom - 20) + 'px';
                         watermark.style.right = (window.innerWidth - rect.right + 12) + 'px';
                       } else {
                         watermark.style.display = 'none';
                       }
                     }
                   }
                  
                  hideBranding();
                  customizeButton();
                  setTimeout(hideBranding, 100);
                  setTimeout(customizeButton, 100);
                  setTimeout(hideBranding, 500);
                  setTimeout(customizeButton, 500);
                  setTimeout(hideBranding, 1000);
                  setTimeout(customizeButton, 1000);
                  setTimeout(hideBranding, 2000);
                  setTimeout(customizeButton, 2000);
                  
                  positionCogniftyWatermark();
                  setInterval(positionCogniftyWatermark, 500);
                  setInterval(customizeButton, 500);
                  
                  new MutationObserver(() => {
                    hideBranding();
                    positionCogniftyWatermark();
                    customizeButton();
                  }).observe(document.body, {childList: true, subtree: true});
                })();
              `,
            }}
          />
        </body>
      </html>
    )
  }

  export default RootLayout

