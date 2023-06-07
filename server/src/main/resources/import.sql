insert into tb_typeaccount (name) values ('Corrente');
insert into tb_typeaccount (name) values ('Poupança');
insert into tb_typeaccount (name) values ('Investimento');
insert into tb_typeaccount (name) values ('Casa');

-- user: admin --pass:123
INSERT INTO tb_user(display_name, username, cellphone, email, password) VALUES ('Administrador', 'admin', '18996950566', 'kelvyn@gmail.com', '$2a$10$.PVIfB07x.SfMYTcToxL0.yxcLWU0GbS2NUO1W1QAvqMm/TsFhVem');
INSERT INTO tb_user(display_name, username, cellphone, email, password) VALUES ('Teste', 'teste','1899717557', 'kelvyn@.com', '$2a$10$.PVIfB07x.SfMYTcToxL0.yxcLWU0GbS2NUO1W1QAvqMm/TsFhVem');

insert into tb_account (number, agency, bank, type_account_id, user_id) values (000000000, 4000, 'Banco do Brasil', 1, 1);
insert into tb_account (number, agency, bank, type_account_id, user_id) values (000043000, 4010, 'Banco Caixa', 2, 1);
insert into tb_account (number, agency, bank, type_account_id, user_id) values (456000000, 3040, 'Nubank', 3, 2);