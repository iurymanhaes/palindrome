Este repositório contém um projeto React com TypeScript que implementa um formulário simples para verificar se uma palavra é um palíndromo. Ele utiliza as seguintes tecnologias: Vite como framework, json-server para criar um servidor e salvar os resultados no arquivo server.json, Material UI para a interface do usuário, react-hook-form para gerenciar o formulário e yup para validação.

**Como iniciar o aplicativo**

Certifique-se de ter o Node.js instalado em sua máquina.
Clone este repositório para o seu ambiente local.
Navegue até o diretório raiz do projeto.

Execute o seguinte comando para instalar as dependências:

    npm install

Em seguida, execute o seguinte comando para iniciar o servidor json:

    npx json-server --watch server.json

Com o servidor em execução, abra outro terminal e execute o seguinte comando para iniciar o aplicativo:

    npm run dev

O aplicativo será aberto em seu navegador padrão.

**Como usar o aplicativo**

No formulário exibido, digite uma palavra no campo de texto.
O campo de texto aceitará apenas palavras com no mínimo 3 e no máximo 10 caracteres.
Assim que você digitar a palavra, a cor da borda do campo será alterada para verde ou laranja, indicando se a palavra é um palíndromo ou não.
Clique no botão "Salvar" para salvar a palavra e sua classificação como palíndromo ou não.
A lista abaixo do formulário exibirá o conteúdo do arquivo server.json, mostrando as palavras salvas anteriormente.
