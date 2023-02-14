CREATE TABLE nomes
(
    nome VARCHAR(50),
    email VARCHAR(40),
    idade INT(3)
);

insert into nomes(nome, email, idade)
values
(
    'Cláudia',
    'claudia@gmail.com',
    49
);


select * from nomes where idade < 18;

delete from nomes where idade < 18;

update nomes set nome = 'Pedro Felipe', idade = 20 where nome = 'Pedro';