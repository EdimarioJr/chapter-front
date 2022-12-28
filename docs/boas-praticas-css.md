---
sidebar_position: 6
---

# Boas práticas CSS

Somos desenvolvedores Front-end, portanto CSS é um dos pilares do nosso conhecimento. Aqui na loomi raramente utilizamos css puro, sempre é utilizando Styled Components, algum pré processador ou alguma biblioteca. Mas é muito importante que os devs tenham conhecimentos sólidos nessa ferramenta tão essencial.

Aqui vamos repassar algumas boas práticas e coisas que não se deve fazer quando lidamos com CSS:

1. Prefira classes ao invés de ids. Ids são muito inflexíveis e não pode ser reaproveitado.
2. Aprenda especifidade do CSS. Ela é extremamente importante. [Dá uma olhada](https://developer.mozilla.org/pt-BR/docs/Web/CSS/Specificity)
3. Use uma nomenclatura consistente nas suas classes. Um bom exemplo é usar a metodologia BEM. [Saiba mais aqui](https://desenvolvimentoparaweb.com/css/bem/)
4. Não utilize !important. A necessidade da utilização do !important é consequência do mal entedimento da especifidade ou organização incorreta do HTML.
5. Use unidades flexíveis ( como rem, porcentagem, vw, vh...), ao invés de números mágicos que facilmente podem quebrar seu layout se o tamanho mudar. Por exemplo, se você sabe que uma tela de 940px sempre vai ter 5 colunas :

❌Não faça isso

```css
width: 188px;
```

✅Faça isso

```css
width: 20%;
```

6. Não acople CSS com HTML. Por exemplo, se você tem que estilizar um item num menu, não use o seletor `.menu li`, prefira criar uma classe `.menu-item` e estilizar por ela. Assim, caso seu HTML mude, não precisa mudar seu CSS.
7. Assim como no javascript, é muito importante você dar nomes legíveis para suas classes. Explícito é melhor que implícito. A metodologia BEM pode te ajudar nisso.
8. Tente sempre colocar os seletores na ordem que estão sendo aplicados no HTML
9. Evite aninhar muito os seletores. Fica mais díficil fazer qualquer mudança depois.
10. Prefira usar flex ou grid para posicionar as coisas. Fica mais fácil e naturalmente responsivo.
11. Mantenha os arquivos de estilo na mesma pasta do componente/página.
12. Evite sempre fazer estilos globais. Só utilize se for pra reaproveitar em vários componentes diferentes, mas mesmo assim, com precaução.

É isso, astronauta! CSS é uma coisa que a gente deve sempre praticar, se não ficamos enferrujados.
Alguns links interessantes:

1. [Css tricks](https://desenvolvimentoparaweb.com/css/bem/)
2. [Aprender Grid](https://www.origamid.com/projetos/css-grid-layout-guia-completo/)
3. [CSS Mozilla](https://developer.mozilla.org/pt-BR/docs/Web/CSS)
