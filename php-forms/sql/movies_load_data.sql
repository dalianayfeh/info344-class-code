-- file path must be a full path to your CSV file
load data infile '~/Downloads/movies-2014.csv'
into table movies
fields terminated by ','
optionally enclosed by '"'
ignore 1 lines;