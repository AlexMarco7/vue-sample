import http from "../../common/api/http"

export default {
    listProducts(filter, limit, offset) {
        return new Promise((resolve, reject) => {

            let mock = [
                { desc: "xpto", code: "1", category: "xxxx", interfaceAR: "yyyy" },
                { desc: "xpto", code: "2", category: "xxxx", interfaceAR: "yyyy" },
                { desc: "xpto", code: "3", category: "xxxx", interfaceAR: "yyyy" },
                { desc: "test", code: "4", category: "aaaa", interfaceAR: "yyyy" },
                { desc: "xpto", code: "5", category: "xxxx", interfaceAR: "yyyy" },
                { desc: "xpto", code: "6", category: "xxxx", interfaceAR: "yyyy" },
                { desc: "xpto", code: "7", category: "xxxx", interfaceAR: "yyyy" },
                { desc: "xpto", code: "8", category: "xxxx", interfaceAR: "bbbb" },
                { desc: "xpto", code: "9", category: "xxxx", interfaceAR: "bbbb" },
                { desc: "xpto", code: "10", category: "xxxx", interfaceAR: "bbbb" },
                { desc: "xpto", code: "11", category: "xxxx", interfaceAR: "yyyy" },
                { desc: "xpto", code: "12", category: "xxxx", interfaceAR: "yyyy" },
                { desc: "xpto", code: "13", category: "xxxx", interfaceAR: "yyyy" },
                { desc: "test", code: "14", category: "aaaa", interfaceAR: "yyyy" },
                { desc: "xpto", code: "15", category: "xxxx", interfaceAR: "yyyy" },
                { desc: "xpto", code: "16", category: "xxxx", interfaceAR: "yyyy" },
                { desc: "xpto", code: "17", category: "xxxx", interfaceAR: "yyyy" },
                { desc: "xpto", code: "18", category: "xxxx", interfaceAR: "bbbb" },
                { desc: "xpto", code: "19", category: "xxxx", interfaceAR: "bbbb" },
                { desc: "xpto", code: "20", category: "xxxx", interfaceAR: "bbbb" },
                { desc: "xpto", code: "21", category: "xxxx", interfaceAR: "yyyy" },
                { desc: "xpto", code: "22", category: "xxxx", interfaceAR: "yyyy" },
                { desc: "xpto", code: "23", category: "xxxx", interfaceAR: "yyyy" },
                { desc: "test", code: "24", category: "aaaa", interfaceAR: "yyyy" },
                { desc: "xpto", code: "25", category: "xxxx", interfaceAR: "yyyy" },
                { desc: "xpto", code: "26", category: "xxxx", interfaceAR: "yyyy" },
                { desc: "xpto", code: "27", category: "xxxx", interfaceAR: "yyyy" },
                { desc: "xpto", code: "28", category: "xxxx", interfaceAR: "bbbb" },
                { desc: "xpto", code: "29", category: "xxxx", interfaceAR: "bbbb" },
                { desc: "xpto", code: "30", category: "xxxx", interfaceAR: "bbbb" }
            ].filter((p) => {
                return p.desc.toLocaleLowerCase().match(".*" + filter.text+".*") ||
                    p.code.toLocaleLowerCase().match(".*" + filter.text+".*") ||
                    p.category.toLocaleLowerCase().match(".*" + filter.text+".*") ||
                    p.interfaceAR.toLocaleLowerCase().match(".*" + filter.text+".*");
            })

            resolve(
                {
                    total: mock.length,
                    list: mock.slice(offset, offset+limit)
                }
            )
        })
    }
};