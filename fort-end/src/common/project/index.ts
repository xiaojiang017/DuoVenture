export interface ItemDataType {
    label: string,
    key: string,
    url?: string,
    type: number, //1: 最外层一级 ， 2: 子集
    fatherkey?: string , //父级的key
}

export const ptstatus = {
    1: "未开始",
    2: "开发中",
    3: "待测试",
    4: "测试中",
    5: "已完成"
}

export const ptstatuscolor = {
    1: "magenta",
    2: "red",
    3: "volcano",
    4: "orange",
    5: "gold"
}