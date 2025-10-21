import { Alert, Button, Card, Form, Input, Typography } from 'antd';
import { AxiosError } from 'axios';

import Lock from '../assets/icons/lock.svg?react';
import Mail from '../assets/icons/mail.svg?react';
import { ISignInForm } from './core/_models';
import useSignIn from './core/hooks/use-sign-in';

const { Title } = Typography;

function SignIn() {
  const { error, isError, isPendingLogin, loginMutate } = useSignIn();
  const errorMessage = error instanceof AxiosError ? error?.response?.data?.message : '';

  const onFinish = (values: ISignInForm) => {
    loginMutate(values);
  };

  return (
    <div className='flex justify-center items-center h-lvh bg-gray-100'>
      <Card style={{ width: 500 }} className='shadow-lg py-5'>
        <div className='flex justify-center'>
          <Title level={1}>Admin Login</Title>
        </div>
        {isError && errorMessage && <Alert className='w-max' type='error' message={errorMessage} closable />}
        <br />
        <Form initialValues={{ email: '', password: '' }} onFinish={onFinish}>
          <Form.Item
            name='email'
            rules={[
              {
                required: true,
                message: 'Please input your email!',
              },
              {
                pattern: /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/,
                message: 'Please enter a valid email address!',
              },
            ]}
          >
            <Input
              className='py-2'
              prefix={<Mail />}
              type='email'
              style={{ fontSize: '1rem' }}
              placeholder='Email Address'
            />
          </Form.Item>
          <Form.Item
            name='password'
            rules={[
              {
                required: true,
                message: 'Please input your password!',
              },
            ]}
          >
            <Input.Password
              className='py-2'
              prefix={<Lock />}
              type='password'
              style={{ fontSize: '1rem' }}
              placeholder='Password'
            />
          </Form.Item>
          {/* <Form.Item name='remember' valuePropName='checked' noStyle>
            <Checkbox className='text-base'>Remember me</Checkbox>
          </Form.Item> */}
          <Form.Item>
            <Button
              loading={isPendingLogin}
              className='bg-primary text-white mt-5 !py-5 flex text-lg font-semibold justify-center items-center'
              type='primary'
              htmlType='submit'
              block
            >
              Log in
            </Button>
          </Form.Item>
        </Form>
      </Card>
    </div>
  );
}

export default SignIn;
