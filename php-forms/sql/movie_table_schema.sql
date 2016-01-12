drop table if exists movies;

create table movies (
	title varchar(100) not null,
    released date, 
    distributor varchar(64),
    genre varchar(50),
    rating varchar(20),
    gross int, 
    tickets int, 
    imdb_id varchar(20)
);