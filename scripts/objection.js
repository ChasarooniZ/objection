import { IMAGES, MODULE_ID, MS_TO_S } from "./const.js";
import { getCharacterArt, getOffset, getScale, getSetting } from "./helpers.js";

export function objection(
  cfg = {
    benchDuration: getSetting("duration.bench"),
    wordDuration: getSetting("duration.word"),
    characterArt: getCharacterArt(),
    sfx: getSetting("sfx"),
    volume: getSetting("volume"),
  }
) {
  const art = {
    char: getSetting("default-art"),
    objection: IMAGES.TEXT.OBJECTION,
    bench: IMAGES.BENCH,
  };

  const config = {
    offset: getOffset(),
    scale: getScale(),
  };

  const duration = cfg.benchDuration * MS_TO_S;
  const objection = cfg.wordDuration * MS_TO_S;

  const loops = {
    objection: { values: [0, 3, 0], duration: 50, ease: "easeOutQuint" },
  };

  new Sequence({ name: MODULE_ID, softFail: true })
    //Objection
    .effect()
    .file(art.objection)
    .fadeIn(objection / 2, { ease: "easeOutQuint" })
    //.fadeOut(500, {ease: "easeOutQuint"})
    .spriteAnchor({ x: 0, y: 1 })
    .screenSpace()
    .screenSpaceAboveUI()
    .screenSpaceAnchor({ x: 0, y: 1 })
    .screenSpaceScale({ fitY: true, ratioX: true })
    .loopProperty("sprite", "position.x", loops.objection)
    .loopProperty("sprite", "position.y", loops.objection)
    .scale(1.25 / 3)
    .duration(objection)
    .zIndex(4)

    //bench
    .effect()
    .file(art.bench)
    .spriteAnchor({ x: 0, y: 1 })
    .screenSpace()
    .screenSpaceAboveUI()
    .screenSpaceAnchor({ x: 0, y: 1 })
    .screenSpaceScale({ fitY: true, ratioX: true })
    .scale(1 / 10)
    .duration(duration + objection)
    //.delay(objection - 100)
    .zIndex(3)

    // Token
    .effect()
    .file(cfg.characterArt ?? art.char)
    .spriteAnchor({ x: 0 + config.offset.x, y: 0.8 + config.offset.y })
    .screenSpace()
    .screenSpaceAboveUI()
    .screenSpaceAnchor({ x: 0, y: 1 })
    .screenSpaceScale({ fitY: true, ratioX: true })
    .scale(config.scale / 2)
    .duration(duration + objection)
    //.delay(objection - 100)
    .zIndex(2)

    //SFX
    .sound()
    .file(cfg.sfx)
    .volume(cfg.volume)

    .play({ preload: true });
}
