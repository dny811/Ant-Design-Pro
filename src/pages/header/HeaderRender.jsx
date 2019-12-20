import React, { Component } from 'react'

import styles from './HeaderRender.less'

const HeaderRender = (props, defaultDom) => {
  console.log(props)
  return (
    // defaultDom
    <div className={styles.hello}>hello world</div>
  )
}

export default HeaderRender