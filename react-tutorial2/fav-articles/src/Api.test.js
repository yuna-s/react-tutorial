import server from '../server';
import Api from '../src/Api';

const port = server.listen(0).address().port;
const api = new Api(`http://127.0.0.1:${port}`);

//ここがよくわからない
describe('Api', function() {
    test('listArticles', async() => {
        //awaitを先頭に置くと、この文の処理が終わるまで、次の実行を行わないようにできる
        //同期処理
        const result = await api.listArticles();
        expect(result.articles.length).toEqual(10);
    });
});