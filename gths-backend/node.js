const { MongoClient } = require('mongodb');

async function main() {
    const uri = "mongodb://localhost:27017";
    const client = new MongoClient(uri);

    try {
        await client.connect();

        // 创建或切换到数据库
        const database = client.db('myNewDatabase');

        // 创建或切换到集合并插入文档
        const collection = database.collection('myCollection');
        const result = await collection.insertOne({ name: 'test' });

        console.log(`New document inserted with the following id: ${result.insertedId}`);
    } finally {
        await client.close();
    }
}

main().catch(console.error);
