// URLs vers l'application Glass It (back-office).
// Configurable via PUBLIC_APP_URL (dev: http://localhost:3000, prod: l'URL de l'app déployée).
const APP_URL = import.meta.env.PUBLIC_APP_URL ?? 'http://localhost:3000'

export const REGISTER_URL = `${APP_URL}/register`
export const LOGIN_URL = `${APP_URL}/login`
