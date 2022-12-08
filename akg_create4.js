const sqlite3 = require('sqlite3').verbose();
const db = new sqlite3.Database('test4.db');

/*タイアップ（オファー）テーブル（ID、タイアップ名、曲名）*/

let schema = `
create table offer(
  id integer primary key,
  name text,
  songtitle text,
  quantity text
);
`

db.serialize( () => {
	db.run( schema, (error, row) => {
		if(error) {
			console.log('Error: ', error );
			return;
		}
		console.log( "テーブルを作成しました" );
	});
});