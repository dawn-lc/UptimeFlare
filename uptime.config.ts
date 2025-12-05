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
      id: 'ping_files_iwara',
      name: 'Iwara Files CDN Connectivity',
      method: 'TCP_PING',
      target: 'files.iwara.tv:443',
      timeout: 5000
    },
    {
      id: 'ping_api_iwara',
      name: 'Iwara API Endpoint Connectivity',
      method: 'TCP_PING',
      target: 'api.iwara.tv:443',
      timeout: 5000
    },
    {
      id: 'get_iwara_logo',
      name: 'Iwara Main Site',
      method: 'GET',
      target: 'https://www.iwara.tv/logo.png',
      expectedCodes: [200],
      timeout: 10000,
      hideLatencyChart: false
    }
  ],
  notification: {}
}

const maintenances: MaintenanceConfig[] = []

export { maintenances, pageConfig, workerConfig }
