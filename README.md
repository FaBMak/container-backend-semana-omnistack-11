# Container para Desenvolvimento: Node.js

Este é um projeto de demonstração, contruído para usar a extensão **[VS Code Remote - Containers](https://aka.ms/vscode-remote/containers)**

## Configurando o container de desenvolvimento

Siga esses passos para executar a demonstração em um container:

1. Se for sua primeira vez usando um container de desenvolvimento, por favor siga os [primeiros passos](https://aka.ms/vscode-remote/containers/getting-started).

2. Para usar esse repositório:

   - Clone o repositório para seu sistema local.
   - Pressione <kbd>F1</kbd> e selecione o comando **Remote-Containers: Open Folder in Container...**.
   - Selecione a pasta clonada, espere o container iniciar, e mãos-à-obra!

> **Nota:** Este container executa como usuário não-root, com acesso sudo por padrão. Comente `"remoteUser": "node"` em `.devcontainer/devcontainer.json` se preferir executar como root.

**Executando**
   - Pressione <kbd>F5</kbd> para iniciar o servidor no container.
   - Inicie o navegador e abra a URL `http://localhost:3000`, o servidor estará rodando no container.

## Origem

Baseado no projeto [Node.js da Microsoft](https://github.com/Microsoft/vscode-remote-try-node).

Alterado apenas a estrutura e inclusão do Nodemon.

## Licença

Copyleft<br />
Licenciado sob a licença MIT.
