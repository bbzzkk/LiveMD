# nginx 이미지를 사용합니다. 뒤에 tag가 없으면 latest 를 사용합니다.
FROM nginx:alpine

# root 에 app 폴더를 생성
# RUN mkdir /build
RUN mkdir -p /key
# work dir 고정
WORKDIR /var/www/html

# host pc의 현재경로의 build 폴더를 workdir 의 build 폴더로 복사
COPY ./build .


COPY ./default.conf /etc/nginx/conf.d/default.conf
VOLUME ./build /var/www/


# nginx 의 default.conf 를 삭제
#RUN echo "server {\n" \
##    "listen 80;\n" \
#    "root /var/www/html;\n" \
#    "index index.html;\n" \
#    "location / {   \n" \
#    "    try_files $uri $uri/ /index.html;\n" \
#    "}\n" \
#"}" > /etc/nginx/conf.d/default.conf

# server {
#     listen 443 ssl http2;
#     listen [::]:443 ssl http2;
#     root /var/www/html;
#     server_name chat.live-md.com;
#     index index.html;
#     ssl on;
#     ssl_certificate /etc/letsencrypt/live/live-md.com/fullchain.pem;
#     ssl_certificate_key /etc/letsencrypt/live/live-md.com/privkey.pem;
#     ssl_session_timeout 5m;
#     ssl_protocols TLSv1 TLSv1.1 TLSv1.2;
#     ssl_ciphers ECDHE-ECDSA-AES128-GCM-SHA256:ECDHE-RSA-AES128-GCM-SHA256:ECDHE-ECDSA-AES256-GCM-SHA384:ECDHE-RSA-AES256-GCM-SHA384:ECDHE-ECDSA-CHACHA20-POLY1305:ECDHE-RSA-CHACHA20-POLY1305:DHE-RSA-AES128-GCM-SHA256:DHE-RSA-AES256-GCM-SHA384;
#     ssl_prefer_server_ciphers off;
#     client_max_body_size 20m;
#     add_header Strict-Transport-Security \"max-age=63072000\" always;
#     ssl_stapling on;
#     ssl_stapling_verify on; 
#     location / {   
#         try_files $uri $uri/ /index.html;
#     }
    
# }

# host pc 의 nginx.conf 를 아래 경로에 복사
# COPY ./nginx/nginx.conf /etc/nginx/conf.d

# 80 포트 오픈
EXPOSE 80
EXPOSE 443

# container 실행 시 자동으로 실행할 command. nginx 시작함
CMD ["nginx", "-g", "daemon off;"]



# sudo docker build -t nginx-client:first .
