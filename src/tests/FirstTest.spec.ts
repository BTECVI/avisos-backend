import cool from '@routes/woping'

test('Debe contener Mundo', ()=>{
    expect(cool()).toMatch(/Mundo/);
})