FROM nginx

COPY ./build /user/share/nginx/html

RUN ls -ls /user/share/nginx/html

EXPOSE 80

CMD [ "nginx","-g","daemon off;" ]