---
sidebar_position: 7
---

# Boas práticas React

O react é uma biblioteca open-source que tem como objetivo facilitar a construção de pedaços de UI através da componentização e programação declarativa.

Vamos listar algumas dicas de como usar o react nos projetos loomi de forma satisfatória. Se liga aí!

1. Um componente por arquivo. Mantenha esse padrão para deixar os componentes mais facilmente localizáveis e evitar confusão. Além disso, o código fica mais separado e mais fácil de ler.
2. Tente ao máximo tirar a lógica do JSX. Isso facilita a leitura, e deixa a lógica separada do UI, o que é uma coisa muito importante!

❌ Não faça isso

```jsx
export const Component = () => {
  return (
    <div>
      <button
        onClick={() => {
          const a = {};
          const b = 4;
          // ....
          // ....
        }}
      >
        Criar algo
      </button>
    </div>
  );
};
```

✅ Faça isso

```jsx
export const Component = () => {
  const handleSubmit = () => {
    const a = {};
    const b = 4;
    // ....
    // ....
  };

  return (
    <div>
      <button onClick={handleSubmit}>Criar algo</button>
    </div>
  );
};
```

3. Seguindo o mesmo ponto, tente desacoplar a lógica do componente através de custom hooks, principalmente se você perceber que o componente está muito grande ou que a lógica está sendo usada em outros componentes.
4. Use fragments quando necessário, ao invés de elementos html que não vão ter utilidade.
5. Use desestruturação para receber as props
6. Sempre PascalCase para componentes e tipos, e camelCase para o resto
7. Use rest props para deixar o componente mais flexível e pra não precisar declarar todas as props sempre.

❌ Não faça isso

```jsx
export const Component = ({ name }) => {
// e se eu quiser mandar o resto das propriedades do elemento html? Eu vou ter que
// declarar uma por uma?
	return <input name={name} style="..."/>
}
// onChange e onBlur não vão funcionar!
<Component name="input" onChange={...} onBlur... />
```

✅ Faça isso

```jsx
 export const Component = ({ name, ...restProps }) => {
 // Resolvido! Deixe o restProps depois de todas as outras props, pra deixar
 // o componente mais flexível!
	return <input name={name} style="..." {...restProps}/>
}
// agora sim!
 <Component name="input" onChange={...} onBlur... />
```

8. Use children props para deixar seu componente mais flexível
9. Aproveite o **Máximo** a componentização do react. Uma boca dica para isso é sempre tentar seguir o príncipio de responsabilidade única: Um componente deve ter uma única responsabilidade e 1 único motivo para ser mudado.
10. Evite prop drilling. Utilize context ou outra estratégia
11. Cuidado com renderizações desnecessárias! Para isso, primeiro verifique onde está o seu estado. Esse estado realmente precisa estar lá? O estado sempre deve ficar no componente que está realmente o usando. Após isso, verifique se não cabe um useMemo, memo ou useCallback na situação. [Mais sobre useMemo e useCallback aqui](https://kinsta.com/pt/blog/usecallback-react/#:~:text=useCallback%20vs%20usarMemo&text=A%20diferen%C3%A7a%20chave%20%C3%A9%20que,voc%C3%AA%20pode%20chamar%20mais%20tarde.)
12. Nunca esqueça das keys nos componentes ao usar o map. É muito importante no processo de renderização do React. [Mais aqui](https://reactjs.org/docs/lists-and-keys.html)
13. Aprenda alguns padrões de componentes react! [Clica aqui](https://www.uxpin.com/studio/blog/react-design-patterns/)

Como componentizar bem é uma das coisas mais importantes quando a gente usa o react, iremos resumir aqui um artigo bem legal do Dan Abramov sobre [Como construir componentes resilientes](https://overreacted.io/writing-resilient-components/)
Vamos passar por 4 príncipios de design de componentes muito importantes:

1. **Não interrompa o fluxo de dados**
   Quando usamos algum componente, sempre esperamos que nós possamos passar diferentes valores para as props ao longo do tempo, e o componente sempre vai mudar de acordo com isso.

Porém uma coisa que acontece muito é isso:

```jsx
const Component = ({ isLoading }) => {
  const [loading, setLoading] = useState(isLoading);
  // Mesmo se o isLoading mudar, depois da primeira renderização
  // não vai refletir no loading, então o fluxo de dados foi interrompido
  return loading ? <div>Carregando</div> : <div>Normal</div>;
};

const OtherComponent = () => {
  const [loadingSomething, setLoadingSomething] = useState(false);

  const changeLoading = () => {
    setLoadingSomething(!loadingSomething);
  };
  // o loadingSomething muda, mas não reflete no Component
  return (
    <div>
      <button onClick={changeLoading}>clique aqui</button>
      <Component isLoading={loadingSomething} />
    </div>
  );
};
```

Sempre deixe o fluxo de dados livre para um comportamento normal do componente. Se a props muda, o componente também deve mudar para corresponder.

2. **Nenhum componente é um Singleton**

As vezes nós supomos que certos componentes só aparecem 1 vez, tipo uma Navbar. Mas acontece que nem sempre essa suposição está correta. Por exemplos, temos que animar uma transição entre dois componentes do tipo Page. Para isso, duas Page precisam estar montadas na DOM. Só que dependendo de como fizemos esse componente, a Page pode assumir que ela é única no DOM, levando a bugs. Colocar ou esconder componentes não deve quebrar sua aplicação.

3. **Mantenha o estado local isolado**

Considere um componente Post. Esse componente tem uma lista de componentes Comment ( que podem ser expandidos ) e um input `NewComment`.

Alguns estados nesse exemplo **PRECISAM** ser compartilhados, mas outros, não. Esses que não necessitam são chamados de estado local. Não é uma boa prática deixar estado local como global, por que isso deixa o código mais díficil de ser lido e pode causar re-renderizações desnecessárias.

Para identificar um estado local podemos fazer a pergunta: "Se esse componente for renderizado duas vezes, essa interação deve refletir na outra cópia?". Se a resposta for não, é um estado local.

Exemplo: Imagine que temos dois componentes `Post` montados:

1. Conteúdo do post: se editarmos o conteúdo de um post, nós iremos querer que isso se reflita no outro também. Então não é um estado local do Post.
2. Lista de comentários `Comment`. Se adicionarmos ou editarmos um comentário, nós também iremos querer que se reflita no outro Post. Não é um estado local.
3. Expansão dos `Comment`: Seria estranho expandir um comentário e o outro expandir junto. Portanto, esse é um estado local do `Comment`.
4. Valor do input `NewComment`: Também seria estranho que digitássemos algo em um input, e outro também fosse digitado automaticamente. Portanto, é um estado local de `NewComment`.

É isso, astronauta. Essa foi só uma introdução de como a gente usa React nos nossos projetos! Fique a vontade para perguntar e dar quaisquer sugestões.
