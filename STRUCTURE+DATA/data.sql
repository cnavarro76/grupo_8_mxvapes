use dbMxVapes;

/*insercion tipos de usuario*/
insert into userType (uType) values
("Administrador");
insert into userType (uType) values
("Cliente");

/*insercion de usuarios*/
insert into users (userName, lastName, email, user_type, user_pass, address, image) values 
("Carlos","Navarro","ncarlos47@hotmail.com",1,"$2a$10$mgmN5x/Y86OH0lNyVLtRsuYTg/RXvBYI0Ys.vO.PxzkfDBtR0hYFC","Santa Fe, Alvaro Obregon","1643306242498_img.jpeg");
insert into users (userName, lastName, email, user_type, user_pass, address, image) values 
("Andres","Anguiano","asan@live.com.mx",1,"$2a$10$mgmN5x/Y86OH0lNyVLtRsuYTg/RXvBYI0Ys.vO.PxzkfDBtR0hYFC","Xochimilco","163452789_img.jpeg");
insert into users (userName, lastName, email, user_type, user_pass, address, image) values 
("Juan","Lopez","juanL@gmail.com",2,"$2a$10$mgmN5x/Y86OH0lNyVLtRsuYTg/RXvBYI0Ys.vO.PxzkfDBtR0hYFC","Benito Juarez","1643306242499_img.jpeg");
insert into users (userName, lastName, email, user_type, user_pass, address, image) values 
("Christian","Juarez","juanL@gmail.com",2,"$2a$10$mgmN5x/Y86OH0lNyVLtRsuYTg/RXvBYI0Ys.vO.PxzkfDBtR0hYFC","Benito Juarez","1643306242499_img.jpeg");
insert into users (userName, lastName, email, user_type, user_pass, address, image) values 
("Carlos","Castañeda","juanL@gmail.com",2,"$2a$10$mgmN5x/Y86OH0lNyVLtRsuYTg/RXvBYI0Ys.vO.PxzkfDBtR0hYFC","Benito Juarez","1643306242499_img.jpeg");

/*insercion de typo de producto*/
insert into productCategory (productCat) values
("Kits");
insert into productCategory (productCat) values
("E-juice");
insert into productCategory (productCat) values
("Nic-salts");
insert into productCategory (productCat) values
("Pods");
insert into productCategory (productCat) values
("CBD");
insert into productCategory (productCat) values
("Accesories");

/*insercion de productos*/
insert into products (product_name, category, product_description, price, discount, image) values 
("KIT DE INICIO",1,"KOKO PRIME. La nueva versión mejorada del Pod Koko que tan buenos resultados ha dado. Amplía la batería interna a 690mAh respecto a los 520 de su predecesor. Capaz de llegar hasta los 15w de potencia y cuenta con dos configuraciones de entrada de aire, DL y MTL.\r\n\r\nEl Koko Prime permite 2 configuraciones de su sistema de flujo de aire cuando el pod se instala en diferentes direcciones, para ofrecer dos modos de vapeo: un modo de vapeo DL y un modo de vapeo MTL. ",800,10,"163452789_img.jpeg");
insert into products (product_name, category, product_description, price, discount, image) values 
("KIT DE INICIO",1,"The SMOK Scar-Mini Vape Kit is a compact and powerful sub-ohm vape device. Powered by a single 18650 battery, the SMOK Scar Mini kit is capable of up to 80W power output. Paired with the TFV9-Mini vape tank, the Scar Mini utilises the TFV9 Coil series which adopt a meshed coil build for pure flavour and denser clouds.\r\n\r\nThe SMOK Scar-Mini is constructed from zinc alloy and has an IP-67 rated shell, which offers dust, water and shock protections. It's diminutive compact size, and ergonomic design makes it a portable solution to the larger Scar 18 vape kit. Taking on a similar design to it's bigger brother, the Scar-Mini is finished with metal and leather textured panels. Featuring a 0.69\" OLED display screen, and operated via two adjustment buttons and a single fire button.",900,10,"1642026924855-Scar-Mini-Vape.jpg");
insert into products (product_name, category, product_description, price, discount, image) values 
("KIT DE INICIO",1,"El Tigon kit es lo último de Aspire, una de las empresas más conocidas y valoradas desde los inicios del vapeo. El nombre de este dispositivo viene de la mezcla entre dos palabras “tiger” y “lion” y hace referencia a su versatilidad y su capacidad de permitir tanto el vapeo a boca-pulmón como directo a pulmón.\r\n\r\nEl mod tiene una batería interna de 1800mAh de autonomía. Dispone de un botón de disparo de forma oval con un indicador luminoso en su interior. El tanque Tigon tiene un diámetro de 24mm y una capacidad de 2ml acorde con la normativa actual. ",900,20,"1642026060744-contact-high-2.jpg");
insert into products (product_name, category, product_description, price, discount, image) values 
("E_JUICE",6,"Ciberate, 3 paquetes de Multi Fruit E Liquid Vape Liquid para Vape E Cigarrillos, Vape Starter Kits Vape con Liquid Vape E Juice para E Cig, (Frambuesa + Cereza + Grosella negra), Sin nicotina\r\n\r\n    Paquete incluido: 3 botellas de 50 ml de líquido vape, 0 mg de nicotina, 70 VG / 30 PG. E Sabor de jugo: frambuesa + cereza + grosella negra.\r\n    Alta calidad: el sabor puro y natural se utiliza en el líquido e. Sin color sintetizado, sin efectos secundarios en la garganta o los pulmones.\r\n    Adecuado para todo el kit de Vape: puede usar este líquido en todo tipo de kit de vape y obtener un sabor agradable.\r\n    Uso fácil: diseño especial de bloqueo para niños. No se preocupe por los niños abrirlo accidentalmente. (Sin nicotina).\r\n    Relleno de boquilla larga: el diseño de punta de goteo de recarga de boquilla larga facilita el llenado, reduce las fugas durante el llenado. Perfecto para todos los kits de inicio de cigarrillos electrónicos.",650,8,"1642015577223-e-juice.jpg");
insert into products (product_name, category, product_description, price, discount, image) values 
("NIC SALTS",3,"Prueba este delicioso e-liquid de sales con mezcla de tabacos secos y suaves acompañado de un exquisito toque de horchata con canela que le da ese toque mexicano.",460,15,"1642016045476-salt.jpg");

/*ejemplo de carrito*/
insert into cart (idUser, idProduct, productAmount, productPrice, fProductPrice, finalPrice) values
(1, 1, 1, 790, 790, 790);

select * from users;
select * from products;
select * from cart;
select * from usertype;
select * from productCategory;
