# Imaginaria.Toolkit

Разные полезные инструменты, созданные участниками нашего проекта.

Скорее всего эти проекты выложены на https://toolkit.imaginaria.ru

Устанавливается в `/var/www.rpg/imaginaria.toolkit/`

Конфиг nginx (или как-то так, без PHP)

```
server {
    listen 80;
    server_name toolkit.imaginaria.ru;

#    access_log /var/log/nginx/toolkit.access.log;
#    error_log /var/log/nginx/toolkit.errors.log;

    access_log >/dev/null;
    error_log <>/dev/null crit;

    root /var/www.rpg/imaginaria.toolkit;

    index index.php index.html index.htm;

    location ~* ^.+.(css|js|jpg|jpeg|gif|png|ico|txt|woff|mp3|rar|zip)$ {
        expires 7d;
        add_header Cache-Control public;
    }

    location / {
        try_files $uri $uri/ /index.html;
    }

    location ~ favicon.* {
        access_log      off;
        log_not_found   off;
    }
}

```
