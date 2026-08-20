import type { ProductWithCodes } from '@/types/products/productTypes'

export const mockedProducts: ProductWithCodes[] = [
  {
    id: '239395d5-7679-462e-a640-73191e4b9ab1',
    title: 'Logitech G PRO X Superlight 2',
    subtitle: 'Wireless Gaming Mouse, Hero 2 Sensor',
    provider: 'Logitech',
    brand: 'Logitech G',
    category: 'Periféricos',
    costPrice: 11000,
    costCurrency: 'USD',
    salePrice: 15900,
    saleCurrency: 'USD',
    stock: 50,
    codes: [
      {
        id: '080b49e7-69b2-47f6-b1bb-3d0053b05916',
        productId: '239395d5-7679-462e-a640-73191e4b9ab1',
        code: '910-006628',
        type: 'BARCODE_PROVIDER',
        isMain: false
      },
      {
        id: 'df9071f3-39a6-4457-aa9f-a4d04d1a71f3',
        productId: '239395d5-7679-462e-a640-73191e4b9ab1',
        code: 'QR-GPX2-BLACK',
        type: 'QR_INTERNAL',
        isMain: false
      }
    ]
  },
  {
    id: '32ef4694-08bb-42e3-b947-efc03378c1b0',
    title: 'Corsair Dominator Platinum RGB 64GB DDR5 6000MHz',
    subtitle: 'C36 Desktop Memory',
    provider: 'Corsair',
    brand: 'Corsair',
    category: 'Memorias RAM',
    costPrice: 18000,
    costCurrency: 'EUR',
    salePrice: 23000,
    saleCurrency: 'EUR',
    stock: 30,
    codes: []
  },
  {
    id: '48a37d96-be6a-4da1-bab1-5e9dbbf5e45f',
    title: 'ASUS ROG Strix GeForce RTX 4090 OC Edition',
    subtitle: '24GB GDDR6X',
    provider: 'ASUS',
    brand: 'ASUS ROG',
    category: 'Tarjetas Gráficas',
    costPrice: 170000,
    costCurrency: 'USD',
    salePrice: 210000,
    saleCurrency: 'USD',
    stock: 5,
    codes: [
      {
        id: '75bac4b5-47e6-4117-84dd-ee49dc0e4a92',
        productId: '48a37d96-be6a-4da1-bab1-5e9dbbf5e45f',
        code: 'ROG-STRIX-RTX4090-O24G-GAMING',
        type: 'BARCODE_PROVIDER',
        isMain: false
      },
      {
        id: 'c2059028-8c69-4da5-a84d-8bd122f054bd',
        productId: '48a37d96-be6a-4da1-bab1-5e9dbbf5e45f',
        code: 'SAME-CODE-2',
        type: 'BARCODE_INTERNAL',
        isMain: false
      }
    ]
  },
  {
    id: '6751707d-6b78-4fc1-90c1-578d194e9531',
    title: 'Fuente de Poder Thermaltake 850W',
    subtitle: '80 Plus Gold Modular',
    provider: 'Thermaltake',
    brand: 'Thermaltake',
    category: 'Fuentes de Poder',
    costPrice: 450000,
    costCurrency: 'UYU',
    salePrice: 620000,
    saleCurrency: 'UYU',
    stock: 25,
    codes: []
  },
  {
    id: '68bb0c3d-e5a3-4da3-936c-0b4ff93ca683',
    title: 'iBUYPOWER HYTE Y40 Hatsune Miku Edition',
    subtitle: 'Intel i7-13700KF, RTX 4070 Ti, 32GB DDR5',
    provider: 'iBUYPOWER',
    brand: 'iBUYPOWER',
    category: 'PCs de Escritorio',
    costPrice: 180000,
    costCurrency: 'USD',
    salePrice: 230000,
    saleCurrency: 'USD',
    stock: 3,
    codes: [
      {
        id: 'c57e9009-38fb-42f3-983c-3f47091cb48b',
        productId: '68bb0c3d-e5a3-4da3-936c-0b4ff93ca683',
        code: 'Y40-MIKU-EDITION',
        type: 'BARCODE_PROVIDER',
        isMain: false
      },
      {
        id: '04c1bb56-0063-4aab-9049-c15f22f83304',
        productId: '68bb0c3d-e5a3-4da3-936c-0b4ff93ca683',
        code: '0810141630132',
        type: 'BARCODE_INTERNAL',
        isMain: false
      },
      {
        id: '2ae2bd6d-73fd-45ec-91d9-e27e6dce942a',
        productId: '68bb0c3d-e5a3-4da3-936c-0b4ff93ca683',
        code: 'SAME-CODE-2',
        type: 'QR_INTERNAL',
        isMain: false
      }
    ]
  },
  {
    id: '6e2a9e11-7072-4aa1-94ee-1de8378408e7',
    title: 'AMD Ryzen 7 7800X3D',
    subtitle: '8-Core, 16-Thread Desktop Processor',
    provider: 'AMD',
    brand: 'AMD',
    category: 'Procesadores',
    costPrice: 32000,
    costCurrency: 'USD',
    salePrice: 40000,
    saleCurrency: 'USD',
    stock: 45,
    codes: [
      {
        id: '598e530c-760e-41a5-9c73-41b31e41acc7',
        productId: '6e2a9e11-7072-4aa1-94ee-1de8378408e7',
        code: '100-100000910WOF',
        type: 'BARCODE_PROVIDER',
        isMain: false
      },
      {
        id: 'aa57c21f-70f7-4e86-8ed6-11b075c59936',
        productId: '6e2a9e11-7072-4aa1-94ee-1de8378408e7',
        code: '0730143314930',
        type: 'BARCODE_INTERNAL',
        isMain: false
      },
      {
        id: '68864b7c-4256-4002-9c67-90c98e9a0090',
        productId: '6e2a9e11-7072-4aa1-94ee-1de8378408e7',
        code: 'QR-AMD-7800X3D',
        type: 'QR_INTERNAL',
        isMain: false
      },
      {
        id: 'c49bc953-2d48-4222-97cd-26c563d5a0d7',
        productId: '6e2a9e11-7072-4aa1-94ee-1de8378408e7',
        code: 'SAME-CODE-1',
        type: 'BARCODE_INTERNAL',
        isMain: false
      }
    ]
  },
  {
    id: '81bcc9c9-290e-4295-ac61-e0fd8bee0007',
    title: 'ASUS ROG Crosshair X670E Hero',
    subtitle: 'ATX Motherboard, PCIe 5.0, WiFi 6E',
    provider: 'ASUS',
    brand: 'ASUS ROG',
    category: 'Placas Madre',
    costPrice: 55000,
    costCurrency: 'USD',
    salePrice: 65000,
    saleCurrency: 'USD',
    stock: 10,
    codes: []
  },
  {
    id: '86fc3996-094e-495f-a030-43c76bff7bfe',
    title: 'ASUS ROG Zephyrus G14 (2024)',
    subtitle: '14" OLED 3K 120Hz, Ryzen 9 8945HS, RTX 4070',
    provider: 'ASUS',
    brand: 'ASUS ROG',
    category: 'Laptops',
    costPrice: 140000,
    costCurrency: 'USD',
    salePrice: 180000,
    saleCurrency: 'USD',
    stock: 8,
    codes: []
  },
  {
    id: 'aa5a2a90-1321-491a-94db-5dddd54ce0f5',
    title: 'Samsung 990 PRO 2TB PCIe 4.0 NVMe M.2 SSD',
    subtitle: 'Up to 7450 MB/s',
    provider: 'Samsung',
    brand: 'Samsung',
    category: 'Almacenamiento',
    costPrice: 12000,
    costCurrency: 'USD',
    salePrice: 17000,
    saleCurrency: 'USD',
    stock: 100,
    codes: [
      {
        id: 'c4468e5f-7a54-4007-8fa4-6b972e073c1a',
        productId: 'aa5a2a90-1321-491a-94db-5dddd54ce0f5',
        code: 'MZ-V9P2T0B/AM',
        type: 'BARCODE_PROVIDER',
        isMain: false
      }
    ]
  },
  {
    id: 'bb2a4da9-7d2c-4884-a565-3c4079ce9d3c',
    title: 'Teclado Mecánico HyperX Alloy Origins',
    subtitle: 'Switches HyperX Red, RGB, QWERTY Español',
    provider: 'HP',
    brand: 'HyperX',
    category: 'Periféricos',
    costPrice: 320000,
    costCurrency: 'UYU',
    salePrice: 480000,
    saleCurrency: 'UYU',
    stock: 40,
    codes: [
      {
        id: 'ca2c9b36-bfa6-453b-bb75-81321f84de91',
        productId: 'bb2a4da9-7d2c-4884-a565-3c4079ce9d3c',
        code: 'HKBO1S-RB-US/G',
        type: 'BARCODE_PROVIDER',
        isMain: false
      },
      {
        id: 'd20cc513-0b60-4c4f-8da1-6e9a4c7987b5',
        productId: 'bb2a4da9-7d2c-4884-a565-3c4079ce9d3c',
        code: '0196188050965',
        type: 'BARCODE_INTERNAL',
        isMain: false
      },
      {
        id: '08ce5976-651a-4bdc-9468-3135b3b1946a',
        productId: 'bb2a4da9-7d2c-4884-a565-3c4079ce9d3c',
        code: '910-006628',
        type: 'BARCODE_PROVIDER',
        isMain: false
      },
      {
        id: '58418832-661d-4fb0-bdd3-7e3c4c0d4631',
        productId: 'bb2a4da9-7d2c-4884-a565-3c4079ce9d3c',
        code: 'QR-GPX2-BLACK',
        type: 'QR_INTERNAL',
        isMain: false
      }
    ]
  },
  {
    id: 'dc331915-9271-49d7-87be-4474b2f72a0f',
    title: 'Alienware AW3423DWF 34" QD-OLED',
    subtitle: 'Ultrawide Curved Gaming Monitor, 165Hz',
    provider: 'Dell',
    brand: 'Alienware',
    category: 'Monitores',
    costPrice: 80000,
    costCurrency: 'USD',
    salePrice: 100000,
    saleCurrency: 'USD',
    stock: 15,
    codes: []
  },
  {
    id: 'ea259f8e-e7d0-47ee-b22d-31fc30db1f5f',
    title: 'Intel Core i9-14900K',
    subtitle: '24-Core (8P+16E) Desktop Processor',
    provider: 'Intel',
    brand: 'Intel',
    category: 'Procesadores',
    costPrice: 50000,
    costCurrency: 'EUR',
    salePrice: 62000,
    saleCurrency: 'EUR',
    stock: 12,
    codes: [
      {
        id: '2df4fa7e-b013-4fe0-b3a4-b844fea078f9',
        productId: 'ea259f8e-e7d0-47ee-b22d-31fc30db1f5f',
        code: 'BX8071514900K',
        type: 'BARCODE_PROVIDER',
        isMain: false
      },
      {
        id: '2e879f93-b7e3-4d00-bef2-ea321e19ad67',
        productId: 'ea259f8e-e7d0-47ee-b22d-31fc30db1f5f',
        code: '5032037278553',
        type: 'BARCODE_INTERNAL',
        isMain: false
      },
      {
        id: '80fda373-4f39-4ebb-8e78-1d1b44301717',
        productId: 'ea259f8e-e7d0-47ee-b22d-31fc30db1f5f',
        code: 'SAME-CODE-1',
        type: 'BARCODE_INTERNAL',
        isMain: false
      }
    ]
  }
]
