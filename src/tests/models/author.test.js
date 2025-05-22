import {describe, expect, it, jest, afterEach} from "@jest/globals"
import AuthorController from "../../controllers/authorController.js"
import * as AuthorModule from "../../models/Author.js"

jest.mock("../../models/Author.js")

describe("Testando o Author Controller",() =>{

    const mockRequired = (data = {}, params = {}) => ({ body: data, params});
    const mockResponse = () => {
        const res = {};
        res.status = jest.fn().mockReturnValue(res);
        res.json = jest.fn().mockReturnValue(res);
        return res;
    }
    afterEach(() => {
        jest.clearAllMocks();
    })

    it("Develistar todos os nomes", async () => {
        const authorMock = [
            {name: "name",
            email: "Email.com"},
            {name: "name3",
            email: "Email3.com"}
        ]
        
    AuthorModule.author.find = jest.fn().mockResolvedValue(authorMock);

    const res = mockResponse ();

    const req = mockRequired();
    
    const authorController = new AuthorController();
    await authorController.getAllAuthor(req,res);

    expect(AuthorModule.author.find).toHaveBeenCalledTimes(1);
    expect(res.status).toHaveBeenCalledWith(200);
    expect(res.json).toHaveBeenCalledWith(authorMock);
    
    })
}

)