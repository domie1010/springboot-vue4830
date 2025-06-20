import Vue from 'vue';
//配置路由
import VueRouter from 'vue-router'
Vue.use(VueRouter);
    // 解决多次点击左侧菜单报错问题
    const VueRouterPush = VueRouter.prototype.push
    VueRouter.prototype.push = function push (to) {
    return VueRouterPush.call(this, to).catch(err => err)
    }
//1.创建组件
import Index from '@/views/index'
import Home from '@/views/home'
import Login from '@/views/login'
import NotFound from '@/views/404'
import UpdatePassword from '@/views/update-password'
import pay from '@/views/pay'
import register from '@/views/register'
import center from '@/views/center'
import beifen from '@/views/modules/databaseBackup/beifen'
import huanyuan from '@/views/modules/databaseBackup/huanyuan'

     import users from '@/views/modules/users/list'
    import dictionary from '@/views/modules/dictionary/list'
    import gonggao from '@/views/modules/gonggao/list'
    import jiaoxuezhiliang from '@/views/modules/jiaoxuezhiliang/list'
    import keyan from '@/views/modules/keyan/list'
    import laoshi from '@/views/modules/laoshi/list'
    import laoshikaoqin from '@/views/modules/laoshikaoqin/list'
    import laoshiqingjia from '@/views/modules/laoshiqingjia/list'
    import tiaoke from '@/views/modules/tiaoke/list'
    import xinzi from '@/views/modules/xinzi/list'
    import dictionaryGonggao from '@/views/modules/dictionaryGonggao/list'
    import dictionaryJiaoxuezhiliang from '@/views/modules/dictionaryJiaoxuezhiliang/list'
    import dictionaryJinyong from '@/views/modules/dictionaryJinyong/list'
    import dictionaryKeyan from '@/views/modules/dictionaryKeyan/list'
    import dictionaryLaoshikaoqin from '@/views/modules/dictionaryLaoshikaoqin/list'
    import dictionaryLaoshiqingjia from '@/views/modules/dictionaryLaoshiqingjia/list'
    import dictionaryLaoshiqingjiaYesno from '@/views/modules/dictionaryLaoshiqingjiaYesno/list'
    import dictionarySex from '@/views/modules/dictionarySex/list'
    import dictionaryTiaoke from '@/views/modules/dictionaryTiaoke/list'
    import dictionaryTiaokeYesno from '@/views/modules/dictionaryTiaokeYesno/list'





//2.配置路由   注意：名字
const routes = [{
    path: '/index',
    name: '首页',
    component: Index,
    children: [{
      // 这里不设置值，是把main作为默认页面
      path: '/',
      name: '首页',
      component: Home,
      meta: {icon:'', title:'center'}
    }, {
      path: '/updatePassword',
      name: '修改密码',
      component: UpdatePassword,
      meta: {icon:'', title:'updatePassword'}
    }, {
      path: '/pay',
      name: '支付',
      component: pay,
      meta: {icon:'', title:'pay'}
    }, {
      path: '/center',
      name: '个人信息',
      component: center,
      meta: {icon:'', title:'center'}
    }, {
        path: '/huanyuan',
        name: '数据还原',
        component: huanyuan
    }, {
        path: '/beifen',
        name: '数据备份',
        component: beifen
    }, {
        path: '/users',
        name: '管理信息',
        component: users
    }
    ,{
        path: '/dictionaryGonggao',
        name: '公告类型',
        component: dictionaryGonggao
    }
    ,{
        path: '/dictionaryJiaoxuezhiliang',
        name: '考核结果',
        component: dictionaryJiaoxuezhiliang
    }
    ,{
        path: '/dictionaryJinyong',
        name: '账户状态',
        component: dictionaryJinyong
    }
    ,{
        path: '/dictionaryKeyan',
        name: '科研类型',
        component: dictionaryKeyan
    }
    ,{
        path: '/dictionaryLaoshikaoqin',
        name: '考勤结果',
        component: dictionaryLaoshikaoqin
    }
    ,{
        path: '/dictionaryLaoshiqingjia',
        name: '请假类型',
        component: dictionaryLaoshiqingjia
    }
    ,{
        path: '/dictionaryLaoshiqingjiaYesno',
        name: '申请状态',
        component: dictionaryLaoshiqingjiaYesno
    }
    ,{
        path: '/dictionarySex',
        name: '性别类型',
        component: dictionarySex
    }
    ,{
        path: '/dictionaryTiaoke',
        name: '调课申请类型',
        component: dictionaryTiaoke
    }
    ,{
        path: '/dictionaryTiaokeYesno',
        name: '申请状态',
        component: dictionaryTiaokeYesno
    }


    ,{
        path: '/dictionary',
        name: '字典表',
        component: dictionary
      }
    ,{
        path: '/gonggao',
        name: '公告信息',
        component: gonggao
      }
    ,{
        path: '/jiaoxuezhiliang',
        name: '教学质量',
        component: jiaoxuezhiliang
      }
    ,{
        path: '/keyan',
        name: '科研',
        component: keyan
      }
    ,{
        path: '/laoshi',
        name: '老师',
        component: laoshi
      }
    ,{
        path: '/laoshikaoqin',
        name: '老师考勤',
        component: laoshikaoqin
      }
    ,{
        path: '/laoshiqingjia',
        name: '老师请假',
        component: laoshiqingjia
      }
    ,{
        path: '/tiaoke',
        name: '调课申请',
        component: tiaoke
      }
    ,{
        path: '/xinzi',
        name: '薪资',
        component: xinzi
      }


    ]
  },
  {
    path: '/login',
    name: 'login',
    component: Login,
    meta: {icon:'', title:'login'}
  },
  {
    path: '/register',
    name: 'register',
    component: register,
    meta: {icon:'', title:'register'}
  },
  {
    path: '/',
    name: '首页',
    redirect: '/index'
  }, /*默认跳转路由*/
  {
    path: '*',
    component: NotFound
  }
]
//3.实例化VueRouter  注意：名字
const router = new VueRouter({
  mode: 'hash',
  /*hash模式改为history*/
  routes // （缩写）相当于 routes: routes
})

export default router;
