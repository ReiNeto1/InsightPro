# Dashboard Empresarial

## Descrição

Este projeto é um **dashboard empresarial** que exibe análises detalhadas de dados de funcionários, insumos, ganhos e uma análise de risco. Ele se conecta a APIs externas para obter dados em tempo real, oferecendo uma interface visualmente atraente e funcional, com gráficos interativos. O projeto é construído com **HTML, CSS, JavaScript, e Node.js**, utilizando a biblioteca **Chart.js** para visualização de dados.

## Tecnologias Usadas

- **Frontend**:
  - HTML
  - CSS
  - JavaScript
  - Chart.js

- **Backend**:
  - Node.js
  - Express.js
  - Axios (para integrar com APIs externas)

## Funcionalidades

- Gráficos interativos para visualização de dados sobre:
  - Funcionários por departamento
  - Insumos utilizados
  - Ganhos ao longo do ano
  - Análise de risco (financeiro, operacional, tecnológico, mercado)
- Conexão a APIs externas para obter dados de análise de risco e insumos.
- Layout responsivo e fácil de usar.

## Estrutura do Projeto

```bash
dashboard/
│
├── public/               # Arquivos Frontend (HTML, CSS, JS)
│   ├── index.html        # Página principal do Dashboard
│   ├── styles.css        # Arquivo de estilos CSS
│   └── script.js         # Arquivo JavaScript para gráficos
│
├── server.js             # Servidor Node.js para backend e APIs
├── README.md             # Instruções do projeto
├── package.json          # Arquivo de configuração do Node.js
└── .gitignore            # Arquivos a serem ignorados no Git
