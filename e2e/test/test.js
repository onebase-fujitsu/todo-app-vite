// test.ts
import { Selector } from 'testcafe';

fixture `test target`
    .page `http://localhost:5173`;

test('タスク一覧画面を見ることができる', async t => {
    await t
        .expect(Selector('body').withText('Todo App').exists).ok()
        .expect(Selector('a').withText("Home").exists).ok()
        .expect(Selector('a').withText("New Task").exists).ok()
})

test('タスクを作成することができる', async t => {
    await t
        .click(Selector('a').withText("New Task"))
        .expect(Selector('input').exists).ok()
        .expect(Selector('button').withText("Send").exists).ok()
        .typeText(Selector('input'), 'e2e test title', {replace: true})
        .click(Selector('button').withText("Send"))
        .click(Selector('a').withText("Home"))
        .expect(Selector('ul').child().nth(-1).textContent).contains('e2e test title')
})