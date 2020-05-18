### 使用方法
```
npm install vue-confirm-component --save
```

### main.js
```js
import 'vue-confirm-component/lib/vue-confirm-component.css'
import vueConfirm from 'vue-confirm-component'
Vue.use(vueConfirm)
```

### vue页面中使用
```vue
 <vue-confirm :show="showConfirm" :content="content" @confirm="confirm" :showCancel="true" confirmText="知道了"></vue-confirm>
```

### API

| 名称        | 类型              | 默认值 |
| ----------- | ----------------- | ------ |
| show        | Boolean           | false  |
| content     | 显示内容          | ‘内容’ |
| showCancel  | 是否显示 取消按钮 | false  |
| cancelText  | 取消按钮文案      | 取消   |
| confirmText | 确定按钮文案      | 确定   |

### 方法

| 方法名  | 返回值           |
| ------- | ---------------- |
| confirm | {confirm: false} true:确定 false:取消|

