# phaser

https://blog.ourcade.co/

## tutorial

- repos: https://github.com/ourcade/infinite-jumper-template-phaser3
- youtube: https://www.youtube.com/playlist?list=PLumYWZ2t7CRtojYrBNKu-TSXY5VbTGzIY
- up: https://www.youtube.com/ourcadehq
- [Memory Match Extras in Modern JavaScript - Game Development Course](https://ourcade.gumroad.com/l/moEDH)

## project

模仿 es module 规范

1. 采用一个文件导出依赖的库

   ```js
   //phaser.js
   export default window.Phaser;
   ```

2. 采用映射 import

   ```html
   <script type="importmap">
     {
       "imports": {
         "phaser": "../lib/phaser.js"
       }
     }
   </script>
   ```

3. install phaser

   ```bash
   npm install phaser
   ```

## reference
