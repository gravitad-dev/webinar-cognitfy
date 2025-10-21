export const getAnalyticsAttr = (action: string): Record<string, string> => {
  return { 'data-analytics': action }
}

export const getSessionCTAAnalytics = (sessionId: string): Record<string, string> => {
  return { 'data-analytics': `cta_card_agent_open_${sessionId}` }
}

export const ANALYTICS_KEYS = {
  CTA_HERO_AGENT: 'cta_hero_agent_open',
  CTA_DEMO: 'cta_demo',
  CTA_NAV: 'cta_nav_reservar',
  DOWNLOAD_CHECKLIST: 'download_assets_checklist',
  EXP_HERO_VARIANT: 'exp_hero_variant',
} as const

