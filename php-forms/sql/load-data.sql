-- file path must be a full path to your CSV file
load data infile '~/Downloads/zip_code_database.csv'
into table zips
fields terminated by ','
optionally enclosed by '"'
ignore 1 lines;

10:38:28	load data infile '~/Downloads/zip_code_database.csv' into table zips fields terminated by ',' optionally enclosed by '"' ignore 1 lines	Error Code: 13. Can't get stat of '/Users/Dalia/Downloads/zip_code_database.csv' (Errcode: 13 "Permission denied")	0.0029 sec
