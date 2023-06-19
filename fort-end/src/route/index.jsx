import ProjectHome from "../common/project/projectHome/index.jsx";
import TaskList from "../common/project/taskList/index.jsx";
import ArticleList from "../common/project/articleList/index.jsx";
import WriteDocument from "../common/project/writeDocument/index.jsx";
import Drag from "../common/project/drag/index.tsx";
import Chat from "../common/project/chat/index.jsx";
import UserMessage from "../common/project/userMessage/index.jsx";
import Earningedtail from "../common/project/earnings/earningedtail.jsx";

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
    },
    {
        path: '/project/drag',
        component: Drag
    },
    {
        path: '/project/chat',
        component: Chat 
    },
    {
        path: '/project/userMessage',
        component: UserMessage  
    },
    {
        path: '/project/earning',
        component: Earningedtail  
    }
]

export default rout