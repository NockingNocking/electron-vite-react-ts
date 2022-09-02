/*
 * @Author: Mocking 497773732@qq.com
 * @Date: 2022-09-01 10:53:25
 * @LastEditors: Mocking 497773732@qq.com
 * @LastEditTime: 2022-09-01 12:03:23
 * @FilePath: \react-vite-electron-ts\src\renderer\src\views\login\components\LoginForm.tsx
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import md5 from 'js-md5'
import { useState } from 'react'
import { Button, Form, Input, message } from 'antd'
import { useNavigate } from 'react-router-dom'
import { connect } from 'react-redux'
import { setToken } from '@/store/modules/global/action'
import { UserOutlined, LockOutlined, CloseCircleOutlined } from '@ant-design/icons'

import { ILoginForm } from '../types'

const LoginForm = (props: any) => {
  const { setToken } = props
  const navigate = useNavigate()
  const [form] = Form.useForm()
  const [loading, setLoading] = useState<boolean>(false)

  const onFinish = (loginForm: ILoginForm) => {
    try {
      setLoading(true)
      loginForm.password = md5(loginForm.password)
      // const { data } = await loginApi(loginForm);
      // setToken(data?.access_token);
      setToken('123')
      message.success('登录成功！')
      navigate('/home/index')
    } finally {
      setLoading(false)
    }
  }
  const onFinishFailed = () => {}

  return (
    <>
      <Form
        form={form}
        name="basic"
        labelCol={{ span: 5 }}
        initialValues={{ remember: true }}
        onFinish={onFinish}
        onFinishFailed={onFinishFailed}
        size="large"
        autoComplete="off"
      >
        <Form.Item name="username" rules={[{ required: true, message: '请输入用户名' }]}>
          <Input placeholder="用户名：admin / user" prefix={<UserOutlined />} />
        </Form.Item>
        <Form.Item name="password" rules={[{ required: true, message: '请输入密码' }]}>
          <Input.Password
            autoComplete="new-password"
            placeholder="密码：123456"
            prefix={<LockOutlined />}
          />
        </Form.Item>
        <Form.Item className="login-btn">
          <Button
            onClick={() => {
              form.resetFields()
            }}
            icon={<CloseCircleOutlined />}
          >
            重置
          </Button>
          <Button type="primary" htmlType="submit" loading={loading} icon={<UserOutlined />}>
            确定
          </Button>
        </Form.Item>
      </Form>
    </>
  )
}

const mapDispatchToProps = { setToken }
export default connect(null, mapDispatchToProps)(LoginForm)
