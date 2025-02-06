import * as SQLite from '';

const db = SQLite.openDatabase('learningBuddy.db');

export const createTable = () => {
  db.transaction(tx => {
    tx.executeSql(
      'CREATE TABLE IF NOT EXISTS progress (id INTEGER PRIMARY KEY AUTOINCREMENT, quiz TEXT, score INT);'
    );
  });
};

export const saveProgress = (quiz, score) => {
  db.transaction(tx => {
    tx.executeSql('INSERT INTO progress (quiz, score) VALUES (?, ?)', [quiz, score]);
  });
};

export const getProgress = callback => {
  db.transaction(tx => {
    tx.executeSql('SELECT * FROM progress', [], (_, { rows }) => {
      callback(rows._array);
    });
  });
};
expo-sqlite