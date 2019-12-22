import Helper from "./helper";

const helper = new Helper();

// checking object properties
function prepareData() {
    const data = helper.getData();
    const result = [];
    for (let item in data) {
        result.push(item);
    }
    return result;
}

test("JSON have array name: line", () => {
    expect(prepareData()).toContain("line");
});

test("JSON have array name: line_second", () => {
    expect(prepareData()).toContain("line_second");
});

test("JSON have array name: rectangle", () => {
    expect(prepareData()).toContain("rectangle");
});

// check return value 
test("function addClass return className block", () => {
    expect(helper.addClass()).toBe("block");
});

// check return value 
test("function checkValueAndInsert return &times;", () => {
    const strToDecode = "&times;";
    const parser = new DOMParser();
    const str = parser.parseFromString(`<!doctype html><body>${strToDecode}`, "text/html").body.textContent;
    expect(helper.checkValueAndInsert(1)).toBe(str);
});

// getdata check
test("function getData return data", () => {
    expect(helper.getData()).not.toBe(undefined);
});


