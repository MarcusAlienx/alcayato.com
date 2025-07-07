export interface Product {
  id: string;
  name: string;
  description: string;
  features: string[];
  image?: string;
  category: string;
}

export interface Brand {
  id: string;
  name: string;
  logo: string;
  description: string;
  color: string;
  products: Product[];
}

export const brands: Brand[] = [
  {
    id: 'telefire',
    name: 'Telefire',
    logo: '/assets/telefire-logo.svg',
    description: 'Sistemas avanzados de detección de incendios',
    color: '#FF4444',
    products: [
      {
        id: 'tf-7000',
        name: 'Panel TF-7000',
        description: 'Panel de control principal de la serie 7000 para sistemas de detección de incendios',
        features: ['Control centralizado', 'Interfaz intuitiva', 'Comunicación en red', 'Batería de respaldo'],
        category: 'Paneles de Control'
      },
      {
        id: 'tf-7000s',
        name: 'Panel TF-7000S',
        description: 'Panel compacto de la serie 7000 para instalaciones pequeñas y medianas',
        features: ['Diseño compacto', 'Hasta 200 dispositivos', 'Pantalla LCD', 'Comunicación RS-485'],
        category: 'Paneles de Control'
      },
      {
        id: 'tf-7000l',
        name: 'Panel TF-7000L',
        description: 'Panel expandido de la serie 7000 para grandes instalaciones',
        features: ['Alta capacidad', 'Hasta 3200 dispositivos', 'Redundancia', 'Múltiples loops'],
        category: 'Paneles de Control'
      },
      {
        id: 'tf-1100',
        name: 'Detector TF-1100',
        description: 'Detector fotoeléctrico direccionable de humo de alta sensibilidad',
        features: ['Tecnología fotoeléctrica', 'Direccionable', 'LED indicador', 'Compensación de deriva'],
        category: 'Detectores'
      },
      {
        id: 'tf-1120',
        name: 'Detector TF-1120',
        description: 'Detector térmico direccionable para ambientes con polvo o vapores',
        features: ['Detección térmica', 'Resistente al polvo', 'Direccionable', 'Temperatura fija'],
        category: 'Detectores'
      },
      {
        id: 'tf-1140',
        name: 'Detector TF-1140',
        description: 'Detector combinado fotoeléctrico y térmico direccionable',
        features: ['Doble tecnología', 'Mayor confiabilidad', 'Direccionable', 'Algoritmos avanzados'],
        category: 'Detectores'
      },
      {
        id: 'guard-7',
        name: 'GUARD-7',
        description: 'Sistema de detección de incendios por aspiración de última generación',
        features: ['Detección ultra temprana', 'Múltiples zonas', 'Interfaz web', 'Mantenimiento remoto'],
        category: 'Sistemas de Aspiración'
      },
      {
        id: 'tf-iom',
        name: 'Módulo TF-IOM',
        description: 'Módulo de entrada/salida para integración con otros sistemas',
        features: ['8 entradas monitoreadas', '4 salidas relé', 'Direccionable', 'Diagnóstico automático'],
        category: 'Módulos'
      },
      {
        id: 'tf-rim',
        name: 'Módulo TF-RIM',
        description: 'Módulo repetidor para extender la comunicación del loop',
        features: ['Extensión de loop', 'Aislamiento de fallas', 'LED de estado', 'Fácil instalación'],
        category: 'Módulos'
      },
      {
        id: 'tf-mcp',
        name: 'Estación Manual TF-MCP',
        description: 'Estación manual de activación direccionable para emergencias',
        features: ['Activación manual', 'Vidrio rompible', 'Direccionable', 'LED de confirmación'],
        category: 'Estaciones Manuales'
      },
      {
        id: 'tf-siren',
        name: 'Sirena TF-Siren',
        description: 'Sirena direccionable de alta potencia para notificación de alarmas',
        features: ['Alta potencia sonora', 'Múltiples tonos', 'Direccionable', 'Bajo consumo'],
        category: 'Notificación'
      },
      {
        id: 'tf-strobe',
        name: 'Estrobo TF-Strobe',
        description: 'Luz estroboscópica direccionable para notificación visual',
        features: ['Alta intensidad lumínica', 'Múltiples frecuencias', 'Direccionable', 'LED de alto brillo'],
        category: 'Notificación'
      },
      {
        id: 'tf-manager',
        name: 'Software TF-Manager',
        description: 'Software de gestión centralizada para sistemas Telefire',
        features: ['Gestión centralizada', 'Mapas gráficos', 'Reportes automáticos', 'Integración BMS'],
        category: 'Software'
      },
      {
        id: 'tf-ps',
        name: 'Sensor TF-PS',
        description: 'Sensor fotoeléctrico de humo para instalaciones estándar',
        features: ['Tecnología probada', 'Fácil instalación', 'Mantenimiento mínimo', 'Alta confiabilidad'],
        category: 'Sensores'
      },
      {
        id: 'tf-battery',
        name: 'Batería TF-Battery',
        description: 'Sistema de baterías de respaldo para paneles Telefire',
        features: ['Larga duración', 'Carga automática', 'Monitoreo de estado', 'Libre mantenimiento'],
        category: 'Accesorios'
      }
    ]
  },
  {
    id: 'bose',
    name: 'Bose Professional',
    logo: '/assets/Bose_pro.png',
    description: 'Soluciones de audio profesional de alta calidad',
    color: '#000000',
    products: [
      {
        id: 'fs2c',
        name: 'FreeSpace FS2C',
        description: 'Altavoz de techo de 2 vías para instalaciones comerciales',
        features: ['Diseño de 2 vías', 'Rejilla de acero', 'Fácil instalación', 'Sonido equilibrado'],
        category: 'Altavoces de Techo'
      },
      {
        id: 'fs4ce',
        name: 'FreeSpace FS4CE',
        description: 'Altavoz de techo empotrable de 4" para aplicaciones comerciales',
        features: ['Driver de 4"', 'Empotrable', 'Dispersión uniforme', 'Construcción robusta'],
        category: 'Altavoces de Techo'
      },
      {
        id: 'fs4ce-cm',
        name: 'FreeSpace FS4CE-CM',
        description: 'Altavoz de techo con transformador para líneas de 70V/100V',
        features: ['Transformador integrado', 'Múltiples taps', '70V/100V', 'Instalación rápida'],
        category: 'Altavoces de Techo'
      },
      {
        id: 'ps602p',
        name: 'PowerShare PS602P',
        description: 'Altavoz autoamplificado de 2 vías para instalaciones portátiles',
        features: ['Autoamplificado', 'Mixer integrado', 'Múltiples entradas', 'Portátil'],
        category: 'Sistemas Portátiles'
      },
      {
        id: 'ps604a',
        name: 'PowerShare PS604A',
        description: 'Altavoz activo de 4" para aplicaciones versátiles',
        features: ['Sistema activo', 'Driver de 4"', 'DSP integrado', 'Conectividad múltiple'],
        category: 'Sistemas Portátiles'
      },
      {
        id: 'l1-pro8',
        name: 'L1 Pro8',
        description: 'Sistema de línea portátil compacto para músicos y presentadores',
        features: ['Diseño de línea', 'Portátil', 'Mixer integrado', 'Cobertura 180°'],
        category: 'Sistemas de Línea'
      },
      {
        id: 'l1-pro16',
        name: 'L1 Pro16',
        description: 'Sistema de línea portátil de potencia media para eventos',
        features: ['16 drivers', 'Mayor potencia', 'Sub integrado', 'Control remoto'],
        category: 'Sistemas de Línea'
      },
      {
        id: 'l1-pro32',
        name: 'L1 Pro32',
        description: 'Sistema de línea portátil de alta potencia para grandes audiencias',
        features: ['32 drivers', 'Máxima potencia', 'Doble sub', 'DSP avanzado'],
        category: 'Sistemas de Línea'
      },
      {
        id: 'vb1',
        name: 'Bose Work VB1',
        description: 'Barra de sonido USB para videoconferencias profesionales',
        features: ['USB plug-and-play', 'Beamforming', 'Cancelación eco', 'Diseño compacto'],
        category: 'Videoconferencia'
      },
      {
        id: 'pm8500n',
        name: 'PowerMatch PM8500N',
        description: 'Amplificador de 8 canales con networking para instalaciones fijas',
        features: ['8 canales', 'Networking Dante', 'DSP integrado', 'Monitoreo remoto'],
        category: 'Amplificadores'
      },
      {
        id: 'pm4500n',
        name: 'PowerMatch PM4500N',
        description: 'Amplificador de 4 canales con networking para aplicaciones comerciales',
        features: ['4 canales', 'Networking Dante', 'Eficiencia energética', 'Diagnóstico avanzado'],
        category: 'Amplificadores'
      },
      {
        id: 'csp-428',
        name: 'ControlSpace CSP-428',
        description: 'Procesador de señal programable para sistemas de audio complejos',
        features: ['4 entradas / 8 salidas', 'DSP programable', 'Control de red', 'Presets múltiples'],
        category: 'Procesadores'
      },
      {
        id: 'ma12ex',
        name: 'Panaray MA12EX',
        description: 'Altavoz modular direccional para instalaciones arquitectónicas',
        features: ['Diseño modular', 'Directividad controlada', 'Instalación arquitectónica', 'Alta fidelidad'],
        category: 'Sistemas Modulares'
      },
      {
        id: 'rmu208',
        name: 'RoomMatch RMU208',
        description: 'Módulo de altavoz para sistemas RoomMatch personalizables',
        features: ['Módulo intercambiable', 'Cobertura específica', 'Sistema modular', 'Fácil configuración'],
        category: 'Sistemas Modulares'
      },
      {
        id: 's1-pro',
        name: 'S1 Pro System',
        description: 'Sistema portátil todo-en-uno para músicos y presentadores',
        features: ['Batería recargable', 'Bluetooth', 'Múltiples entradas', 'Diseño robusto'],
        category: 'Sistemas Portátiles'
      }
    ]
  },
  {
    id: 'extreme',
    name: 'Extreme Networks',
    logo: '/assets/ExtremeNetworks.svg',
    description: 'Soluciones de networking empresarial de alto rendimiento',
    color: '#7B2D8E',
    products: [
      {
        id: 'x465',
        name: 'ExtremeSwitching X465',
        description: 'Switch de acceso apilable con PoE+ para redes empresariales',
        features: ['24/48 puertos PoE+', 'Apilable', 'Gestión cloud', 'Alta disponibilidad'],
        category: 'Switches de Acceso'
      },
      {
        id: 'x590',
        name: 'ExtremeSwitching X590',
        description: 'Switch de agregación de alto rendimiento con puertos 10GbE',
        features: ['Puertos 10GbE', 'Agregación', 'MLAG', 'Redundancia'],
        category: 'Switches de Agregación'
      },
      {
        id: 'x870',
        name: 'ExtremeSwitching X870',
        description: 'Switch modular de core para grandes redes empresariales',
        features: ['Modular', 'Alta densidad', '100GbE ready', 'Redundancia completa'],
        category: 'Switches de Core'
      },
      {
        id: 'ap305c',
        name: 'AP305C',
        description: 'Access Point Wi-Fi 6 compacto para interiores',
        features: ['Wi-Fi 6 (802.11ax)', 'Diseño compacto', 'Dual radio', 'Cloud gestionado'],
        category: 'Access Points'
      },
      {
        id: 'ap4000',
        name: 'AP4000',
        description: 'Access Point Wi-Fi 6 de alto rendimiento para alta densidad',
        features: ['Wi-Fi 6', 'Alta densidad', '4x4 MIMO', 'Tri-radio'],
        category: 'Access Points'
      },
      {
        id: 'ap5050',
        name: 'AP5050',
        description: 'Access Point Wi-Fi 6E premium para aplicaciones críticas',
        features: ['Wi-Fi 6E', 'Banda 6GHz', 'Máximo rendimiento', 'AI/ML integrado'],
        category: 'Access Points'
      },
      {
        id: 'cloud-iq-pilot',
        name: 'ExtremeCloud IQ Pilot',
        description: 'Plataforma de gestión cloud para redes inalámbricas',
        features: ['Gestión cloud', 'AI insights', 'Zero-touch deployment', 'Analytics avanzado'],
        category: 'Software de Gestión'
      },
      {
        id: 'fabric-connect',
        name: 'Extreme Fabric Connect',
        description: 'Tecnología de red definida por software para simplificar la conectividad',
        features: ['SDN nativo', 'Automatización', 'Segmentación', 'Simplificación operativa'],
        category: 'Software de Red'
      },
      {
        id: 'analytics',
        name: 'ExtremeAnalytics',
        description: 'Plataforma de análisis avanzado para optimización de red',
        features: ['Machine Learning', 'Análisis predictivo', 'Optimización automática', 'Dashboards intuitivos'],
        category: 'Analytics'
      },
      {
        id: 'management-center',
        name: 'Extreme Management Center',
        description: 'Suite de gestión integral para redes cableadas e inalámbricas',
        features: ['Gestión unificada', 'Monitoreo 24/7', 'Automatización', 'Compliance'],
        category: 'Software de Gestión'
      },
      {
        id: 'defender-iot',
        name: 'Extreme Defender for IoT',
        description: 'Solución de seguridad especializada para dispositivos IoT',
        features: ['Seguridad IoT', 'Visibilidad total', 'Políticas automáticas', 'Threat intelligence'],
        category: 'Seguridad'
      },
      {
        id: 'slx-9850',
        name: 'Extreme SLX 9850',
        description: 'Switch de data center de ultra alta densidad y rendimiento',
        features: ['400GbE ready', 'Ultra baja latencia', 'Data center', 'Spine/Leaf'],
        category: 'Data Center'
      },
      {
        id: 'vsp-4900',
        name: 'ExtremeSwitching VSP 4900',
        description: 'Switch de campus de alta densidad con PoE++',
        features: ['PoE++', 'Alta densidad', 'Campus', 'Apilable'],
        category: 'Switches de Campus'
      },
      {
        id: 'ap310i',
        name: 'ExtremeWireless AP310i',
        description: 'Access Point Wi-Fi 6 para interiores con diseño discreto',
        features: ['Wi-Fi 6', 'Diseño discreto', 'Dual radio', 'PoE'],
        category: 'Access Points'
      },
      {
        id: 'sd-wan',
        name: 'Extreme SD-WAN',
        description: 'Solución SD-WAN para conectividad empresarial optimizada',
        features: ['SD-WAN', 'Optimización WAN', 'Seguridad integrada', 'Cloud-first'],
        category: 'SD-WAN'
      }
    ]
  },
  {
    id: 'panduit',
    name: 'Panduit',
    logo: '/assets/Panduit.svg',
    description: 'Soluciones integrales de infraestructura de red y cableado estructurado',
    color: '#E31837',
    products: [
      {
        id: 'pan-net-copper',
        name: 'Pan-Net® Copper Solutions',
        description: 'Sistema completo de cableado de cobre de alta performance',
        features: ['Categoría 6A', 'Certificado para 10Gb', 'Garantía de sistema', 'Fácil instalación'],
        category: 'Cableado de Cobre'
      },
      {
        id: 'opti-core-fiber',
        name: 'Opti-Core® Fiber Solutions',
        description: 'Soluciones completas de fibra óptica para aplicaciones críticas',
        features: ['Fibra OM4/OS2', 'Conectores optimizados', 'Baja pérdida', 'Alta densidad'],
        category: 'Fibra Óptica'
      },
      {
        id: 'tx6a-cable',
        name: 'TX6A™ Cable',
        description: 'Cable de cobre Categoría 6A para aplicaciones de 10 Gigabit',
        features: ['10Gb hasta 100m', 'Baja diafonía', 'Fácil manipulación', 'UL listado'],
        category: 'Cables'
      },
      {
        id: 'netrunner-system',
        name: 'NetRunner® System',
        description: 'Sistema de gestión de cableado horizontal y vertical',
        features: ['Gestión organizada', 'Acceso fácil', 'Identificación clara', 'Escalable'],
        category: 'Gestión de Cables'
      },
      {
        id: 'patch-panel-6a',
        name: 'Patch Panel Cat 6A',
        description: 'Panel de patcheo de alta densidad para Categoría 6A',
        features: ['48 puertos', 'Gestión de cables', 'Acceso frontal', 'Codificación de colores'],
        category: 'Patch Panels'
      },
      {
        id: 'fiber-patch-panel',
        name: 'Fiber Patch Panel',
        description: 'Panel de patcheo de fibra óptica de alta densidad',
        features: ['144 fibras', 'Gestión avanzada', 'Acceso fácil', 'Adaptadores intercambiables'],
        category: 'Patch Panels'
      },
      {
        id: 'rj45-connector',
        name: 'Conectores RJ45 Cat 6A',
        description: 'Conectores modulares RJ45 para terminaciones de campo',
        features: ['Categoría 6A', 'Terminación sin herramientas', 'Contactos dorados', 'Prueba de rendimiento'],
        category: 'Conectores'
      },
      {
        id: 'fiber-connector',
        name: 'Conectores de Fibra Óptica',
        description: 'Conectores de fibra de baja pérdida para aplicaciones críticas',
        features: ['Baja pérdida de inserción', 'Alta repetibilidad', 'Fácil instalación', 'Múltiples tipos'],
        category: 'Conectores'
      },
      {
        id: 'patch-cords',
        name: 'Patch Cords',
        description: 'Cables de conexión de alta calidad para interconexiones',
        features: ['Múltiples categorías', 'Longitudes variadas', 'Certificados', 'Códigos de colores'],
        category: 'Cables de Conexión'
      },
      {
        id: 'net-access-cabinet',
        name: 'Net-Access® Cabinet',
        description: 'Gabinetes de red para instalaciones de telecomunicaciones',
        features: ['Ventilación optimizada', 'Acceso fácil', 'Gestión de cables', 'Seguridad'],
        category: 'Gabinetes'
      },
      {
        id: 'net-contain-system',
        name: 'Net-Contain® System',
        description: 'Sistema de contención de aire caliente para data centers',
        features: ['Eficiencia energética', 'Fácil instalación', 'Modular', 'ROI demostrado'],
        category: 'Contención'
      },
      {
        id: 'pan-punch-tool',
        name: 'Pan-Punch® Tool',
        description: 'Herramienta de terminación para conectores Panduit',
        features: ['Precisión garantizada', 'Ergonómica', 'Durabilidad', 'Intercambiable'],
        category: 'Herramientas'
      },
      {
        id: 'pan-mark-labels',
        name: 'Pan-Mark® Labels',
        description: 'Sistema de etiquetado profesional para identificación de cables',
        features: ['Resistente a químicos', 'Múltiples materiales', 'Impresión clara', 'Adhesión duradera'],
        category: 'Etiquetado'
      },
      {
        id: 'industrialnet',
        name: 'IndustrialNet®',
        description: 'Soluciones de conectividad para ambientes industriales severos',
        features: ['Ambiente industrial', 'IP67/IP68', 'Vibración resistente', 'Temperatura extendida'],
        category: 'Industrial'
      },
      {
        id: 'hd-flex',
        name: 'HD Flex™',
        description: 'Soluciones de fibra óptica de ultra alta densidad',
        features: ['Ultra alta densidad', 'Gestión optimizada', 'Acceso fácil', 'Escalabilidad máxima'],
        category: 'Fibra Óptica'
      }
    ]
  },
  {
    id: 'inncom',
    name: 'Inncom',
    logo: '/assets/Honeywell.svg',
    description: 'Sistemas inteligentes de automatización y gestión energética',
    color: '#0066CC',
    products: [
      {
        id: 'premium-ems',
        name: 'INNCOM Premium EMS',
        description: 'Sistema de gestión energética premium para hoteles y edificios',
        features: ['Gestión energética total', 'Analytics avanzado', 'ROI demostrado', 'Integración BMS'],
        category: 'Sistemas de Gestión'
      },
      {
        id: 'e7-thermostat',
        name: 'Termostato E7',
        description: 'Termostato inteligente con pantalla táctil y conectividad IoT',
        features: ['Pantalla táctil', 'Wi-Fi integrado', 'Control remoto', 'Programación avanzada'],
        category: 'Termostatos'
      },
      {
        id: 's529-thermostat',
        name: 'Termostato S529',
        description: 'Termostato económico con funciones de ahorro energético',
        features: ['Ahorro energético', 'Fácil instalación', 'Control local', 'Sensor ocupación'],
        category: 'Termostatos'
      },
      {
        id: 'c419-thermostat',
        name: 'Termostato C419',
        description: 'Termostato comercial para aplicaciones de hospitalidad',
        features: ['Diseño robusto', 'Control HVAC', 'Override temporal', 'Indicadores LED'],
        category: 'Termostatos'
      },
      {
        id: 'ilc-lighting',
        name: 'ILC Series Lighting Control',
        description: 'Controladores de iluminación inteligentes con dimming',
        features: ['Control de dimming', 'Sensor movimiento', 'Programación horaria', 'Integración sistema'],
        category: 'Control de Iluminación'
      },
      {
        id: 'os-sensors',
        name: 'OS Series Occupancy Sensors',
        description: 'Sensores de ocupación para automatización inteligente',
        features: ['Detección PIR', 'Configuración ajustable', 'Múltiples zonas', 'Comunicación wireless'],
        category: 'Sensores'
      },
      {
        id: 'ws-wall-switches',
        name: 'WS Series Wall Switches',
        description: 'Interruptores de pared inteligentes con control remoto',
        features: ['Control remoto', 'Override local', 'Indicadores estado', 'Fácil instalación'],
        category: 'Interruptores'
      },
      {
        id: 'ni-network-interfaces',
        name: 'NI Series Network Interfaces',
        description: 'Interfaces de red para integración con sistemas BMS',
        features: ['Múltiples protocolos', 'Integración BMS', 'Monitoreo remoto', 'Configuración web'],
        category: 'Interfaces de Red'
      },
      {
        id: 'inncontrol3',
        name: 'INNCOM INNcontrol 3',
        description: 'Software de gestión centralizada para propiedades inteligentes',
        features: ['Gestión centralizada', 'Reports detallados', 'Alertas automáticas', 'Mobile app'],
        category: 'Software'
      },
      {
        id: 'smart-locks',
        name: 'Smart Lock Integration',
        description: 'Integración con cerraduras inteligentes de terceros',
        features: ['Múltiples marcas', 'Gestión centralizada', 'Logs de acceso', 'Integración total'],
        category: 'Control de Acceso'
      },
      {
        id: 'motorized-curtains',
        name: 'Motorized Curtain Control',
        description: 'Control automatizado de cortinas y persianas motorizadas',
        features: ['Control automatizado', 'Programación horaria', 'Sensor luz', 'Override manual'],
        category: 'Automatización'
      },
      {
        id: 'access-control',
        name: 'Access Control Integration',
        description: 'Integración con sistemas de control de acceso empresariales',
        features: ['Integración completa', 'Logs centralizados', 'Alertas seguridad', 'Múltiples protocolos'],
        category: 'Control de Acceso'
      },
      {
        id: 'e4-smart-thermostat',
        name: 'INNCOM e4 Smart Thermostat',
        description: 'Termostato digital inteligente para hoteles de lujo',
        features: ['Pantalla digital', 'Múltiples idiomas', 'Branding personalizable', 'Eficiencia máxima'],
        category: 'Termostatos'
      },
      {
        id: 'deep-mesh',
        name: 'INNCOM Deep Mesh Network',
        description: 'Red mesh profunda para conectividad total del edificio',
        features: ['Red mesh', 'Auto-healing', 'Cobertura total', 'Escalabilidad'],
        category: 'Networking'
      },
      {
        id: 'touch-panels',
        name: 'INNCOM Touch Panels',
        description: 'Paneles táctiles para control centralizado de habitación',
        features: ['Control centralizado', 'Interfaz intuitiva', 'Personalizable', 'Múltiples funciones'],
        category: 'Interfaces de Usuario'
      }
    ]
  },
  {
    id: 'honeywell-bms',
    name: 'Honeywell BMS',
    logo: '/assets/notifier.png',
    description: 'Sistemas avanzados de automatización y gestión de edificios',
    color: '#DC143C',
    products: [
      {
        id: 'spyder-controller',
        name: 'Spyder Controller',
        description: 'Controlador programable para aplicaciones HVAC y automatización',
        features: ['Control HVAC avanzado', 'Programación flexible', 'Comunicación múltiple', 'Diagnóstico integrado'],
        category: 'Controladores'
      },
      {
        id: 'stryker-controller',
        name: 'Stryker Controller',
        description: 'Controlador de alto rendimiento para sistemas críticos',
        features: ['Alto rendimiento', 'Redundancia', 'Control crítico', 'Comunicación robusta'],
        category: 'Controladores'
      },
      {
        id: 'hawk-controller',
        name: 'Hawk Controller',
        description: 'Controlador compacto para aplicaciones de automatización básica',
        features: ['Diseño compacto', 'Fácil instalación', 'Control básico', 'Costo efectivo'],
        category: 'Controladores'
      },
      {
        id: 'xl5000-controller',
        name: 'XL5000 Controller',
        description: 'Controlador enterprise para grandes instalaciones BMS',
        features: ['Gran capacidad', 'Múltiples loops', 'Comunicación enterprise', 'Escalabilidad'],
        category: 'Controladores'
      },
      {
        id: 'webs-n4',
        name: 'WEBs-N4',
        description: 'Estación de trabajo basada en Niagara Framework',
        features: ['Niagara Framework', 'Interfaz web', 'Integración múltiple', 'Escalable'],
        category: 'Estaciones de Trabajo'
      },
      {
        id: 'webs-ax',
        name: 'WEBs-AX',
        description: 'Estación de trabajo compacta con capacidades completas BMS',
        features: ['Compacto', 'Web-based', 'Múltiples protocolos', 'Fácil configuración'],
        category: 'Estaciones de Trabajo'
      },
      {
        id: 'ebi-software',
        name: 'EBI (Enterprise Buildings Integrator)',
        description: 'Plataforma de integración enterprise para múltiples edificios',
        features: ['Múltiples edificios', 'Integración total', 'Analytics avanzado', 'Dashboards ejecutivos'],
        category: 'Software'
      },
      {
        id: 'forge-buildings',
        name: 'Honeywell Forge for Buildings',
        description: 'Plataforma cloud para optimización inteligente de edificios',
        features: ['Cloud-based', 'AI/ML', 'Optimización automática', 'Insights predictivos'],
        category: 'Software Cloud'
      },
      {
        id: 'c7400-sensor',
        name: 'C7400 Air Quality Sensor',
        description: 'Sensor de calidad del aire interior para ambientes saludables',
        features: ['CO2, temp, humedad', 'Calidad aire', 'Comunicación digital', 'Fácil instalación'],
        category: 'Sensores'
      },
      {
        id: 't7770-sensor',
        name: 'T7770 Temperature Sensor',
        description: 'Sensor de temperatura de precisión para aplicaciones críticas',
        features: ['Alta precisión', 'Rango extendido', 'Comunicación digital', 'Calibración automática'],
        category: 'Sensores'
      },
      {
        id: 'v5011-valve',
        name: 'V5011 Control Valve',
        description: 'Válvula de control proporcional para sistemas HVAC',
        features: ['Control proporcional', 'Alto Cv', 'Actuador integrado', 'Comunicación digital'],
        category: 'Válvulas y Actuadores'
      },
      {
        id: 'ml6420-actuator',
        name: 'ML6420 Actuator',
        description: 'Actuador de damper para control de aire en sistemas HVAC',
        features: ['Control de dampers', 'Múltiples configuraciones', 'Feedback posición', 'Instalación rápida'],
        category: 'Válvulas y Actuadores'
      },
      {
        id: 'wts-thermostat',
        name: 'WTS Series Thermostat',
        description: 'Termostato de zona para control de temperatura local',
        features: ['Control local', 'Display digital', 'Override temporal', 'Comunicación BACnet'],
        category: 'Termostatos'
      },
      {
        id: 'touchpoint-plus',
        name: 'Touchpoint Plus Controller',
        description: 'Controlador con interfaz táctil para aplicaciones premium',
        features: ['Pantalla táctil', 'Control premium', 'Interfaz intuitiva', 'Múltiples funciones'],
        category: 'Paneles de Control'
      },
      {
        id: 'excel-5000',
        name: 'Excel 5000',
        description: 'Sistema de automatización robusto para aplicaciones industriales',
        features: ['Aplicaciones industriales', 'Alta confiabilidad', 'Comunicación robusta', 'Mantenimiento predictivo'],
        category: 'Sistemas de Automatización'
      }
    ]
  },
  {
    id: 'honeywell-security',
    name: 'Honeywell Security',
    logo: '/assets/honeywell-security-1.svg',
    description: 'Soluciones integrales de seguridad y videovigilancia',
    color: '#E31837',
    products: [
      {
        id: 'vista-20p',
        name: 'VISTA-20P',
        description: 'Panel de alarma programable para instalaciones residenciales y comerciales',
        features: ['20 zonas', 'Programación flexible', 'Comunicación dual', 'Backup batería'],
        category: 'Paneles de Alarma'
      },
      {
        id: 'vista-128bpt',
        name: 'VISTA-128BPT',
        description: 'Panel de alarma de alta capacidad para grandes instalaciones',
        features: ['128 zonas', 'Múltiples particiones', 'Comunicación IP', 'Expansión modular'],
        category: 'Paneles de Alarma'
      },
      {
        id: 'lynx-touch-7000',
        name: 'LYNX Touch 7000',
        description: 'Sistema de seguridad todo-en-uno con pantalla táctil',
        features: ['Pantalla táctil 7"', 'Wireless', 'Automatización hogar', 'Apps móviles'],
        category: 'Sistemas Todo-en-Uno'
      },
      {
        id: 'proa7plus',
        name: 'PROA7PLUS',
        description: 'Panel de alarma inalámbrico profesional de última generación',
        features: ['100% inalámbrico', 'Comunicación celular', 'Encriptación avanzada', 'Fácil instalación'],
        category: 'Paneles Inalámbricos'
      },
      {
        id: 'pro-watch',
        name: 'Pro-Watch',
        description: 'Sistema de control de acceso enterprise para grandes instalaciones',
        features: ['Enterprise grade', 'Múltiples sitios', 'Integración video', 'Reportes avanzados'],
        category: 'Control de Acceso'
      },
      {
        id: 'win-pak',
        name: 'WIN-PAK',
        description: 'Sistema de control de acceso integrado para empresas medianas',
        features: ['Hasta 100,000 usuarios', 'Integración alarma', 'Reportes completos', 'Múltiples sitios'],
        category: 'Control de Acceso'
      },
      {
        id: 'netaxs-123',
        name: 'NetAXS-123',
        description: 'Controlador de acceso en red para 2 puertas',
        features: ['2 puertas', 'Comunicación IP', 'PoE', 'Fácil instalación'],
        category: 'Controladores de Acceso'
      },
      {
        id: 'h3w2gr1',
        name: 'H3W2GR1 Camera',
        description: 'Cámara IP domo de 2MP para videovigilancia interior',
        features: ['2MP resolución', 'WDR', 'Audio bidireccional', 'PoE'],
        category: 'Cámaras IP'
      },
      {
        id: 'h6w4gr1',
        name: 'H6W4GR1 Camera',
        description: 'Cámara IP bullet de 4MP para exteriores',
        features: ['4MP resolución', 'IR integrado', 'IP67', 'WDR avanzado'],
        category: 'Cámaras IP'
      },
      {
        id: 'hptz202x',
        name: 'HPTZ202X PTZ Camera',
        description: 'Cámara PTZ de 2MP con zoom óptico 20x',
        features: ['Zoom óptico 20x', 'PTZ completo', 'Auto-tracking', 'IR 150m'],
        category: 'Cámaras PTZ'
      },
      {
        id: 'maxpro-nvr',
        name: 'MAXPRO NVR',
        description: 'Grabador de video en red para sistemas de videovigilancia',
        features: ['Hasta 128 canales', 'Almacenamiento RAID', 'Análisis video', 'Acceso remoto'],
        category: 'Grabadores'
      },
      {
        id: 'performance-dvr',
        name: 'Performance Series DVR',
        description: 'Grabador digital de video para cámaras analógicas',
        features: ['16 canales', 'H.265 compresión', 'Búsqueda inteligente', 'Mobile viewing'],
        category: 'Grabadores'
      },
      {
        id: '5816-sensor',
        name: '5816 Door/Window Sensor',
        description: 'Sensor magnético inalámbrico para puertas y ventanas',
        features: ['Wireless', 'Batería larga duración', 'Tamper switch', 'Fácil instalación'],
        category: 'Sensores'
      },
      {
        id: '5800pir-motion',
        name: '5800PIR Motion Sensor',
        description: 'Sensor de movimiento inalámbrico PIR para detección de intrusos',
        features: ['Detección PIR', 'Pet immunity', 'Wireless', 'Compensación temperatura'],
        category: 'Sensores'
      },
      {
        id: 'maxpro-vms',
        name: 'MAXPRO VMS',
        description: 'Software de gestión de video para videovigilancia empresarial',
        features: ['Gestión centralizada', 'Análisis avanzado', 'Múltiples servidores', 'APIs abiertas'],
        category: 'Software VMS'
      }
    ]
  },
  {
    id: 'huawei',
    name: 'Huawei',
    logo: '/assets/huawei-logo.svg',
    description: 'Soluciones de networking y telecomunicaciones de vanguardia',
    color: '#FF0000',
    products: [
      {
        id: 'ar6100',
        name: 'NetEngine AR6100',
        description: 'Router empresarial de alto rendimiento para conectividad WAN',
        features: ['Alto rendimiento', 'Múltiples interfaces', 'Seguridad avanzada', 'QoS inteligente'],
        category: 'Routers Empresariales'
      },
      {
        id: 'ar6200',
        name: 'NetEngine AR6200',
        description: 'Router de borde para redes de campus y sucursales',
        features: ['Router de borde', 'MPLS/VPN', 'Redundancia', 'Gestión inteligente'],
        category: 'Routers Empresariales'
      },
      {
        id: 'ne40e',
        name: 'NE40E Router',
        description: 'Router de borde de servicio para operadores',
        features: ['Service edge', 'Carrier grade', 'Alta capacidad', 'Servicios avanzados'],
        category: 'Routers Carrier'
      },
      {
        id: 'ax3-mesh',
        name: 'Huawei WiFi AX3',
        description: 'Router Wi-Fi 6 mesh para hogar y oficina pequeña',
        features: ['Wi-Fi 6', 'Mesh networking', 'Fácil configuración', 'Cobertura extendida'],
        category: 'Routers WiFi'
      },
      {
        id: 's5735-l',
        name: 'CloudEngine S5735-L',
        description: 'Switch de acceso administrable con PoE+ para campus',
        features: ['24/48 puertos', 'PoE+', 'L3 lite', 'Apilable'],
        category: 'Switches de Acceso'
      },
      {
        id: 's6730-h',
        name: 'CloudEngine S6730-H',
        description: 'Switch de agregación de alto rendimiento para campus',
        features: ['Agregación campus', '10GbE', 'Redundancia', 'VXLAN'],
        category: 'Switches de Agregación'
      },
      {
        id: 's12700e',
        name: 'CloudEngine S12700E',
        description: 'Switch modular de core para redes de campus grandes',
        features: ['Modular', 'Core campus', 'Alta densidad', 'SDN ready'],
        category: 'Switches de Core'
      },
      {
        id: 'ce16800',
        name: 'CloudEngine 16800',
        description: 'Switch de data center de ultra alta densidad',
        features: ['Data center', '400GbE', 'Ultra baja latencia', 'AI fabric'],
        category: 'Switches Data Center'
      },
      {
        id: 'ap7060dn',
        name: 'AirEngine AP7060DN',
        description: 'Access Point Wi-Fi 6 para alta densidad de usuarios',
        features: ['Wi-Fi 6', 'Alta densidad', '4x4 MIMO', 'Smart antenna'],
        category: 'Access Points'
      },
      {
        id: 'ap8050dn',
        name: 'AirEngine AP8050DN',
        description: 'Access Point Wi-Fi 6 para exteriores con alta potencia',
        features: ['Wi-Fi 6 outdoor', 'IP68', 'Alta potencia', 'Dual radio'],
        category: 'Access Points Outdoor'
      },
      {
        id: 'ap6050dn',
        name: 'AirEngine AP6050DN',
        description: 'Access Point Wi-Fi 6 estándar para oficinas',
        features: ['Wi-Fi 6', 'Oficinas', 'Dual radio', 'PoE'],
        category: 'Access Points'
      },
      {
        id: 'ap6610dn',
        name: 'AirEngine AP6610DN',
        description: 'Access Point Wi-Fi 6 para exteriores resistente al clima',
        features: ['Wi-Fi 6 outdoor', 'Resistente clima', 'IP67', 'Cobertura extendida'],
        category: 'Access Points Outdoor'
      },
      {
        id: 'agile-controller',
        name: 'Agile Controller-Campus',
        description: 'Controlador SDN para gestión centralizada de red de campus',
        features: ['SDN controller', 'Gestión centralizada', 'Automatización', 'Analytics'],
        category: 'Controladores SDN'
      },
      {
        id: 'imaster-nce',
        name: 'iMaster NCE-Campus',
        description: 'Plataforma de gestión inteligente para redes de campus',
        features: ['Gestión inteligente', 'AI-driven', 'Campus networks', 'Cloud-native'],
        category: 'Plataformas de Gestión'
      },
      {
        id: 'cloudcampus',
        name: 'CloudCampus Solution',
        description: 'Solución integral SDN para campus inteligentes',
        features: ['SDN campus', 'Solución integral', 'Automatización total', 'Intent-based'],
        category: 'Soluciones SDN'
      }
    ]
  }
];

export const getAllProducts = (): Product[] => {
  return brands.flatMap(brand => brand.products);
};

export const getBrandById = (id: string): Brand | undefined => {
  return brands.find(brand => brand.id === id);
};

export const getProductsByBrand = (brandId: string): Product[] => {
  const brand = getBrandById(brandId);
  return brand ? brand.products : [];
};
