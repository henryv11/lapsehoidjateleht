module.exports = {
    publicPath: "",
    pages: {
        index: {
            entry: "src/pages/main/main.js",
            template: "public/index.html",
            title: "Lapsehoidjateleht",
        },
        dashboard: {
            entry: "src/pages/dashboard/main.js",
            template: "public/index.html",
            title: "Omaniku dashboard",
        }
    }
}