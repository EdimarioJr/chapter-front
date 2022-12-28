---
sidebar_position: 3
---

# Princípios de Software

Olha a gente aqui de novo! Nessa parte vamos falar um pouquinho sobre alguns príncipios de software que vão melhorar a **SUA** vida, a **MINHA** vida, a vida da **LOOMI** e a vida dos futuros desenvolvedores front-end que ainda hão de nascer e colaborar com a gente. Não se preocupe nem se sinta intimidado(a), a gente aprende no caminho! :punch:

## Regras gerais

### Siga as convenções

Se você começou agora em um projeto ou acabaram de definir suas convenções, siga-as! É muito importante que o projeto seja padronizado, assim sempre saberemos onde vai estar cada parte do projeto e o que esperar quando ler o código. Nós temos nosso boilerplate exatamente pra isso, então o mais recomendado é sempre seguirmos as convenções definidas lá.

### KISS

Mantenha as coisas simples! Faça o código da forma mais simples o possível para que seu colega possa entender perfeitamente o que você quis fazer ao ler seu código. Não crie abstrações desnecessárias e complexas só por tecnicismo. Isso atrapalha a manutenção do projeto e aumenta o tempo que vamos levar para adicionar novas funcionalidades.

### YAGNI — You ain’t gonna need it

Implementar algo somente se for utilizar. Remover códigos comentados ( sempre tente perguntar para quem fez o código o por que daquilo estar comentado ) e retirar o que não está sendo usado.
Muitas vezes o cliente muda de idea no projeto, então implementar algo que ele não pediu, ou algo que você acha que vai usar no futuro sem ter certeza pode dar uma dor de cabeça e gerar refatoração desnecessária.

### Causa raiz

Sempre procure a causa raiz do problema, nunca resolva as coisas superficialmente. No dia-a-dia, na correria, tendemos a corrigir os problemas superficialmente e não adentrar neles, o que muitas vezes causa o re-trabalho!

Tente sempre procurar a causa raiz e resolver assim o problema de uma vez por todas!

## Clean Code

É um livro escrito por Robert Martin que expõe princípios que norteiam um desenvolvimento de qualidade e consequentemente uma vida mais feliz dos desenvolvedores :smile:

Vamos citar alguns príncipios essenciais aqui:

#### Escreva nomes significativos e semânticos

Isso quer dizer que o nome das suas variáveis, funções e classes devem explicar claramente para que o objetivo de cada um. Isso melhora a legibilidade e facilita a manutenção do projeto. Isso serve também para nomes de variáveis dentro de métodos. ===EXPLÍCITO É MELHOR QUE IMPLÍCITO===

❌ Não faça isso

```js
const yyyymmdstr = moment().format("YYYY/MM/DD");

function user() {}

["Bahia", "Pernambuco", "Sergipe"].map((e) => {
  // codigo
  // codigo
  // codigo
  // a variável e é o que mesmo?.
  return e + "Bem vindos";
});
```

✅ Faça isso

```js
const currentDate = moment().format("YYYY/MM/DD");

function getUserInfo() {}

["Bahia", "Pernambuco", "Sergipe"].map((estado) => {
  // codigo
  // codigo
  // codigo
  return estado + "Bem vindos";
});
```

#### Faça uso de parâmetros default

Facilita nossa vida e deixa o código mais legível

❌Não faça isso

```js
function createMicrobrewery(name) {
  const breweryName = name || "Hipster Brew Co.";
  // ...
}
```

✅Faça isso

```js
function createMicrobrewery(name = "Hipster Brew Co.") {
  // ...
}
```

#### Funções devem fazer uma coisa, e a fazer bem!

Isso vai de encontro com o primeira regra do SOLID, o princípio de responsabilidade única. É uma dos príncipios mais importantes do software, por que permite que várias pequenas partes do sistema possam ser compostas, fica mais fácil de testar, de ler o código, de refatorar e consequentemente de manter o projeto. Esse princípio se estende para os componentes React também.

❌Não faça isso

```js
function emailClients(clients) {
  clients.forEach((client) => {
    const clientRecord = database.lookup(client);
    if (clientRecord.isActive()) {
      email(client);
    }
  });
}
```

✅Faça isso

```js
function emailActiveClients(clients) {
  clients.filter(isActiveClient).forEach(email);
}

function isActiveClient(client) {
  const clientRecord = database.lookup(client);
  return clientRecord.isActive();
}
```

#### Evite efeitos colaterais!

Uma função produz um efeito colateral quando ela faz qualquer outra coisa além de receber um parâmetro e devolver valores. Um efeito colateral pode ser escrever em um arquivo, modificar variáveis globais....

Por exemplo: Objetos e arrays são passados por referência sempre no javascript. Se nós temos uma função que muta diretamente esses objetos, outros trechos do código que estavam usando esses objetos podem ser prejudicados e isso pode criar vários bugs. Uma solução seria clonar esses objetos e apenas mutar o clone. O react recomenda fortemente essa prática, principalmente no useState

❌Não faça isso

```js
const addItemToCart = (cart, item) => {
  cart.push({ item, date: Date.now() });
};
```

✅Faça isso

```js
const addItemToCart = (cart, item) => {
  return [...cart, { item, date: Date.now() }];
};
```

#### Explique condicionais e cálculos complexos em variáveis

❌Não faça isso

```js
if (state === "fetching" && isEmpty(listNode) && !thing.length === 0) {
  // ...
}
```

✅Faça isso

```js
function shouldShowSpinner(state, listNode, thing) {
  return state === "fetching" && isEmpty(listNode) && !thing.length === 0;
}

if (shouldShowSpinner(state, listNode, thing)) {
}
```

Outras dicas:

1. Use sempre let ou const
2. Use Promises, ao invés de encadear callbacks
3. Sempre envolva chamadas a api em blocos try...catch
4. Sempre use o operador `===`

Para se aprofundar mais, você pode ler esses links:

1. [Clean code no javascript](https://github.com/ryanmcdermott/clean-code-javascript#variables)
2. [SOLID](https://medium.com/desenvolvendo-com-paixao/o-que-%C3%A9-solid-o-guia-completo-para-voc%C3%AA-entender-os-5-princ%C3%ADpios-da-poo-2b937b3fc530)
3. [Boas práticas no javascript](https://medium.com/desenvolvendo-com-paixao/o-que-%C3%A9-solid-o-guia-completo-para-voc%C3%AA-entender-os-5-princ%C3%ADpios-da-poo-2b937b3fc530)
