insert into tb_typeaccount (name) values ('Corrente');
insert into tb_typeaccount (name) values ('Poupança');
insert into tb_typeaccount (name) values ('Investimento');
insert into tb_typeaccount (name) values ('Casa');

-- user: admin --pass:123
INSERT INTO tb_user(display_name, username, cellphone, email, password) VALUES ('Administrador', 'admin', '18996950566', 'kelvyn@gmail.com', '$2a$10$.PVIfB07x.SfMYTcToxL0.yxcLWU0GbS2NUO1W1QAvqMm/TsFhVem');
INSERT INTO tb_user(display_name, username, cellphone, email, password) VALUES ('Teste', 'teste','1899717557', 'kelvyn@.com', '$2a$10$.PVIfB07x.SfMYTcToxL0.yxcLWU0GbS2NUO1W1QAvqMm/TsFhVem');

insert into tb_account (number, agency, bank, type_account_id, user_id, balance) values (010002200, 4000, 'Banco do Brasil', 1, 1, 0);
insert into tb_account (number, agency, bank, type_account_id, user_id, balance) values (000043000, 4010, 'Banco Caixa', 2, 1, 0);
insert into tb_account (number, agency, bank, type_account_id, user_id, balance) values (456000000, 3040, 'Nubank', 3, 2, 0);

insert into tb_category (name) values ('Conta de Água')
insert into tb_category (name) values ('Conta de Luz')
insert into tb_category (name) values ('Conta de Gás')
insert into tb_category (name) values ('Conta de Internet')
insert into tb_category (name) values ('Venda')
insert into tb_category (name) values ('IPVA')
insert into tb_category (name) values ('IPTU')
insert into tb_category (name) values ('Abastecimento do Automóvel')
insert into tb_category (name) values ('Investimento')
insert into tb_category (name) values ('Conserto')
insert into tb_category (name) values ('Compras de Supermercado')
insert into tb_category (name) values ('Compras Pessoais')
insert into tb_category (name) values ('Compras de Eletrodomésticos')

insert into tb_typemovement (name) values ('Receita');
insert into tb_typemovement (name) values ('Despesa');
insert into tb_typemovement (name) values ('Transferencia entre contas');

insert into tb_situation (name) values ('Pendente');
insert into tb_situation (name) values ('Pago');
insert into tb_situation (name) values ('Recebido');

insert into tb_movement (value_amount, date_movement, category_id, description, situation_id, typemovement_id, account_id) values (1000.00, '20/10/2022', 5, 'vendi alguma coisa', 1, 1, 1);
insert into tb_movement (value_amount, date_movement, category_id, description, situation_id, typemovement_id, account_id) values (50.00, '13/06/2023', 12, 'Comprei Sorvete', 2 , 2, 2);
insert into tb_movement (value_amount, date_movement, category_id, description, situation_id, typemovement_id, account_id) values (400.00, '05/02/2023', 6, 'Transferindo para ficar com algo na conta', 2 , 3, 1);
insert into tb_movement (value_amount, date_movement, category_id, description, situation_id, typemovement_id, account_id) values (400.00, '05/02/2023', 6, 'Transferindo para ficar com algo na conta', 3 , 3, 2);