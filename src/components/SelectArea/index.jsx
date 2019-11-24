import React from 'react'
import { Select } from 'antd'
import styles from './index.less'

const { Option } = Select

const SelectArea = () => {
  const optionList = ['全国', '上海', '南京', '苏州', '镇江']
  return (
    <div styles={styles.areaSelect}>
      <Select defaultValue={optionList[0]}>
        {optionList.map((item, index) => {
          return (
            <Option key={`${item}_${index}`} value={item}>{item}</Option>
          )
        })}
      </Select>
    </div>
  )
}

export default SelectArea