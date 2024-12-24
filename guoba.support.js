import path from 'path'
import fs from 'fs'
import yaml from 'yaml'
import lodash from 'lodash'
import { PluginPath } from './components/index.js'
function getconfig (name) {
  let cfgyaml = `${PluginPath}/config/${name}.yaml`
  const configData = fs.readFileSync(cfgyaml, 'utf8')
  let config = yaml.parse(configData)
  return { config }
}
// 支持锅巴
export function supportGuoba () {
  return {
    // 插件信息，将会显示在前端页面
    // 如果你的插件没有在插件库里，那么需要填上补充信息
    // 如果存在的话，那么填不填就无所谓了，填了就以你的信息为准
    pluginInfo: {
      // name 为插件唯一标识，尽量不要与其他插件重复
      name: 'luoluo-plugin',
      // title 为显示名称
      title: '落落插件',
      // 插件描述
      description: '喵喵喵',
      // 作者可以为字符串也可以为数组，当有多个作者时建议使用数组
      author: ['@叶落落'],
      // 作者主页地址。若author为数组，则authorLink也需要为数组，且需要与author一一对应
      authorLink: ['https://gitee.com/yll0614'],
      // 仓库地址
      link: 'https://gitee.com/yll0614/luoluo-plugin',
      isV3: true,
      isV2: false,
      // 是否显示在左侧菜单，可选值：auto、true、false
      // 当为 auto 时，如果配置项大于等于 3 个，则显示在左侧菜单
      showInMenu: 'auto',
      // 显示图标，此为个性化配置
      // 图标可在 https://icon-sets.iconify.design 这里进行搜索
      icon: 'noto-v1:grinning-face-with-sweat',
      // 图标颜色，例：#FF0000 或 rgb(255, 0, 0)
      iconColor: '#d19f56',
      // 如果想要显示成图片，也可以填写图标路径（绝对路径），可以使用静图和动图
      iconPath: path.join(PluginPath, 'resources/icon.gif')
    },
    // 配置项信息
    configInfo: {
      // 配置项 schemas
      schemas: [
        {
          field: 'yiyan',
          label: '一言',
          helpMessage: '',
          bottomHelpMessage: '',
          component: 'Switch',
          componentProps: {}
        },
        {
          field: 'KFC',
          label: '疯狂星期四',
          helpMessage: '',
          bottomHelpMessage: '',
          component: 'Switch',
          componentProps: {}
        },
        {
          field: 'wyyrp',
          label: '网易云热评',
          helpMessage: '',
          bottomHelpMessage: '',
          component: 'Switch',
          componentProps: {}
        },
        {
          field: 'tianqi',
          label: '天气查询',
          helpMessage: '',
          bottomHelpMessage: '',
          component: 'Switch',
          componentProps: {}
        },
        {
          field: 'geci',
          label: '歌词类',
          helpMessage: '',
          bottomHelpMessage: '',
          component: 'Switch',
          componentProps: {}
        },
        {
          field: 'changya',
          label: '唱鸭',
          helpMessage: '',
          bottomHelpMessage: '',
          component: 'Switch',
          componentProps: {}
        },
        {
          field: 'sjbqb',
          label: '随机表情包',
          helpMessage: '',
          bottomHelpMessage: '',
          component: 'Switch',
          componentProps: {}
        },
        {
          field: 'gsdw',
          label: '攻受短文',
          helpMessage: '',
          bottomHelpMessage: '',
          component: 'Switch',
          componentProps: {}
        },
        {
          field: 'ping',
          label: 'ping 功能',
          helpMessage: '',
          bottomHelpMessage: '',
          component: 'Switch',
          componentProps: {}
        },
        {
          field: 'shuianwo',
          label: '谁艾特我',
          helpMessage: '',
          bottomHelpMessage: '',
          component: 'Switch',
          componentProps: {}
        },
        {
          field: 'ljfl',
          label: '垃圾分类',
          helpMessage: '',
          bottomHelpMessage: '',
          component: 'Switch',
          componentProps: {}
        },
        {
          field: 'sjdmt',
          label: '随机动漫图',
          helpMessage: '',
          bottomHelpMessage: '',
          component: 'Switch',
          componentProps: {}
        },
        {
          field: 'bilihot',
          label: '哔哩哔哩热搜榜',
          helpMessage: '',
          bottomHelpMessage: '',
          component: 'Switch',
          componentProps: {}
        },
        {
          field: 'zhihuhot',
          label: '知乎热搜榜',
          helpMessage: '',
          bottomHelpMessage: '',
          component: 'Switch',
          componentProps: {}
        },
        {
          field: 'douyinhot',
          label: '抖音热搜榜',
          helpMessage: '',
          bottomHelpMessage: '',
          component: 'Switch',
          componentProps: {}
        },
        {
          field: 'toutiaohot',
          label: '今日头条热搜榜',
          helpMessage: '',
          bottomHelpMessage: '',
          component: 'Switch',
          componentProps: {}
        },
        {
          field: 'toutiaohotnew',
          label: '今日头条热点新闻',
          helpMessage: '',
          bottomHelpMessage: '',
          component: 'Switch',
          componentProps: {}
        },
        {
          field: 'qqtx',
          label: '头像',
          helpMessage: '',
          bottomHelpMessage: '',
          component: 'Switch',
          componentProps: {}
        },
        {
          field: 'qqqtx',
          label: '群头像',
          helpMessage: '',
          bottomHelpMessage: '',
          component: 'Switch',
          componentProps: {}
        },
        {
          field: 'jupai',
          label: '举牌',
          helpMessage: '',
          bottomHelpMessage: '',
          component: 'Switch',
          componentProps: {}
        },
        {
          field: 'wyjt',
          label: '网页截图',
          helpMessage: '',
          bottomHelpMessage: '',
          component: 'Switch',
          componentProps: {}
        },
        {
          field: 'bilitv',
          label: '哔哩哔哩解析',
          helpMessage: '',
          bottomHelpMessage: '',
          component: 'Switch',
          componentProps: {}
        },
        {
          field: 'UpdateTask',
          label: '更新推送',
          helpMessage: '',
          bottomHelpMessage: '',
          component: 'Switch',
          componentProps: {}
        }
      ],
      async getConfigData () {
        let { config } = getconfig('config')
        return config
      },
      async setConfigData (data, { Result }) {
        const configFilePath = path.join(PluginPath, 'config', 'config.yaml')
        let config = {}
        if (fs.existsSync(configFilePath)) {
          const configContent = fs.readFileSync(configFilePath, 'utf8')
          config = yaml.parse(configContent) || {}
        }
        for (const [keyPath, value] of Object.entries(data)) {
          lodash.set(config, keyPath, value)
        }
        const updatedConfigYAML = yaml.stringify(config)
        fs.writeFileSync(configFilePath, updatedConfigYAML, 'utf8')
        logger.mark('[luoluo插件]配置文件更新')
        return Result.ok({}, '保存成功~')
      }
    }
  }
}
