const index = require("./index")
// @ponicode
describe("index.default.configure", () => {
    test("0", () => {
        let callFunction = () => {
            index.default.configure("arizona_extend.wav")
        }
    
        expect(callFunction).not.toThrow()
    })

    test("1", () => {
        let callFunction = () => {
            index.default.configure("png.mpg4")
        }
    
        expect(callFunction).not.toThrow()
    })

    test("2", () => {
        let callFunction = () => {
            index.default.configure("bus_account.mpe")
        }
    
        expect(callFunction).not.toThrow()
    })

    test("3", () => {
        let callFunction = () => {
            index.default.configure("XCode")
        }
    
        expect(callFunction).not.toThrow()
    })

    test("4", () => {
        let callFunction = () => {
            index.default.configure("Safari")
        }
    
        expect(callFunction).not.toThrow()
    })

    test("5", () => {
        let callFunction = () => {
            index.default.configure(undefined)
        }
    
        expect(callFunction).not.toThrow()
    })
})

// @ponicode
describe("index.default.create", () => {
    test("0", () => {
        let callFunction = () => {
            index.default.create("user-name", false)
        }
    
        expect(callFunction).not.toThrow()
    })

    test("1", () => {
        let callFunction = () => {
            index.default.create("user123", true)
        }
    
        expect(callFunction).not.toThrow()
    })

    test("2", () => {
        let callFunction = () => {
            index.default.create(123, true)
        }
    
        expect(callFunction).not.toThrow()
    })

    test("3", () => {
        let callFunction = () => {
            index.default.create(123, false)
        }
    
        expect(callFunction).not.toThrow()
    })

    test("4", () => {
        let callFunction = () => {
            index.default.create("user name", true)
        }
    
        expect(callFunction).not.toThrow()
    })

    test("5", () => {
        let callFunction = () => {
            index.default.create(undefined, undefined)
        }
    
        expect(callFunction).not.toThrow()
    })
})
