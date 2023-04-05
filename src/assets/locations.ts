type LocationWithoutFavorite = Omit<Location, 'isFavorite'>;

export const locationsSource: LocationWithoutFavorite[] = [
  {
    id: 1,
    name: 'Basílica de Nazaré',
    description:
      'A Basílica de Nazaré é um dos mais importantes templos religiosos do Brasil. É famosa por abrigar a imagem de Nossa Senhora de Nazaré, padroeira do Pará, que atrai milhares de fiéis durante o Círio de Nazaré, a maior festa religiosa do país.',
    imageUrl:
      'https://upload.wikimedia.org/wikipedia/commons/3/3a/Bas%C3%ADlica_Santu%C3%A1rio_Nossa_Senhora_de_Nazar%C3%A9_-_Bel%C3%A9m-PA.jpg',
    price: 0,
    openingHours: 'Aberta diariamente, das 6h às 20h',
    address: 'Tv. Dom Romualdo de Seixas, s/n - Nazaré, Belém - PA, 66035-045',
    rating: [4.8, 4.9, 4.7, 4.8, 4.9],
    neighborhood: 'Nazaré',
    activities: ['Visitação religiosa', 'Missa', 'Círio de Nazaré'],
  },
  {
    id: 2,
    name: 'Ver-o-Peso',
    description:
      'O Mercado Ver-o-Peso é um dos mais famosos pontos turísticos de Belém, famoso por sua arquitetura colonial e pela venda de produtos típicos da região amazônica, como peixes, frutas, temperos e artesanato.',
    imageUrl:
      'https://upload.wikimedia.org/wikipedia/commons/4/47/Ver-oPeso-Belem.jpg',
    price: 0,
    openingHours: 'Aberto diariamente, das 6h às 18h',
    address:
      'Av. Boulevard Castilhos França, s/n - Campina, Belém - PA, 66010-010',
    rating: [4.5, 4.7, 4.6, 4.5, 4.7],
    neighborhood: 'Campina',
    activities: [
      'Compras',
      'Degustação de alimentos típicos',
      'Passeio turístico',
    ],
  },
  {
    id: 3,
    name: 'Mangal das Garças',
    description:
      'O Mangal das Garças é um parque ecológico localizado no centro histórico de Belém, que oferece aos visitantes um ambiente de natureza preservada, com trilhas, viveiro de aves, borboletário e um farol com vista panorâmica da cidade.',
    imageUrl:
      'https://upload.wikimedia.org/wikipedia/commons/a/ae/Mangal_das_Gar%C3%A7as_DSC_8656_%289514030210%29.jpg',
    price: 0,
    openingHours: 'Aberto de terça a domingo, das 9h às 18h',
    address: 'Rua Carneiro da Rocha, s/n - Cidade Velha, Belém - PA, 66020-610',
    rating: [4.5, 4.7, 4.6, 4.5, 4.7],
    neighborhood: 'Cidade Velha',
    activities: ['Trilhas', 'Observação de aves', 'Borboletário', 'Farol'],
  },
  {
    id: 4,
    name: 'Estação das Docas',
    description:
      'A Estação das Docas é um complexo turístico localizado na margem da Baía do Guajará, composto por antigos armazéns portuários restaurados que abrigam restaurantes, bares, lojas e espaços culturais, como o Museu do Porto e o Teatro Maria Sylvia Nunes.',
    imageUrl:
      'https://upload.wikimedia.org/wikipedia/commons/7/70/Brazil_Bel%C3%A9m_Las_Docas_02.jpg',
    price: 0,
    openingHours: 'Aberto diariamente, das 10h às 0h',
    address:
      'Av. Boulevard Castilhos França, s/n - Campina, Belém - PA, 66010-020',
    rating: [4.7, 4.9, 4.8, 4.7, 4.9],
    neighborhood: 'Campina',
    activities: ['Gastronomia', 'Compras', 'Cultura'],
  },
  {
    id: 5,
    name: 'Ilha do Combu',
    description:
      'A Ilha do Combu é uma ilha fluvial localizada no rio Guamá, a cerca de 20 minutos de barco de Belém. É famosa por sua natureza exuberante, praias de água doce e por ser o local de produção do açaí, fruto típico da região amazônica.',
    imageUrl:
      'https://www.essemundoenosso.com.br/wp-content/uploads/2017/10/Ilha-do-Combu.jpg',
    price: 50,
    openingHours: 'Aberto diariamente, das 8h às 17h',
    address: 'Ilha do Combu, Belém - PA',
    rating: [4.6, 4.8, 4.7, 4.6, 4.8],
    neighborhood: 'Ilha do Combu',
    activities: ['Praias', 'Passeio de barco', 'Degustação de açaí'],
  },
  {
    id: 6,
    name: 'Parque Zoobotânico do Museu Paraense Emílio Goeldi',
    description:
      'O Parque Zoobotânico é uma unidade de conservação do Museu Paraense Emílio Goeldi, que abriga uma ampla variedade de espécies de animais e plantas da Amazônia. O local também conta com um centro de pesquisas científicas e programas de educação ambiental.',
    imageUrl:
      'https://upload.wikimedia.org/wikipedia/commons/6/61/Parque_Zoobot%C3%A2nico_do_Museu_Paraense_Em%C3%ADlio_Goeldi-01.jpg',
    price: 5,
    openingHours: 'Aberto de terça a domingo, das 9h às 16h30',
    address: 'Av. Magalhães Barata, 376 - São Brás, Belém - PA, 66040-170',
    rating: [4.7, 4.6, 4.8, 4.5, 4.7],
    neighborhood: 'São Brás',
    activities: ['Observação de animais', 'Trilhas', 'Programas educacionais'],
  },
  {
    id: 7,
    name: 'Museu da Imagem e do Som do Pará',
    description:
      'O Museu da Imagem e do Som do Pará é um espaço dedicado à preservação, pesquisa e difusão do acervo audiovisual e fotográfico paraense. O museu conta com exposições permanentes e temporárias, além de exibições de filmes e eventos culturais.',
    imageUrl:
      'https://s3.us-east-1.amazonaws.com/gestour-upload/images/32b6687a7f96465a8decb737b2bd32bc.webp',
    price: 5,
    openingHours:
      'Aberto de terça a sexta, das 10h às 16h; sábados, das 10h às 14h',
    address: 'Av. Governador José Malcher, 289 - Nazaré, Belém - PA, 66040-285',
    rating: [4.5, 4.3, 4.7, 4.6, 4.5],
    neighborhood: 'Nazaré',
    activities: ['Exposições', 'Exibições de filmes', 'Eventos culturais'],
  },
  {
    id: 8,
    name: 'Catedral Metropolitana de Belém',
    description:
      'A Catedral Metropolitana de Belém, também conhecida como Basílica de Nossa Senhora de Nazaré, é uma das principais igrejas católicas da cidade. Sua arquitetura neoclássica é imponente e inspiradora, e o interior é rico em detalhes e obras de arte sacra.',
    imageUrl:
      'https://upload.wikimedia.org/wikipedia/commons/a/ad/Belem-Cathedral1.jpg',
    price: 0,
    openingHours: 'Aberta diariamente, das 7h às 19h',
    address: 'Praça Dom Pedro II, S/N - Cidade Velha, Belém - PA, 66020-330',
    rating: [4.6, 4.7, 4.5, 4.8, 4.6],
    neighborhood: 'Cidade Velha',
    activities: ['Visitação', 'Celebrações religiosas'],
  },
  {
    id: 9,
    name: 'Ilha de Cotijuba',
    description:
      'A Ilha de Cotijuba é uma das maiores ilhas do arquipélago de Belém, localizada a cerca de 2 horas de barco da cidade. O local é conhecido por suas belas praias, natureza preservada e ambiente tranquilo. É um destino ideal para quem quer relaxar e aproveitar a natureza.',
    imageUrl:
      'https://photo620x400.mnstatic.com/6afc92acd495298a77bc0da9683fbbbf/ruinas-da-penitenciaria-da-ilha-de-cotijuba.jpg',
    price: 60,
    openingHours:
      'A ilha pode ser visitada a qualquer hora, mas é recomendado ir durante o dia.',
    address: 'Ilha de Cotijuba, Belém - PA',
    rating: [4.7, 4.8, 4.5, 4.6, 4.9],
    neighborhood: 'Ilha de Cotijuba',
    activities: ['Praias', 'Caminhadas', 'Banho de rio'],
  },
  {
    id: 10,
    name: 'Museu do Círio',
    description:
      'O Museu do Círio é um espaço dedicado à preservação da cultura e da história da maior festa religiosa do Norte do Brasil, o Círio de Nazaré. O local conta com um acervo de peças históricas, objetos de devoção e documentos que contam a história da festa. Além disso, o museu também promove exposições temporárias e atividades culturais.',
    imageUrl:
      'https://museus.pa.gov.br/midias/2021/medias/up_1_miniatura_museudocirio.jpg',
    price: 10,
    openingHours: 'De terça-feira a sábado, das 10h às 16h',
    address: 'Av. Magalhães Barata, 1.158 - São Brás, Belém - PA, 66060-281',
    rating: [4.4, 4.5, 4.2, 4.6, 4.3],
    neighborhood: 'São Brás',
    activities: ['Visitação', 'Exposições temporárias', 'Atividades culturais'],
  },
];
