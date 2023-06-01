export interface ItemDataType {
    label: string,
    key: string,
    url?: string,
    type: number, //1: 最外层一级 ， 2: 子集
    fatherkey?: string , //父级的key
}