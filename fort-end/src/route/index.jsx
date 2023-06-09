import ProjectHome from "../common/project/projectHome/index.jsx";
import TaskList from "../common/project/taskList/index.jsx";
import ArticleList from "../common/project/articleList/index.jsx";
import WriteDocument from "../common/project/writeDocument/index.jsx";

const rout = [
    {
        path: '/project/home',
        component: ProjectHome
    },
    {
        path: '/project/taskList',
        component: TaskList
    },
    {
        path: '/project/articleList',
        component: ArticleList
    },
    {
        path: '/project/writeDocument',
        component: WriteDocument 
    }
]
export default rout