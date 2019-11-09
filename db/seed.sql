create table houses (
id serial primary key,
name varchar(25),
address varchar(100),
city varchar (50),
state varchar(25),
zipcode int
);

insert into houses (name, address, city, state, zipcode)
values 
('tom', '123 street st.', 'ft. worth', 'tx', '76137'),
('bob', '456 circle blvd.', 'slc', 'ut', '84116'),
('amy', '789 eff st.', 'dallas', 'ny', '22222')