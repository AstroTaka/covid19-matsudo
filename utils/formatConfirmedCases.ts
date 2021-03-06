type DataType = {
  attr: '検査実施人数'
  value: number
  children: [
    {
      attr: '陽性患者'
      value: number
      children: [
        {
          attr: '現在の感染者'
          value: number
          children: [
            {
              attr: '入院中・施設内療養'
              value: number
            },
            {
              attr: '入院調整中'
              value: number
            },
            {
              attr: '自宅療養'
              value: number
            },
            {
              attr: 'ホテル療養'
              value: number
            },
            {
              attr: 'その他'
              value: number
            },
            {
              attr: '重症'
              value: number
            }
          ]
        },
        {
          attr: '退院・療養終了'
          value: number
        },
        {
          attr: '死亡'
          value: number
        }
      ]
    }
  ]
}

type ConfirmedCasesType = {
  検査実施人数: number
  陽性患者: number
  現在の感染者: number
  //  軽症中等症: number
  入院中: number
  入院調整中: number
  自宅療養: number
  ホテル療養: number
  その他: number
  重症: number
  死亡: number
  退院_療養終了: number
}

export default (data: DataType) => {
  const formattedData: ConfirmedCasesType = {
    検査実施人数: data.value,
    陽性患者: data.children[0].value,
    現在の感染者: data.children[0].children[0].value,
    入院中: data.children[0].children[0].children[0].value,
    入院調整中: data.children[0].children[0].children[1].value,
    自宅療養: data.children[0].children[0].children[2].value,
    ホテル療養: data.children[0].children[0].children[3].value,
    その他: data.children[0].children[0].children[4].value,
    重症: data.children[0].children[0].children[5].value,
    死亡: data.children[0].children[2].value,
    退院_療養終了: data.children[0].children[1].value
  }
  return formattedData
}
