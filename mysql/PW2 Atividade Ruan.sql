create database atv_pw2;
use atv_pw2;

create table tbl_produto (
codigo_produto INT UNSIGNED NOT NULL AUTO_INCREMENT, 
codigo_categoria INT NOT NULL, 
nome_produto VARCHAR(255) NOT NULL, 
valor_produto DECIMAL(10,2) NOT NULL, 
imagem_produto VARCHAR(500) NOT NULL, 
descricao_produto TEXT NOT NULL, 
PRIMARY KEY (codigo_produto)
);

create table tbl_categoria (
codigo_categoria INT NOT NULL AUTO_INCREMENT,
nome_categoria VARCHAR(255) NOT NULL, 
observacoes_categoria TEXT NOT NULL,
PRIMARY KEY (codigo_categoria)
);

ALTER TABLE tbl_produto ADD CONSTRAINT fk_tbl_produto_tbl_categoria
FOREIGN KEY (codigo_categoria)
REFERENCES tbl_Categoria (codigo_categoria);
