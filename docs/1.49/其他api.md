# japi 

额外赠送的api

```jass

//获取指定坐标地形高度   异步弹坑可能导致玩家地面高度是异步的 
function GetTerrainZ takes real x, real y returns real 


//判断地形碰撞状态   前面4个参数是矩形， 后mark可以叠加判断地形碰撞状态  比如    0x2 + 0x8 + 0x20
//mark 可通行地面		0x2
//mark 空中单位可通行	0x4
//mark 可建造地面		0x8
//mark 不是荒芜之地		0x20
//mark 可通行海面		0x40
//mark 两栖单位可通行	0x80
function GetTerrainMark takes real minx, real miny, real maxx, real maxy, integer mark returns boolean 


```

