create table todo (
  id serial primary key,
  title varchar not null,
  completed boolean not null default false
);