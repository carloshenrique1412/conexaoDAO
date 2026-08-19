-- criar uma base de dados
CREATE database db_exemplo;

-- usar a base de dados criada
USE db_exemplo;

--
DROP TABLE Cliente; 
CREATE TABLE Cliente (
    codigo_cliente INT NOT NULL AUTO_INCREMENT,
    nome VARCHAR(100) NOT NULL,
    logradouro VARCHAR(100) NOT NULL,
    numero INT NOT NULL,
    id_status INT NOT NULL,
    limite_de_credito float NOT NULL,
    PRIMARY KEY (codigo_cliente),
    FOREIGN KEY(id_status) REFERENCES tbl_status (id)
);

CREATE TABLE tbl_status(
	id  INT NOT NULL NOT NULL AUTO_INCREMENT,
    nome varchar(10),
    PRIMARY KEY(id)
);
INSERT INTO tbl_status(nome) VALUES
('BOM'),
('REGULAR'),
('RUIM');

-- Consulta
SELECT * FROM Cliente;
SELECT nome, (limite_de_credito * 100) FROM Cliente;

-- INSERIR DADOS
INSERT INTO  Cliente (nome, logradouro, numero, id_status, limite_de_credito ) VALUES 
('Rayer - Traidor', 'Rua da Sorte', 666, 1, 0.50 ),
('Pimental Moedas', 'Av. dos Texteis', 777, 2,  0.25),
('Emanuel Pisadinha', 'Embaixo da Ponte', 15, 2, 0.11);

SELECT * FROM tbl_status;
Exibindo primeira_query.sql…
