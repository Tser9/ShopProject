FROM php:8-alpine3.12

RUN  curl -sS https://getcomposer.org/installer | php -- --install-dir=/usr/local/bin --filename=composer




WORKDIR /app

COPY . .
RUN  composer install

EXPOSE 8000
CMD php artisan serve --host 0.0.0.0
