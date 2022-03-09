create database dbMxVapes;
use dbMxVapes;
drop database dbMxVapes;

/*tabla Tipos de usuarios*/
create table userType(
	id int auto_increment primary key,
    utype varchar(50)
);

/*tabla de usuarios*/
create table users(
	id int auto_increment primary key,
    userName varchar(50),
    lastName varchar(50),
    email varchar(50),
    user_type int,
    user_pass varchar(100),
    address varchar(50),
    image blob,
    Foreign Key (user_type) references userType(id)
);

/*tabla de categoria de productos*/
create table productCategory(
	id int auto_increment primary key,
    productCat varchar(50)
);

/*tabla de productos*/
create table products(
	id int auto_increment primary key ,
    product_name varchar (50),
    category int,
    product_description varchar(1000),
    price float,
    discount float,
    image blob,
    Foreign Key (category) references productCategory(id)
);

/*tabla de carrito de compras*/
create table cart(
	idUser int,
    idProduct int,
    productAmount int,
    productPrice float,
    fProductPrice float,
    finalPrice float,
    Foreign Key (idUser) references users(id),
    Foreign key (idProduct) references products(id)
);