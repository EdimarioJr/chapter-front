---
sidebar_position: 8
---

# Versionando os projetos

Aqui na loomi, usamos o git em conjunto com o github para fazer o versionamento dos nosso projetos.

:::info
💡 **Dica:** Se você ainda não se sente familiarizado com git e github, seria legal dar uma olhadinha nesse [tutorial](https://fullcycle.com.br/git-e-github/). É um pouco longo, mas não se assuste, é bem tranquilo :sunglasses:. Vai lá rapidinho e depois volta, a gente vai estar aqui te esperando :purple_heart:
:::

Utilizamos o [fluxo de trabalho do git](https://docs.github.com/pt/get-started/quickstart/github-flow) para deixar esse gerenciamento mais simples e padronizado. Além disso, como podemos ter vários desenvolvedores front mexendo no mesmo projeto, isso evita que tudo fique uma tremenda confusão 😂

Quando você começar a entrar nos projetos, você vai ser adicionado(a) na organização front loomi no github, e assim poderá ter acesso ao código dos nossos projetos. Em todo projeto, basicamente, a branch principal vai ser a ==develop==. Isso quer dizer que toda branch que você for criar para adicionar a funcionalidade da sua task, você vai criar a partir dela. Além disso, todo pull request que você abrir, você vai abrir para mergear nessa branch.

:::caution
📢 **Aviso:** Sempre deixe a sua branch develop local atualizada!
:::

:::caution
📢 **Aviso:** Se você tem uma branch que tá demorando para ser mergeada, sempre atualize essa sua branch local com a develop remota. Isso serve para você pegar o trabalho dos seus colegas que já foram mergeados, e evitar um grande número de conflitos, o que pode causar um trabalhão depois!
:::

Para resumir, esse é o fluxo normal de trabalho:

1. Planning no seu projeto acontece. Você vai pegar suas tasks no trello do projeto. Na maioria das vezes, cada task que você pegar = uma branch que você vai abrir para desenvolver essa task. É uma boa prática.
2. Você acessa seu projeto pelo terminal, vai pra sua branch develop.
3. Dá um `git pull` para atualizar sua develop local com a develop remota
4. Dá um `git checkout -b feat/sua-funcionalidade` para criar a branch que você vai desenvolver sua task a partir da develop
5. Desenvolve sua funcionalidade. Sempre bom subir pro github para não perder se o seu computador pifa. Para isso dê um `git push -u origin feat/sua-funcionalidade` Isso só da primeira vez. Depois você só precisa dar um `git push` :sunglasses:
6. Demorou alguns dias? Todo dia dê `git pull origin develop` para integrar o trabalho dos seus colegas na sua branch.
7. Terminou sua funcionalidade? Você está pronto para abrir um Pull request. Vá até o github, e localize sua branch:
   ![exemplo Github](../static/img/Pasted%20image%2020221213002136.png)
8. Após isso, clique nesse contribute, e aperte no Open pull request.
9. Descreva o que você fez nessa funcionalidade, para que fique mais fácil pro seu colega corrigir o seu PR. Depois, é só clicar no Create Pull Request, e esperar alguém corrigir.
10. Repita isso (x1000)

Massa? Tem dúvidas ? Pode perguntar a **LITERALMENTE** qualquer pessoa do chapter e da loomi. Sério, todo mundo vai te ajudar ❤️
