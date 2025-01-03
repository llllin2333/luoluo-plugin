import fetch from 'node-fetch'
import fs from 'fs'
import { PluginPath } from '../components/index.js'
import YAML from 'yaml'

let CONFIG_YAML = YAML.parse(
  fs.readFileSync(`${PluginPath}/config/config.yaml`, 'utf8')
)

export class yiyan extends plugin {
  constructor () {
    super({
      name: '一言',
      dsc: 'yiyan',
      event: 'message',
      priority: 5000,
      rule: [
        {
          reg: '^[#/]?一言',
          fnc: 'yiyan'
        }
      ]
    })
  }

  async yiyan (e) {
    if (!CONFIG_YAML.yiyan) {
      return logger.info('[luoluo插件]一言已关闭')
    }
    let data = await fs.readFileSync(`${PluginPath}/config/AllAPI.json`)
    const API = JSON.parse(data)
    let apiUrl = API.api2.url + '?encode=text'
    let response = await fetch(apiUrl)
    let text = await response.text()
    e.reply(text, true)
    return true
  }
}
