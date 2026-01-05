import { MaintenanceConfig, PageConfig, WorkerConfig } from './types/config'
const pageConfig: PageConfig = {
  title: "Iwara.tv Status",
  links: [
    { link: 'https://github.com/dawn-lc', label: 'GitHub' },
    { link: 'https://www.iwara.tv/', label: 'Iwara.tv' },
    { link: 'mailto:admin@dawnlc.me', label: 'Email Me', highlight: true },
  ]
}
const workerConfig: WorkerConfig = {
  monitors: [
    {
      id: 'iwara_logo',
      name: 'Iwara Main Site',
      method: 'GET',
      target: 'https://www.iwara.tv/logo.png',
      expectedCodes: [200],
      timeout: 1000,
      hideLatencyChart: false
    },
    {
      id: 'iwara_api',
      name: 'Iwara API',
      method: 'GET',
      target: 'https://api.iwara.tv/forum/threads?limit=5',
      expectedCodes: [200],
      timeout: 1000,
      headers: {
        'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64; rv:146.0) Gecko/20100101 Firefox/146.0',
        'Accept': 'application/json',
        'Accept-Language': 'zh-CN,en-US;q=0.7,en;q=0.3',
        'Content-Type': 'application/json',
        'X-Site': 'www.iwara.tv',
        'Pragma': 'no-cache',
        'Cache-Control': 'no-cache'
      }
    },
    {
      id: 'iwara_files',
      name: 'Iwara Files CDN',
      method: 'GET',
      target: 'https://files.iwara.tv/',
      expectedCodes: [200, 301, 302, 403, 404],
      timeout: 1000,
      headers: {
        'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64; rv:146.0) Gecko/20100101 Firefox/146.0',
        'Accept': 'text/html,application/xhtml+xml,application/xml;q=0.9,*/*;q=0.8',
        'Accept-Language': 'zh-CN,en-US;q=0.7,en;q=0.3',
        'Pragma': 'no-cache',
        'Cache-Control': 'no-cache'
      }
    }
  ],
  notification: {}
}

const maintenances: MaintenanceConfig[] = []

export { maintenances, pageConfig, workerConfig }
