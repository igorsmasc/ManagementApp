import * as SQLite from 'expo-sqlite';

const db = SQLite.openDatabase('budget.db');

export const init = () => {
    const promise = new Promise((resolve, reject) => {
        db.transaction((tx) => {
            tx.executeSql(
                'CREATE TABLE IF NOT EXISTS budget (id INTEGER PRIMARY KEY NOT NULL, description TEXT NOT NULL, value REAL NOT NULL, date TEXT NOT NULL, category TEXT NOT NULL, type TEXT NOT NULL);',
                [],
                () => {
                    resolve();
                },
                (_, err) => {
                    reject(err);
                },
            );
        });
    });
    return promise;
};

export const insertBudget = (description, value, date, category, type) => {
    const promise = new Promise((resolve, reject) => {
        db.transaction((tx) => {
            tx.executeSql(
                'INSERT INTO budget (description, value, date, category, type) VALUES (?, ?, ?, ?, ?);',
                [description, value, date, category, type],
                (_, result) => {
                    resolve(result);
                },
                (_, err) => {
                    reject(err);
                },
            );
        });
    });
    return promise;
};

export const fetchBudget = () => {
    const promise = new Promise((resolve, reject) => {
        db.transaction((tx) => {
            tx.executeSql(
                'SELECT * FROM budget',
                [],
                (_, result) => {
                    resolve(result);
                },
                (_, err) => {
                    reject(err);
                },
            );
        });
    });
    return promise;
};
