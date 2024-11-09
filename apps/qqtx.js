import fs from "fs/promises";
import { Plugin_Path } from "../components/index.js";
import YAML from "yaml";

let CONFIG_YAML = YAML.parse(
  await fs.readFile(`${Plugin_Path}/config/config.yaml`, "utf8"),
);

export class qqtx extends plugin {
  constructor() {
    super({
      name: "获取QQ头像",
      dsc: "qqtx",
      event: "message",
      priority: 5000,
      rule: [
        {
          reg: "^[#/]?头像(d+)$",
          fnc: "qqtx",
        },
      ],
    });
  }

  async qqtx(e) {
    if (CONFIG_YAML.qqtx == false) {
      logger.info("[luoluo插件]QQ头像已关闭");
      return false;
    } else
      e.reply(
        e.msg.match(/(\d+)/)
          ? segment.image(
              Bot.pickUser(Number(e.msg.match(/(\d+)/)[1])).getAvatarUrl(),
            )
          : e.message
              .filtter((i) => i.type == "at")
              .map((i) => segment.image(Bot.pickUser(i.qq).getAvatarUrl())) ||
              segment.image(Bot.pickUser(e.user_id).getAvatarUrl()),
      );
    return true;
  }
}
