// 开源项目，未经作者同意，不得以抄袭/复制代码/修改源代码版权信息。
// Copyright @ 2018-present xiejiahe. All rights reserved.
// See https://github.com/xjh22222228/nav

import { Component } from '@angular/core'
import { $t } from 'src/locale'

@Component({
  selector: 'system-about',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.scss'],
})
export default class SystemAboutComponent {
  $t = $t

  constructor() {}

  ngOnInit() {}
}