// Dados de produtos em formato JSON embutido
const products = [
    {
        "id": 1,
        "name": "Fone de Ouvido Bluetooth",
        "description": "Fone de ouvido sem fio com tecnologia Bluetooth, som de alta qualidade e bateria de longa duração."
      
      {
        "id": 2,
        "name": "Smartphone X10",
        "description": "Smartphone com câmera de 48MP, tela Full HD de 6.5 polegadas e armazenamento de 128GB."
      },
      {
        "id": 3,
        "name": "Notebook Pro 15",
        "description": "Notebook de alto desempenho com processador Intel i7, 16GB de RAM e SSD de 512GB."
      },
      {
        "id": 4,
        "name": "Câmera Fotográfica Digital",
        "description": "Câmera digital com 24MP, lentes intercambiáveis e modo de gravação em 4K."
      },
      {
        "id": 5,
        "name": "Relógio Inteligente",
        "description": "Relógio inteligente com monitor de batimentos, GPS e compatível com iOS e Android."
      },
      {
        "id": 6,
        "name": "Mochila Executiva",
        "description": "Mochila resistente com compartimento para notebook e alças acolchoadas."
      },
      {
        "id": 7,
        "name": "Monitor UltraWide 34\"",
        "description": "Monitor com tela de 34 polegadas, resolução QHD e taxa de atualização de 75Hz."
      },
      {
        "id": 8,
        "name": "Teclado Mecânico RGB",
        "description": "Teclado mecânico com retroiluminação RGB e switches de alta durabilidade."
      },
      {
        "id": 9,
        "name": "Mouse Gamer",
        "description": "Mouse com sensor óptico de alta precisão, ajuste de DPI e design ergonômico."
      },
      {
        "id": 10,
        "name": "Cadeira Gamer",
        "description": "Cadeira ergonômica com ajuste de altura, apoio lombar e estofado de alta qualidade."
      },
      {
        "id": 11,
        "name": "Tablet Pro 10",
        "description": "Tablet com tela de 10.1 polegadas, processador octa-core e suporte a caneta digital."
      },
      {
        "id": 12,
        "name": "Carregador Portátil 10000mAh",
        "description": "Carregador portátil com capacidade de 10000mAh, compacto e com duas portas USB."
      },
      {
        "id": 13,
        "name": "Caixa de Som Bluetooth",
        "description": "Caixa de som portátil com Bluetooth, resistente à água e som estéreo potente."
      },
      {
        "id": 14,
        "name": "Bicicleta Elétrica",
        "description": "Bicicleta elétrica com autonomia de 25km, freios a disco e quadro dobrável."
      },
      {
        "id": 15,
        "name": "Console de Videogame",
        "description": "Console de última geração com gráficos em 4K e catálogo variado de jogos exclusivos."
      },
      {
        "id": 16,
        "name": "Smart TV 4K 55\"",
        "description": "Televisão 4K de 55 polegadas com sistema operacional inteligente e Wi-Fi integrado."
      },
      {
        "id": 17,
        "name": "Ar Condicionado Split 9000 BTUs",
        "description": "Ar condicionado eficiente e silencioso, ideal para ambientes de até 15m²."
      },
      {
        "id": 18,
        "name": "Máquina de Café Expresso",
        "description": "Máquina de café automática com várias opções de bebidas e reservatório de água."
      },
      {
        "id": 19,
        "name": "Geladeira Inverter 450L",
        "description": "Geladeira com tecnologia Inverter, economiza energia e mantém alimentos frescos por mais tempo."
      },
      {
        "id": 20,
        "name": "Fogão de Embutir 5 Bocas",
        "description": "Fogão a gás com forno elétrico, acabamento em inox e acendimento automático."
      },
      {
        "id": 21,
        "name": "Aspirador de Pó Robô",
        "description": "Aspirador de pó robô com sistema de mapeamento e função de limpeza programada."
      },
      {
        "id": 22,
        "name": "Purificador de Água",
        "description": "Purificador de água com filtros de carvão ativado e tecnologia de refrigeração."
      },
      {
        "id": 23,
        "name": "Micro-ondas Digital 30L",
        "description": "Micro-ondas com painel digital, função grill e várias opções de potência."
      },
      {
        "id": 24,
        "name": "Roteador Wi-Fi 6",
        "description": "Roteador com suporte para Wi-Fi 6, ideal para streaming e jogos online."
      },
      {
        "id": 25,
        "name": "SSD Externo 1TB",
        "description": "SSD portátil de 1TB com transferência rápida e design compacto."
      },
      {
        "id": 26,
        "name": "Torradeira Inox",
        "description": "Torradeira com ajuste de temperatura e bandeja removível para fácil limpeza."
      },
      {
        "id": 27,
        "name": "Secador de Cabelo Profissional",
        "description": "Secador com motor potente, controle de temperatura e tecnologia anti-frizz."
      },
      {
        "id": 28,
        "name": "Espremedor de Frutas",
        "description": "Espremedor de frutas elétrico, ideal para preparar sucos frescos em segundos."
      },
      {
        "id": 29,
        "name": "Câmera de Segurança Wi-Fi",
        "description": "Câmera de segurança com acesso remoto, visão noturna e detecção de movimento."
      },
      {
        "id": 30,
        "name": "Impressora Multifuncional",
        "description": "Impressora com funções de scanner e cópia, conexão Wi-Fi e impressão rápida."
      },
      {
        "id": 31,
        "name": "Smartwatch Esportivo",
        "description": "Smartwatch com monitoramento de atividades físicas, GPS e resistência à água."
      },
      {
        "id": 32,
        "name": "Ventilador de Coluna",
        "description": "Ventilador com ajuste de altura, oscilação e controle remoto."
      },
      {
        "id": 33,
        "name": "Frigideira Antiaderente",
        "description": "Frigideira com revestimento antiaderente, fácil de limpar e resistente."
      },
      {
        "id": 34,
        "name": "Conjunto de Panelas Inox",
        "description": "Conjunto de panelas em aço inox, resistentes e com tampas de vidro."
      },
      {
        "id": 35,
        "name": "Ferro de Passar a Vapor",
        "description": "Ferro de passar com ajuste de temperatura, vapor vertical e base antiaderente."
      },
      {
        "id": 36,
        "name": "Mini Processador de Alimentos",
        "description": "Processador de alimentos compacto, ideal para preparar alimentos de forma rápida."
      },
      {
        "id": 37,
        "name": "Forno Elétrico de Embutir",
        "description": "Forno elétrico com várias funções, ideal para assar, gratinar e aquecer alimentos."
      },
      {
        "id": 38,
        "name": "Aquecedor Elétrico Portátil",
        "description": "Aquecedor compacto, com regulagem de temperatura e proteção contra superaquecimento."
      },
      {
        "id": 39,
        "name": "Churrasqueira Elétrica",
        "description": "Churrasqueira sem fumaça, ideal para grelhados e com controle de temperatura."
      },
      {
        "id": 40,
        "name": "Batedeira Planetária",
        "description": "Batedeira com tigela de inox, diversas velocidades e acessórios de mistura."
      },
      {
        "id": 41,
        "name": "Filtro de Ar Portátil",
        "description": "Filtro de ar compacto, remove impurezas e melhora a qualidade do ar."
      },
      {
        "id": 42,
        "name": "Kit Ferramentas Básico",
        "description": "Kit de ferramentas completo com martelo, chave de fenda e alicate."
      },
      {
        "id": 43,
        "name": "Massageador Corporal",
        "description": "Massageador portátil com diferentes intensidades e cabeçotes de massagem."
      },
      {
        "id": 44,
        "name": "Luminária de Mesa LED",
        "description": "Luminária com ajuste de brilho, design moderno e carregador USB embutido."
      },
      {
        "id": 45,
        "name": "Máquina de Cortar Cabelo",
        "description": "Máquina com várias lâminas de corte e ajuste de altura."
      },
      {
        "id": 46,
        "name": "Projetor Portátil",
        "description": "Projetor compacto com entrada HDMI e compatibilidade com várias plataformas."
      },
      {
        "id": 47,
        "name": "Balança Digital Corporal",
        "description": "Balança com sensores de precisão, mede peso, gordura e massa muscular."
      },
      {
        "id": 48,
        "name": "Liquidificador com Jarra de Vidro",
        "description": "Liquidificador potente, ideal para sucos, vitaminas e sopas."
      },
      {
        "id": 49,
        "name": "Alto-Falante de Alta Fidelidade",
        "description": "Alto-falante com som surround, ideal para festas e ambientes amplos."
      },
      {
        "id": 50,
        "name": "Smart Lâmpada Wi-Fi",
        "description": "Lâmpada inteligente com controle de brilho e cores via app."
      }  ];
  
  // Função para exibir produtos com base em um filtro
  function displayProducts(filteredProducts) {
    const root = document.getElementById('root');
    root.innerHTML = ''; // Limpa os produtos atuais
  
    root.classList.add('container', 'mt-4', 'd-flex', 'flex-wrap', 'justify-content-center');
  
    // Exibe cada produto como um card
    filteredProducts.forEach(product => {
      const card = document.createElement('div');
      card.classList.add('card', 'm-3');
      card.style.width = '18rem';
  
      card.innerHTML = `
        <div class="card-body">
          <h5 class="card-title">${product.name}</h5>
          <p class="card-text">${product.description}</p>
          <a href="#" class="btn btn-primary">Saiba Mais</a>
        </div>
      `;
  
      root.appendChild(card);
    });
  }
  
  // Função de filtro de pesquisa
  fucntion filterProducts(searchTerm) {
    const filteredProducts = products.filter(product => 
      product.name.toLowerCase().includes(searchTerm.toLowerCase()) || 
      product.description.toLowerCase().includes(searchTerm.toLowerCase())
    );
    displayProducts(filteredProducts);
  }
  
  // Exibe todos os produtos inicialmente
  displayProducts(products);
  
  // Adiciona um evento de escuta ao campo de pesquisa
  document.getElementById('search-input').addEventListener('input', (event) => {
    const searchTerm = event.target.value;
    filterProducts(searchTerm);
  });
  