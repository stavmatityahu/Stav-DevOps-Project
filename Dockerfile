FROM nginx:alpine

COPY build/ /usr/share/nginx/html/

RUN mkdir -p /etc/nginx/ssl

RUN apk add --no-cache openssl && \
    openssl req -x509 -nodes -days 365 -newkey rsa:2048 \
    -keyout /etc/nginx/ssl/privkey.pem \
    -out /etc/nginx/ssl/fullchain.pem \
    -subj "/CN=localhost" && \
    chmod 644 /etc/nginx/ssl/*.pem

RUN echo 'server { \
    listen 80; \
    server_name _; \
    location / { \
        return 301 https://$host$request_uri; \
    } \
} \
server { \
    listen 443 ssl; \
    server_name _; \
    ssl_certificate /etc/nginx/ssl/fullchain.pem; \
    ssl_certificate_key /etc/nginx/ssl/privkey.pem; \
    ssl_protocols TLSv1.2 TLSv1.3; \
    location / { \
        root /usr/share/nginx/html; \
        index index.html index.htm; \
        try_files $uri $uri/ /index.html; \
    } \
}' > /etc/nginx/conf.d/default.conf

EXPOSE 80
EXPOSE 443

CMD ["nginx", "-g", "daemon off;"]