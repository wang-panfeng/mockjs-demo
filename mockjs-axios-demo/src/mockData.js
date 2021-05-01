import Mock from 'mockjs';
import api from './apis';
//mockjs要在主入口直接引入使用，否则不执行;你一直不生效的问题估计就是定义了但是没有引入去执行mock数据生成逻辑
//在main.js 引入
Mock.mock(api.USER, {
    'dataSource|5': [{
        'key|+1': 1,
        'mockTitle|1': ['哑巴', 'Butter-fly', '肆无忌惮', '摩天大楼', '初学者'],
        'mockContent|1': ['你翻译不了我的声响', '数码宝贝主题曲', '摩天大楼太稀有', '像海浪撞破了山丘'],
        'mockAction|1': ['下载', '试听', '喜欢']
    }]
});

Mock.mock(api.GOODS, {
    "responseData|5": [{
        "id|+1": 0,
        "name|1": [
            "三星",
            "小米",
            "苹果",
            "华为",
            "Nokia"
        ],
        "des": "@string",
        img: "@dataimage"
    }]
});