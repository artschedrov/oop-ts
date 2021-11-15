class Database {
  
  private _url;
  private _port;
  private _username;
  private _password;
  private _tables;

  constructor(url, port, username, password) {
    
    this._url = url;
    this._port = port;
    this._username = username;
    this._password = password;
    this._tables = [];
  }

  public createNewTable(table) {
    this._tables.push(table);
  }

  get url() {
    return this._url;
  }

  get port() {
    return this._port;
  }
}

const db = new Database('123', 2345, 'AAA', '122');