const base = {
    get() {
        return {
            url : "http://localhost:8080/jiaoshixinchou/",
            name: "jiaoshixinchou",
            // 退出到首页链接
            indexUrl: 'http://localhost:8080/jiaoshixinchou/front/index.html'
        };
    },
    getProjectName(){
        return {
            projectName: "教师薪酬管理系统"
        } 
    }
}
export default base
