FROM php:8.0-apache
RUN docker-php-source extract \
    && docker-php-source delete

RUN apt-get -y update
RUN apt-get update && apt-get install -y \
    zlib1g-dev \
    libzip-dev \
    unzip
RUN docker-php-ext-install zip

RUN docker-php-ext-install pdo pdo_mysql

RUN mkdir -p /usr/src/app
RUN mkdir -p /usr/src/app/back

WORKDIR /usr/src/app/back

RUN  curl -sS https://getcomposer.org/installer | php -- --install-dir=/usr/local/bin --filename=composer

COPY . .

RUN composer install

EXPOSE 8000
CMD php artisan serve --host 0.0.0.0
