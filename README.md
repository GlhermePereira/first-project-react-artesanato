# Mobile II - Trabalho 01: Aplicativo de Cards em React Native com Expo

**Data de conclusão:** 31 de agosto de 2025

**Autor(es):** \[Seu Nome / Dupla]

---

## Descrição do Projeto

Este projeto consiste em um aplicativo desenvolvido em **React Native** com **Expo**, que apresenta:

* Um banner fixo no topo da tela.
* Uma lista horizontal de cards (destaques).
* Uma lista vertical de cards (produtos).
* Cada card é um componente separado que recebe props para exibir imagem e título.
* Footer com links interativos e tema **rose**.

O app foi otimizado para funcionar tanto em **mobile** quanto na **web**.

---

## Estrutura do Projeto

```
meu-app-cards/
│
├─ App.js
├─ package.json
├─ assets/
│   ├─ imagens dos produtos (.jpg, .png)
│
├─ components/
│   ├─ Banner.js
│   ├─ TopMenu.js
│   ├─ Footer.js
│   ├─ HorizontalCard.js
│   ├─ VerticalCard.js
│   ├─ CategoryCard.js
│
└─ ...
```

---

## Componentes

### 1. Banner

Exibe um banner fixo no topo com título e subtítulo centralizados.

**Props:** Nenhuma

**Exemplo:**

```jsx
<Banner />
```

---

### 2. TopMenu

Menu superior com botões clicáveis: Home, Categorias, Novidades, Carrinho e Perfil.

**Props:** Nenhuma

**Exemplo:**

```jsx
<TopMenu />
```

---

### 3. Footer

Rodapé estilizado com links interativos (Instagram, Facebook, WhatsApp) e tema rosa.

**Props:** Nenhuma

**Exemplo:**

```jsx
<Footer />
```

---

### 4. HorizontalCard

Card horizontal com imagem e título.

**Props:**

* `title`: string → título do produto
* `image`: image source → imagem do produto (`require('./assets/...')`)

**Exemplo:**

```jsx
<HorizontalCard title="Vaso de Cerâmica" image={require("./assets/vaso-de-ceramica.jpg")} />
```

---

### 5. VerticalCard

Card vertical com imagem maior e título abaixo.

**Props:**

* `title`: string → título do produto
* `image`: image source → imagem do produto (`require('./assets/...')`)

**Exemplo:**

```jsx
<VerticalCard title="Bolsa de Crochê" image={require("./assets/Bolsa-Crochê.jpg")} />
```

---

### 6. CategoryCard

Card de categoria com cor de fundo personalizada.

**Props:**

* `title`: string → nome da categoria
* `color`: string → cor de fundo do card

**Exemplo:**

```jsx
<CategoryCard title="Decoração" color="#FF69B4" />
```

---

## Dados do App

### Produtos em destaque (horizontal)

* Lista de 10 produtos com título e imagem:

```javascript
const featuredProducts = [
  { id: "1", title: "Vaso de Cerâmica", image: require("./assets/vaso-de-ceramica.jpg") },
  { id: "2", title: "Colar de Madeira", image: require("./assets/colar-de-madeira.jpg") },
  { id: "3", title: "Mini Escultura", image: require("./assets/Mini-Escultura.jpg") },
  ...
];
```

### Produtos (vertical)

* Lista de 10 produtos com ordem diferente:

```javascript
const products = [
  { id: "1", title: "Porta-Retrato", image: require("./assets/Porta-Retrato.jpg") },
  { id: "2", title: "Cesto de Palha", image: require("./assets/cesto-palha.jpg") },
  ...
];
```

### Categorias

```javascript
const categories = [
  { id: "1", title: "Decoração", color: "#FF69B4" },
  { id: "2", title: "Bijuterias", color: "#FF1493" },
  ...
];
```

---

## Layout e Navegação

* Banner fixo no topo.
* FlatList horizontal para destaques.
* ScrollView vertical para produtos.
* TopMenu fixo e Footer interativo.
* Cards clicáveis (preparados para ações futuras).

---

## Tecnologias Utilizadas

* [React Native](https://reactnative.dev/)
* [Expo](https://expo.dev/)
* JavaScript ES6
* Estilização com `StyleSheet` e compatível Web/Mobile

---

## Como Executar o Projeto

1. Clone o repositório:

```bash
git clone https://github.com/GlhermePereira/first-project-react-artesanato
cd meu-app-cards
```

2. Instale as dependências:

```bash
npm install
```

3. Execute com Expo:

```bash
npx expo start
```

4. Abra no **emulador mobile** ou **navegador web**.

---

## Observações

* Todos os assets estão dentro da pasta `assets/`.
* Os cards são clicáveis, podendo ser ligados a detalhes do produto futuramente.
* Tema principal: **rosa/rose**.
* Compatível com web e mobile, com sombras e responsividade.
