# DIA 1

O objetivo do exercício nesse dia foi colocar em prática os fundamentos básicos aprendidos sobre Git & GitHub. 

Os requisitos do exercício são:

1. Instalar e configurar o Git para uso.
  * Para instalar -> `sudo apt-get install git-all`
  * Configurar username -> `git config --global user.name "Seu nome"`
  * Configurar email -> `git config --global user.email seuemail@exemplo.br`
  * Verificar versão -> `git --version`

2. Criar conta no GitHub.

3. Adicionar uma chave SSH na conta GitHub.
  * Criando chave SSH usando email como rótulo -> `ssh-keygen -t rsa -b 4096 -C "seuemail@gmail.com"`
  * Iniciar o ssh-agent em background -> `eval "$(ssh-agent -s)"`
  * Adicionar chave privada no ssh-agent -> `ssh-add ~/.ssh/id_rsa`
  * Exibir a chave para copiar -> `cat ~/.ssh/id_rsa.pub`
  * Os passos para colar a chave no _(GitHub pode ser encontrado aqui.)[https://docs.github.com/en/authentication/connecting-to-github-with-ssh/adding-a-new-ssh-key-to-your-github-account]_

4. Criando um repositório no GitHub de exercícios da Trybe:
  * Crie um arquivo de texto `trybe-skills.txt` com o conteúdo: `O que vou aprender na Trybe: - Unix  - Bash  - Git`.
  * Na raiz da pasta de exercícios, inicialize o repositório com `git init`.
  * Adicionar para cada seção um subtítulo referente ao fato escolhido.
  * Crie um README utilizando o `touch README.md`.
  * Prepare os arquivos para o commit: `git add .`.
  * Faça o primeiro commit: `git commit -m "Initial commit"`.
  * Crie um repositório público no GitHub e pegue o URL de conexão SSH.
  * Execute o comando para adicionar a URL ao repositório local `git remote add origin "URL_DO_REPOSITÓRIO"`
  * Verifique se tudo está certo com sua URL remota utilizando o comando git remote -v. Seu terminal deve conter algo similar a isso: `origin git@github.com:john-snow/know-nothing.git (fetch)` e `origin git@github.com:john-snow/know-nothing.git (push)`. Em que `john-snow` corresponde ao seu username e `know-nothing` ao nome que você deu ao seu repositório.
  * Então envie as alterações para o repositório através de `git push origin master`.

5. _(Habilitando a autenticação de dois fatores no GitHub)[https://docs.github.com/pt/authentication/securing-your-account-with-two-factor-authentication-2fa/configuring-two-factor-authentication]_