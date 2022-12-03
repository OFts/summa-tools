var assetType = [
  {
      "name":"Maquinaria amarilla",
      "di": 0.25,
      "months": 24,
      "dc": 0.40,
      "dm": 1.0,
      "vue": 10,
      "inf": "El valor de la <b>maquinaria amarilla</b> depende principalmente de las horas de las horas de uso, porque lo que se recomienda el método de unidades de producción (en este caso horas). Para este tipo de equipo es importante el tener acceso a un sistema que permita controlar las horas de uso conforme el cliente trabaje el equipo. Con esta maquinaria se debe tener en cuenta su peso operativo y dimensiones, para garantizar que esta tenga un mercado secundario.<br> Maquinaria como las excavadores tienen un mercado secundario fuerte cuando estas tienen un peso operativo cercano a las 22 toneladas. Capacidades superiores se hacen difíciles de trabajar. El costo de una excavadora nueva de esta capacidad este de alrededor de $180,000.",
  },
  {
      "name":"Maquinaria agrícola",
      "di": 0.10,
      "months": 12,
      "dc": 0.30,
      "dm": 1.0,
      "vue": 10,
      "inf": "El valor de la <b>maquinaria agrícola</b> depende principalmente de las horas de las horas de uso y su fabricante, porque lo que se recomienda el método de unidades de producción (en este caso horas). Equipos como tractores conforman principalmente este segmento. Son equipos que comúnmente poseen una baja rotación, por lo que no existe un fuerte mercado secundario para estos equipos. Los fabricantes principales son CASE, John Deere, Massey Ferguson, Kubota, entre otros.",
  },
  {
      "name":"Vehículos",
      "di": 0.20,
      "months": 12,
      "dc": 0.28,
      "dm": 0.87,
      "vue": 6,
      "inf": "El valor de los <b>vehículos partículares</b> depende principalmente del tipo de vehículo y su fabricante. Vehículos de fabricantes asiáticos como Toyota, Mazda, Isuzu y Hyundai tienen un fuerte mercado secundario. Con estos bienes es importante tener en cuenta el propósito y uso que tendrá el vehículo ya que su depreciación es alta.",
  },
  {
      "name":"Transporte de carga",
      "di": 0.15,
      "months": 12,
      "dc": 0.20,
      "dm": 0.90,
      "vue": 15,
      "inf": "El valor del <b>transporte de carga</b> depende principalmente del tipo de vehículo y su fabricante. La ventaja que posee el transporte de carga sobre el transporte particular se encuentra en que su vida útil es más prolongada. Y comúnmente está fabricado para soportar ciclos de trabajo más pesados. Con este tipo de transportes es importante conocer si posee elementos con fuerte presencia en el mercado, como el motor (el cual puede varia entre modelos).<br> Algunos transportes comunes en el mercado primario son fabricantes asiáticos como Mahindra, Jac, entre otros, que presentan un buen valor en relación al costo. Sin embargo, su mercado secundario continúa siendo escaso y se considera una depreciación inicial superior a otros fabricantes como KIA, Hyundai, Toyoto, por mencionar algunos.",
  },
  {
      "name":"Equipo de computo",
      "di": 0.30,
      "months": 12,
      "dc": 0.44,
      "dm": 1.0,
      "vue": 5,
      "inf": "El valor del <b>equipo de computo</b> posee una fuerte pérdida de valor en el tiempo debido a que estos se descontinuan con rapidez. Y son equipos que se reemplazan con frecuencia. Además se caracterizan por tener una depreciación inicial alta y por ser equipos dificilmente reparables (dependiendo del fabricante).",
  },
  {
      "name":"Equipo electrónico",
      "di": 0.40,
      "months": 12,
      "dc": 0.50,
      "dm": 1.0,
      "vue": 5,
      "inf": "El valor del <b>equipo electróncio</b> posee una fuerte pérdida de valor en el tiempo debido a que estos se descontinuan con rapidez. Y son equipos que se reemplazan con frecuencia según la aplicación que este tenga. Su pérdida de valor en el tiempo varía según el equipo. Sin embargo, en general equipos no industriales presentaran una fuerte pérdida de valor."
  },
  {
      "name":"Equipo médico",
      "di": 0.15,
      "months": 24,
      "dc": 0.35,
      "dm": 0.8,
      "vue": 8,
      "inf": "Los equipos médicos más comunes lo comprenden los tomógrafos, ultrasonidos y equipos de rayos equis. Los tomógrafos más básicos son aquellos tomógrafos de 4 cortes y estos poseen un mercado en descenso. Un tomógrafo con un buen mercado secundario es uno que posea 16 cortes o más. Ya que este permite llevar a cabo una mayor cantidad de diagnósitcos. <br>Dentro de los fabricantes reconocidos de equipos médicos se encuentran General Electric, Philips, Toshiba, Siemens, por mencionar algunos. Un tomógrafo nuevo, del fabricante GE, de 4, 8 y 16 cortes pueden tener un costo de $210,000, $225,000 y $240,000 respectivamente."
  },
  {
      "name":"Redes de procesamiento de datos",
      "di": 0.20,
      "months": 12,
      "dc": 0.37,
      "dm": 1.0,
      "vue": 5,
      "inf": "El valor de las <b>redes de procesamiento de datos</b> posee una fuerte pérdida de valor en el tiempo debido a que estos se descontinuan con rapidez. Y son equipos que se reemplazan con frecuencia según la aplicación que este tenga. Su pérdida de valor en el tiempo varía según el equipo. Sin embargo, en general equipos no industriales presentaran una fuerte pérdida de valor. Estas redes de procesamiento comúnmente son modulares y posee un mercado secundario limitado."
  },
  {
      "name":"Software",
      "di": 0.50,
      "months": 12,
      "dc": 0.15,
      "dm": 1.0,
      "vue": 5,
      "inf": "El valor de las licencias de software poseen una fuerte pérdida de valor en el tiempo ya que comúnmente la mayor parte de su valor se encuentra en la implementación que lleva a cabo la empresa que provee el software. Por lo que este tipo de activos se consideran una mala garantía y en la mayoría de ocasiones se sugiere trabajar una garantía alternativa.<br> Dentro de este tipo de softwares se pueden nombrar ERP's como SAP, Oracle y otros softwares como los implementados para aplicaciones médicas (PACS)."
  },
  {
      "name":"Macbooks",
      "di": 0.33,
      "months": 36,
      "dc": 0.55,
      "dm": 0.85,
      "vue": 5,
      "da": 0.17,
      "fp": 0.0152790649144242,

  }
]