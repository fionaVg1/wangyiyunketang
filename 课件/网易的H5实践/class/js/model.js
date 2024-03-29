import dom from "./dom.js";
import util from "./util.js";
import Music from "./music.js";
import template from "./template.js";

/**
 * @class
 * @classdesc 渲染模型类
 */
class Model {
  constructor({ name, game, vx = 0, vy = 0, ax = 0, ay = 0 }) {
    this.vx = vx;
    this.vy = vy;
    this.ax = ax;
    this.ay = ay;
    this.el = null;
    this.width = 0;
    this.height = 0;
    this.name = name;
    this.game = game;
  }
  /**
   * 渲染模型
   * @param {String} tpl 模型字符串模板
   */
  render(tpl) {
    let el = dom.create(tpl);
    dom.insert(el);
    this.setProps(el);
  }
  /**
   * 设置 DOM 对象属性
   * @param {Element} el 待设置的 DOM 对象
   */
  setProps(el) {
    // 基础属性设置
    this.el = el;
    this.width = el._width;
    this.height = el._height;
    util.instancePointTransform(this, "x");
    util.instancePointTransform(this, "y");
  }
  // TODO: 添加模型可选值说明
  /**
   * 设置模型爆照效果
   * @param {enemyType} type 爆照效果类型 可选值：
   * 
   */
  explosion(type) {
    let extra = type ? `_${type}` : "";
    let effect = `${this.name + extra}_effect`;
    this.el.classList.add(effect);
  }
  /**
   * 将模型从容器中删除
   */
  remove() {
    this.el.remove();
  }
}
/**
 * @class
 * @classdesc 飞机模型
 */
// es6 类的形式 无法对原型方法进行劫持，做不了函数节流这样的操作
// Plane.prototype.launchBullet
export class Plane extends Model {
  constructor(game) {
    super({
      game,
      vx: 5,
      vy: 5,
      name: "plane"
    });
    // 发射子弹
    this.launchBullet = util.throttle(
      function() {
        let bullet = new Bullet(this.game, this);
        //子弹仓库
        this.game.bulletGroup.push(bullet);
        if (!util.isMobile) this.music.play();
      },
      200,
      this
    );
    // 把dom（飞机）放进界面
    this.render(template.plane);
    this.setKeySwitch();
    this.position();
    this.bindEvent();
    this.initMusic();
    this.startTimer();
  }
  // 启动移动
  startTimer() {
    this.moveTimer = () => {
      this.move();
      // 告诉浏览器 你希望执行一个动画
      // 并要求浏览器在下次重绘之前调用指定的回调函数更新动画
      requestAnimationFrame(this.moveTimer);
    };
    this.moveTimer();
  }
  // 绑定按键开关
  setKeySwitch() {
    this.key_left = false;
    this.key_right = false;
    this.key_top = false;
    this.key_bottom = false;
  }
  // 设置位置 飞机初始位置
  position() {
    this.x = dom.winW / 2 - this.width / 2;
    this.y = dom.winH - this.height;
  }
  // 移动
  move() {
    if (this.key_top && this.y > 0) {
      this.y -= this.vy;
    }
    if (this.key_bottom && this.y + this.height < dom.winH) {
      this.y += this.vy;
    }
    if (this.key_left && this.x > 0) {
      this.x -= this.vx;
    }
    if (this.key_right && this.x + this.width < dom.winW) {
      this.x += this.vx;
    }
  }
  // 绑定事件
  // 去掉硬件反应事件
  bindEvent() {
    document.addEventListener("keydown", e => {
      switch (e.keyCode) {
        // 空格-发射子弹
        case 32:
          this.launchBullet();
          break;
        case 38:
          this.key_top = true;
          break;
        case 40:
          this.key_bottom = true;
          break;
        case 37:
          this.key_left = true;
          break;
        case 39:
          this.key_right = true;
          break;
        default:
          console.log("无效动作");
      }
    });
    document.addEventListener("keyup", e => {
      switch (e.keyCode) {
        case 38:
          this.key_top = false;
          break;
        case 40:
          this.key_bottom = false;
          break;
        case 37:
          this.key_left = false;
          break;
        case 39:
          this.key_right = false;
          break;
      }
    });
    if (util.isMobile) {
      this.el.addEventListener("touchmove", e => {
        let touch = e.changedTouches[0];
        this.x = touch.clientX - this.width / 2;
        this.y = touch.clientY - this.height / 2;
        this.launchBullet();
      });
    }
  }
  // 初始化音乐
  initMusic() {
    this.music = new Music("bullet");
  }
}

// 敌机
export class Enemy extends Model {
  constructor(game) {
    //继承 父类的构造器执行一遍
    super({
      game,
      vy: 1,
      name: "enemy"
    });
    this.enemyType = this.createType();
    //父级方法
    this.render(template[`enemy_${this.enemyType}`]);
    this.position();
  }
  createType() {
    // 1-10随机数
    let random = Math.round(Math.random() * 10);
    //随机敌机的类型
    return random < 5 ? 1 : 2;
  }
  position() {
    this.x = (dom.winW - this.width) * Math.random();
    this.y = -this.height;
    // console.log(this.height)
  }
  move() {
    let av = this.enemyType == 1 ? 0 : 0.5;
    this.y += this.vy + av;
  }
}

// 子弹
export class Bullet extends Model {
  constructor(game, plane) {
    super({
      game,
      vy: 5,
      ay: 0.5,
      name: "bullet"
    });
    this.render(template.bullet);
    this.position(plane);
  }
  position(plane) {
    let { x, y } = plane.el;
    // 偏移量 子弹的宽度
    this.x = x + plane.width / 2 - 2;
    this.y = y;
  }
  move() {
    this.vy += this.ay;
    this.y -= this.vy;
  }
}
