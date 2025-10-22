# Cognitfy Webinar Landing Page

Landing page production-ready para el webinar de Cognitfy sobre automatización con ROI medible.

## Stack

- **Next.js 14+** (App Router)
- **TypeScript** (strict mode)
- **Tailwind CSS** (sin frameworks adicionales)
- **React 18+**

## Características

### ✅ SEO Optimizado
- Metadata completo con OpenGraph y Twitter Cards
- JSON-LD Schema para Event (4 sesiones) y FAQPage
- Canonical URL configurado
- Robots meta configurado

### ✅ Performance
- Server Components por defecto
- Client Components solo donde se necesita estado (Countdown, StickyCTA)
- Optimizado para móvil (Performance ≥ 90)
- `next/image` listo para usar
- Fuentes optimizadas con `next/font`

### ✅ Accesibilidad
- WCAG AA compliant
- Semántica HTML correcta
- Labels y ARIA attributes
- Focus visible en todos los elementos interactivos
- Respeta `prefers-reduced-motion`

### ✅ Analytics Ready
- Atributos `data-analytics` en todos los CTAs
- Sin lógica implementada (placeholder)
- Listo para integrar con herramientas de analytics

## Estructura del Proyecto

```
/app
  layout.tsx         # Layout principal con SEO y JSON-LD
  page.tsx           # Página principal
  globals.css        # Estilos Tailwind

/components
  Hero.tsx           # Hero con título, subtítulo y CTAs
  Countdown.tsx      # Contador regresivo (Client Component)
  SessionCard.tsx    # Card individual de sesión
  SessionPicker.tsx  # Selector de 4 sesiones
  Partners.tsx       # Franja de partners
  Benefits.tsx       # Qué te llevarás
  Agenda.tsx         # Programa del webinar
  UniqueCognitfy.tsx # Features únicas de Cognitfy
  Stats.tsx          # Métricas y resultados
  Sectors.tsx        # Sectores/casos de uso
  Speakers.tsx       # Ponentes
  Bonuses.tsx        # Bonos por asistir
  FAQ.tsx            # Preguntas frecuentes
  Footer.tsx         # Footer con RGPD
  StickyCTA.tsx      # CTA sticky móvil (Client Component)

/lib
  dates.ts           # Utilidades de fechas (es-ES, Europe/Madrid)
  schema.ts          # Generadores de JSON-LD
  analytics.ts       # Helpers para atributos analytics

/types
  session.ts         # Tipos e interfaces + datos de sesiones y FAQs
```

## Instalación

```bash
# Instalar dependencias
npm install

# Modo desarrollo
npm run dev

# Build production
npm run build

# Iniciar production
npm start
```

## Sesiones del Webinar

- **Miércoles, 29 de octubre 2025** - 18:00 CET
- **Jueves, 30 de octubre 2025** - 18:00 CET
- **Miércoles, 12 de noviembre 2025** - 18:00 CET
- **Jueves, 13 de noviembre 2025** - 18:00 CET

**Nota:** El cambio horario de verano a invierno en Europa ocurre el 26 de octubre de 2025.

## CTAs (Placeholders)

Todos los botones tienen atributos `data-analytics` y `data-action="placeholder"`:

- `Hablar con el agente` (hero y sticky)
- `Quiero una demo de Cognitfy`
- `Hablar con el agente {fecha}` (por cada sesión)
- `Descargar checklist + calculadora`

No hay lógica implementada. Los botones están listos para integrar con tu backend/modal/agente.

## Customización

### Colores
Modifica el tema en `tailwind.config.ts`:
```typescript
colors: {
  primary: {
    // ... tus colores
  }
}
```

### Contenido
Todo el copy está en los componentes en español. Modifica directamente o extrae a un sistema de i18n si necesitas múltiples idiomas.

## Lighthouse Scores (Objetivo)

- **Performance:** ≥ 90
- **Accessibility:** ≥ 95
- **SEO:** ≥ 95
- **Best Practices:** ≥ 90

## Notas Técnicas

- Sin uso de `any` (TypeScript strict)
- Interfaces con prefijo `I` (ej: `ISession`)
- Imports ordenados: external → absolute → relative
- Un componente por archivo
- Arrow functions para componentes
- Early returns para estados de carga/error

## Licencia

© 2025 Cognitfy. Todos los derechos reservados.

# webinar-cognitfy
