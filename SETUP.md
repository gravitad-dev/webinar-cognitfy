# Guía de Setup Rápida

## 🚀 Inicio Rápido

```bash
# 1. Instalar dependencias
npm install

# 2. Iniciar en modo desarrollo
npm run dev
```

Abre [http://localhost:3000](http://localhost:3000) en tu navegador.

## ✅ Checklist de Verificación

### Antes de Desplegar

- [ ] Todas las dependencias instaladas sin errores
- [ ] Build exitoso: `npm run build`
- [ ] Sin errores de TypeScript
- [ ] Sin errores de linter: `npm run lint`
- [ ] Lighthouse móvil: Performance ≥ 90, A11y ≥ 95, SEO ≥ 95

### Personalización Requerida

- [ ] **Ponentes**: Actualizar nombres y cargos en `components/Speakers.tsx`
- [ ] **OG Image**: Crear `/public/og-image.jpg` (1200x630px)
- [ ] **Dominio**: Actualizar `metadataBase` en `app/layout.tsx`
- [ ] **Analytics**: Conectar atributos `data-analytics` con tu herramienta
- [ ] **CTAs**: Implementar lógica de los botones (modal, integración con agente, etc.)

## 📦 Estructura de Archivos

```
webinar/
├── app/                    # Next.js App Router
│   ├── layout.tsx         # Layout + SEO + JSON-LD
│   ├── page.tsx           # Página principal
│   └── globals.css        # Estilos Tailwind
├── components/            # Componentes UI (15 componentes)
├── lib/                   # Utilidades
│   ├── analytics.ts       # Helpers analytics
│   ├── dates.ts          # Formateo de fechas
│   └── schema.ts         # JSON-LD generators
├── types/                # Tipos TypeScript
│   └── session.ts        # Interfaces + datos
└── public/               # Archivos estáticos (crear si necesario)
```

## 🎨 Customización de Colores

Edita `tailwind.config.ts`:

```typescript
colors: {
  primary: {
    50: '#f0f9ff',   // Azul muy claro
    600: '#0284c7',  // Azul principal (CTAs)
    700: '#0369a1',  // Azul hover
    // ... resto de la paleta
  },
}
```

## 🔗 Integrar CTAs

Los botones tienen placeholders. Para activarlos:

1. **Modal**: Crear componente `<AgentModal>` y manejarlo con estado
2. **Redirect**: Cambiar `<button>` por `<Link>` o `<a>`
3. **Analytics**: Leer atributos `data-analytics` en tu tracker

Ejemplo:
```tsx
<button
  onClick={() => trackEvent('cta_hero_agent_open')}
  data-analytics="cta_hero_agent_open"
>
  Hablar con el agente
</button>
```

## 🌐 Deploy

### Vercel (Recomendado)

```bash
npx vercel
```

### Otros Providers

```bash
npm run build
# Subir carpeta .next + node_modules o usar Docker
```

## 📊 Testing Performance

```bash
# Build de producción
npm run build
npm start

# Lighthouse CLI (opcional)
npx lighthouse http://localhost:3000 --view
```

## 🛠️ Troubleshooting

### Error: Cannot find module '@/...'

Verifica que `tsconfig.json` tenga:
```json
"paths": {
  "@/*": ["./*"]
}
```

### Fechas incorrectas

Asegúrate de que tu sistema esté en zona horaria correcta o ajusta `Europe/Madrid` en `lib/dates.ts`.

### Imágenes no cargan

Crea `/public/` y coloca ahí tus assets (logos, og-image, etc.).

## 📞 Soporte

Para dudas o problemas, contacta al equipo de Cognitfy.

---

**¡Listo para lanzar!** 🎉

