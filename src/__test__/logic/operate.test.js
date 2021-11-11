import operate from "../../logic/operate";

test("+ operation should add two numbers", ()=>{
    let total = "100";
    let next = "100";
    let operation = "+";
    expect(operate(total, next, operation)).toBe("200")
})