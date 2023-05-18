import React from 'react'
import { Typography } from '@arco-design/web-react';
export default function CustomContent() {
  return (
    <Typography>
      <div style={{ "marginTop": 200 }}></div>
      <Typography.Title
        style={{ fontSize: "50px" }}
      >
        Hello,World!
      </Typography.Title>
      <Typography.Text>欢迎来到在线判题网站-OnlineJudge</Typography.Text>
    </Typography>
  )
}
