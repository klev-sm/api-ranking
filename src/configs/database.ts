import { MongoClient, Db } from "mongodb";

class DatabaseSingleton {
    static dbInstance: Db | undefined;

    static async getInstance() {
        if (!this.dbInstance) {
            this.dbInstance = await new DatabaseSingleton().connect();
        }
        return this.dbInstance;
    }

    async connect() {
        try {
            const url: string = process.env.MONGO_URI as string;
            const client = new MongoClient(url);
            const connection = await client.connect();
            console.log(
                "Conexão com o banco de dados estabelecida com sucesso."
            );
            return connection.db();
        } catch (error) {
            console.log(
                "Erro ao tentar conexão com o banco de dados: " + error
            );
        }
    }
}

export { DatabaseSingleton };
