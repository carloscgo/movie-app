import routes from './routes'

export const RESTART_ON_REMOUNT = '@@saga-injector/restart-on-remount'
export const DAEMON = '@@saga-injector/daemon'
export const ONCE_TILL_UNMOUNT = '@@saga-injector/once-till-unmount'

const __VITE_APP__ = window.__VITE_APP__

export { 
  routes,
  __VITE_APP__
}
