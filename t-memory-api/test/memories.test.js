const memoryModel = require ("../src/models/memoryModel")

describe("Get model test", () => {
const memory = new memoryModel({
    "title": "memória teste",
    "date": "2022-07-01T17:42:09.375Z",
    "description": "memória implantada para testes",
    "category": "testes",
    "imgURL": "https://imagem.com.br",
    "timelineID":"62bf30a95bd3be0daadb34f3",
    "archived": true

});
it("Deve chamar o Schema e retornar o nome correto da memória", ()=>{
    expect(memory.title).toBe("memória teste");

});

it("Deve chamar o Schema e retornar a data correta da memória", () => {
    expect(JSON.stringify(memory.date).substring(1,(JSON.stringify(memory.date)).length - 1)).toBe("2022-07-01T17:42:09.375Z")
});
it("Deve chamar o Schema e retornar a descrição correta da memória", () =>{
    expect(memory.description).toBe("memória implantada para testes")
});
it("Deve chamar o schema e retornar a categoria correta da memória", () => {
    expect(memory.category).toStrictEqual(["testes"])
});
it("Deve chamar o Schema e retornar a URL correta da memória", () => {
    expect(memory.imgURL).toBe("https://imagem.com.br")
});
it ("Deve chamar o Schema e retornar o Id de timeline correto da memória", () =>{
    expect(JSON.stringify(memory.timelineID).substring(1, ((JSON.stringify(memory.timelineID)).length-1))).toBe("62bf30a95bd3be0daadb34f3")
});
it("Deve chamar o schema e retornar o valor arquivado como verdadeiro", () => {
    expect(memory.archived).toBe(true);
});
})

describe("CREATE route test", () =>{
            const memory = new memoryModel({
                "title": "memória teste",
                "date": "2022-07-01T17:42:09.375Z",
                "description": "memória implantada para testes",
                "category": "testes",
                "imgURL": "https://imagem.com.br",
                "timelineID":"62bf30a95bd3be0daadb34f3",
                "archived": true
            
            });
            it("Deve salvar no banco de dados a nova memória", () => {
                memory.save().then((dados) => {
                    expect(dados.title).toBe("memória teste")
});
    
})
})


    describe("UPDATE route test", () => {
        it("Deve editar o título e salvar no banco de dados a nova memória", () => {
    
        const memory = new memoryModel({
            "title": "memória teste",
            "date": "2022-07-01T17:42:09.375Z",
            "description": "uma memória implantada para testes",
            "category": "testes",
            "imgURL": "https://www.imagem.com",
            "timelineID": "62bf30a95bd3be0daadb34f3",
            "archived": true
        });
        memory.title = "nova memória teste"
        memory.save().then((dados) => {
            expect(dados.title).toBe("nova memória teste")
        })
    })
    })
    describe("DELETE route test", () => {
        it("Deve excluir uma memória", () => {
            const memory = new memoryModel({
                "title": "memória teste",
                "date": "2022-07-01T17:42:09.375Z",
                "description": "uma memória implantada para testes",
                "category": "testes",
                "imgURL": "https://www.imagem.com",
                "timelineID": "62bf30a95bd3be0daadb34f3",
                "archived": true
        })
        memory.save().then((dados) => {
            //dados.title = "memória teste"
            memory.delete().then((novosDados) => {
                expect(dados.title).toBe(null);
            })
        })
    })
    })