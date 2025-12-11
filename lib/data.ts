// Mock data for the application

export const stores = [
  { id: "23", name: "Leroy Merlin Arad", city: "Arad", x: 80, y: 120, status: "online" as const },
  { id: "26", name: "Leroy Merlin Astra", city: "Brasov", x: 260, y: 170, status: "online" as const },
  { id: "05", name: "Leroy Merlin Grivitei", city: "Brasov", x: 270, y: 180, status: "online" as const },
  { id: "14", name: "Leroy Merlin Bacau", city: "Bacau", x: 310, y: 140, status: "offline" as const },
  { id: "01", name: "Leroy Merlin Bucuresti Nord", city: "Bucuresti", x: 280, y: 230, status: "online" as const },
  { id: "02", name: "Leroy Merlin Bucuresti Sud", city: "Bucuresti", x: 285, y: 240, status: "online" as const },
  { id: "03", name: "Leroy Merlin Colentina", city: "Bucuresti", x: 290, y: 235, status: "online" as const },
  { id: "07", name: "Leroy Merlin Cluj", city: "Cluj", x: 150, y: 100, status: "online" as const },
  { id: "08", name: "Leroy Merlin Constanta", city: "Constanta", x: 350, y: 220, status: "online" as const },
  { id: "09", name: "Leroy Merlin Craiova", city: "Craiova", x: 160, y: 210, status: "online" as const },
  { id: "10", name: "Leroy Merlin Iasi", city: "Iasi", x: 320, y: 80, status: "online" as const },
  { id: "11", name: "Leroy Merlin Oradea", city: "Oradea", x: 90, y: 90, status: "online" as const },
  { id: "12", name: "Leroy Merlin Pitesti", city: "Pitesti", x: 220, y: 200, status: "online" as const },
  { id: "13", name: "Leroy Merlin Ploiesti", city: "Ploiesti", x: 260, y: 190, status: "online" as const },
  { id: "15", name: "Leroy Merlin Sibiu", city: "Sibiu", x: 200, y: 160, status: "online" as const },
  { id: "16", name: "Leroy Merlin Suceava", city: "Suceava", x: 280, y: 60, status: "online" as const },
  { id: "17", name: "Leroy Merlin Targu Mures", city: "Targu Mures", x: 220, y: 120, status: "online" as const },
  { id: "18", name: "Leroy Merlin Timisoara", city: "Timisoara", x: 70, y: 160, status: "online" as const },
]

export const storesByCity = stores.reduce(
  (acc, store) => {
    if (!acc[store.city]) {
      acc[store.city] = []
    }
    acc[store.city].push(store)
    return acc
  },
  {} as Record<string, typeof stores>,
)

export const adeoSystems = [
  { id: "mdm", name: "MDM", description: "Customer Repository System", status: "online" as const },
  { id: "lys", name: "LYS", description: "Loyalty System", status: "online" as const },
  { id: "pyxis", name: "Pyxis", description: "Order Management System", status: "online" as const },
  { id: "corde", name: "CordE", description: "Deposit Management System", status: "online" as const },
  { id: "ddgb", name: "DDGB", description: "Invoicing System", status: "offline" as const },
]

export const lmroSystems = [
  { id: "delivery", name: "Delivery App", description: "Mobility System", status: "online" as const },
  { id: "webapi", name: "Web API", description: "Deposit Management System", status: "online" as const },
  { id: "risco", name: "RISCO", description: "Entity Verification System", status: "online" as const },
]

export const omnistoreSystems = [
  { id: "gcp", name: "GCP", description: "Google Cloud Platform", status: "online" as const },
  { id: "symds", name: "SymDS", description: "Symmetric Data Sync", status: "online" as const },
  { id: "postgres", name: "PostgreSQL", description: "Database", status: "online" as const },
]

export const gkeOverview = {
  clusters: 1,
  regions: 2,
  zones: 3,
  pods: 13,
  nodePools: 2,
  nodes: 4,
  containers: 13,
  services: 24,
}

export const cloudSqlMetrics = {
  cpu: 44.59,
  memory: 9.14,
  disk: 88.413,
  backupStatus: "OK",
  backupDate: "03-08-2025 13:45:03",
}

export const podInfo = {
  name: "Adeo-LMRO-Middlware-SFTP-Sync",
  status: "OK",
  restarts: 2,
  cpu: 44.59,
  memory: 9.14,
  disk: 88.413,
}

export const ddgbImpacts = [
  "The standard invoice cannot be generated at stores.",
  "The reprint of the standard invoices cannot be generated.",
  "The standard invoices will not be reported to E-Factura system.",
]

export const storeTills = {
  "14": {
    storeName: "Leroy Merlin Bacau",
    storeId: "14",
    areas: [
      {
        name: "Linia Caselor",
        tills: [
          { id: "01", status: "online" as const },
          { id: "02", status: "online" as const },
          { id: "03", status: "online" as const },
          { id: "04", status: "online" as const },
          { id: "05", status: "online" as const },
          { id: "06", status: "online" as const },
          { id: "07", status: "online" as const },
          { id: "08", status: "offline" as const },
        ],
      },
      {
        name: "Casa Retur",
        tills: [
          { id: "09", status: "online" as const },
          { id: "10", status: "online" as const },
        ],
      },
      {
        name: "Casa Seif",
        tills: [
          { id: "11", status: "offline" as const },
          { id: "12", status: "online" as const },
        ],
      },
      {
        name: "Casa BATI/Livrare",
        tills: [
          { id: "13", status: "online" as const },
          { id: "14", status: "online" as const },
        ],
      },
    ],
  },
}

export const tillDetails = {
  "014008": {
    casaNumerar: "014008",
    casaLocatie: "Linia Caselor",
    omnistoreVersion: "1.1.44.21",
    symdsVersion: "3.13.5",
    postgresVersion: "15.5",
    services: [
      { name: "Cash Register", status: "online" as const, icon: "register" },
      { name: "Data Sync", status: "online" as const, icon: "sync" },
      { name: "Cookie", status: "offline" as const, icon: "cookie" },
    ],
    devices: [
      { name: "Printer", status: "online" as const, icon: "printer" },
      { name: "Scanner", status: "online" as const, icon: "scanner" },
      { name: "Display", status: "online" as const, icon: "display" },
      { name: "Cash Drawer", status: "online" as const, icon: "drawer" },
    ],
  },
}
