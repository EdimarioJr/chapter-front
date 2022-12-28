---
sidebar_position: 5
---

# Boas práticas HTML

O HTML é o esqueleto das nossas páginas web. Apesar disso, em muitas ocasiões é uma ferramenta subestimada. Trabalhamos diretamente com HTML todo o tempo, e por isso é importante entender direito essa ferramenta e conhecer essas boas práticas. Como trabalhamos com React + Chakra, nem sempre você vai modificar elementos HTML diretamente, mas o conhecimento desses elementos vai lhe livrar de muitas enrascadas.

:::info
💡**Dica**: Se quiser aprender mais sobre o HTML, é bom dar uma olhada no site do [Mozilla](https://developer.mozilla.org/pt-BR/docs/Web/HTML)
:::

Algumas boas práticas interessantes sobre o HTML

1. Use e abuse das tags semânticas do HTML. Facilitam na estrutura da aplicação ( seu colega vai entender mais fácil ), no SEO e também na acessibilidade. [Veja mais aqui](https://blog.geekhunter.com.br/voce-conhece-html-semantico/)
2. Sempre indente seu código HTML. Isso é facilmente alcançado com o prettier ( que temos no nosso boilerplate!)
3. TODA imagem deve ter um atributo alt. É muito importante para a acessibilidade e leitores de tela
4. Estruture com cuidado seu esqueleto HTML para que não fiquem elementos e aninhamentos desnecessários que podem complicar na estilização e leitura do código
5. Utilize os elementos corretos para suas funções corretas. Por exemplo, não tem sentido você fazer `<div onClick={}>Deletar algo</div>` se você pode fazer ( e é mais correto) `<button onClick={}>Deletar</button>`.
6. Não construa layouts utilizando tabelas!
7. Implementar controles de UI. Temos que deixar possível o usuário navegar pelo site através de teclado e leitores de tela. Para isso, utilizamos os próprios atributos HTML nos lugares corretos. [Mais aqui](https://developer.mozilla.org/pt-BR/docs/Learn/Accessibility/HTML)

No mais, é isso astronauta! Aqui vão alguns links interessantes de estudo:

1. [HTML Mozilla](https://developer.mozilla.org/pt-BR/docs/Learn/HTML)
2. [HTML: O que é](https://rockcontent.com/br/blog/html/)
