import ProjectHome from "../common/project/projectHome/index.jsx";
import TaskList from "../common/project/taskList/index.jsx"
import ArticleList from "../common/project/articleList/index.jsx";

const rout = [
    {
        path: '/project/home',
        component: ProjectHome
    },
    {
        path: '/project/taskList',
        component: TaskList
    },
    // {
    //     path: '/project/articleList',
    //     component: ArticleList
    // }
]
export default rout