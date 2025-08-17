# [Unreleased] - 16/08/2025

### Adicionado

- **FontAwesome**:

  - Adicionados os pacotes `@fortawesome/fontawesome-svg-core`, `@fortawesome/free-brands-svg-icons`, `@fortawesome/free-regular-svg-icons`, `@fortawesome/free-solid-svg-icons` e `@fortawesome/react-fontawesome`.

  **Changelog.md**

  - Adicionado arquivo para changelog.

### Alterado

- **src/App.jsx**

  - Inicialização da biblioteca FontAwesome e inclusão dos ícones sólidos e de marcas.
  - Preparação para uso global dos ícones no projeto.

- **src/Home/Home.jsx**

  - Implementação do uso de ícones FontAwesome nas categorias do menu lateral.
  - Refatoração do controle de exibição da barra lateral (colapsar/expandir).
  - Ajustes na lógica de seleção de categorias e exibição de conteúdo.
  - Ajustes na posição e na exibição de conteúdo do footer
  - Melhoria na manipulação de datas e estado do filtro.
  - Padronização dos nomes das variáveis e funções.
  - Correção de exibição e navegação das categorias.

- **src/Home/Home.module.css**
  - Ajustes de layout para a barra de navegação, barra lateral e responsividade.
  - Estilos para a barra lateral colapsada e para o drawer.
  - Melhoria na responsividade e organização dos estilos.
  - Ajuste nas cores e tamanhos dos elementos.

### Corrigido

- Correção de inconsistências visuais e funcionais na navegação lateral.
- Ajuste na exibição do Footer conforme estado da barra lateral.

> este resumo foi gerado por IA e cobre todos os pontos importantes das alterações realizadas.
