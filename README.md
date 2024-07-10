# Frontend Angular

## Por que Angular?

Optei pelo Angular para o frontend pelos seguintes motivos:

- **TypeScript**: Permite desenvolvimento mais robusto e escalável, com tipagem estática e suporte moderno a ECMAScript.
- **Component-Based Architecture**: Facilita a criação de componentes reutilizáveis e a manutenção do código.
- **RxJS**: Facilita o tratamento de fluxos de dados assíncronos e interações com APIs.
- **Angular CLI**: Oferece ferramentas poderosas para desenvolvimento, build e testes.

## Como Executar

### Pré-requisitos

- Node.js versão 20 ou superior
- Angular CLI (instalado globalmente)
- Docker (opcional, para execução via contêiner)

### Passo a Passo

1. **Instalação das Dependências**

   ```bash
   npm install
   ```

2. **Compilação e Execução Local**

   ```bash
   ng serve
   ```

O servidor de desenvolvimento estará acessível em http://localhost:4200


### Executando via Docker

- Para executar via Docker, você pode construir uma imagem Docker do projeto:

   ```bash
   docker build -t frontend-angular .
   ```

- E então executar o contêiner:

  ```bash
  docker run -p 80:80 frontend-angular
  ```

O aplicativo estará acessível em http://localhost:80
