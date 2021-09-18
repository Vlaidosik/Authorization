import React, { useState } from 'react'
import { useDispatch } from "react-redux";
import { NotificationContainer, NotificationManager } from "react-notifications"
import { addAuthorizationData } from '../../ReduxStore/reduser'
import { Form, Input, Button, Checkbox } from 'antd';
import "react-notifications/lib/notifications.css"
import 'antd/dist/antd.css';
import  './autohorization.scss'

const onFinish = (values) => {
    console.log('Success:', values);
};

const onFinishFailed = (errorInfo) => {
    console.log('Failed:', errorInfo);
};

export const Authorization = () => {
    const [value, handleChange] = useState('')
    const [passwords, handleChangePassword] = useState('')
    const dispatch = useDispatch()

    const addLogin = (login, password) => {
        dispatch(addAuthorizationData(login, password))
    }
    const check = value && passwords


    const clickLogin = () => {

        if(check === ''){
            return NotificationManager.warning("Неправильно указан логин или пароль");
        }
        else if(passwords.length <6){
            return NotificationManager.warning("Пароль слишком короткий");
        }
        else if(isNaN(passwords) === false ){
            return NotificationManager.warning("Пароль должен содержать хотябы одну букву");
        }
        else {
            return (
                addLogin(value, passwords)
            )
        }

    }

    return(
        <div className='authorize'>
            <h1>Authorization</h1>
            <Form
                name="basic"
                labelCol={{
                    span: 8,
                }}
                wrapperCol={{
                    span: 16,
                }}
                initialValues={{
                    remember: true,
                }}
                onFinish={onFinish}
                onFinishFailed={onFinishFailed}
                autoComplete="off"
            >
                <Form.Item
                    name="username"
                    rules={[
                        {
                            required: true,
                            message: 'Please input your username!',
                        },
                    ]}
                >
                    <Input
                        className='input_auth'
                        value={ value }
                        onChange={(event) => handleChange(event.target.value)}
                        placeholder='Please input your username!'
                    />
                </Form.Item>

                <Form.Item
                    name="password"
                    rules={[
                        {
                            required: true,
                            message: 'Please input your password!',
                        },
                    ]}
                >
                    <Input.Password
                        placeholder='Please input your password'
                        className='input_pass'
                        value={ passwords }
                        onChange={(event) => handleChangePassword(event.target.value)}
                    />
                </Form.Item>

                <Form.Item
                    name="remember"
                    valuePropName="checked"
                    wrapperCol={{
                        offset: 8,
                        span: 16,
                    }}
                >
                    <Checkbox   id='remember_me' className='remember_me'>Remember me</Checkbox>
                </Form.Item>

                <Form.Item

                >
                    <Button
                        className='button_auth'
                        onClick={clickLogin}
                        type="button"
                        htmlType="submit">
                        Submit
                    </Button>
                </Form.Item>
            </Form>
            <NotificationContainer />
        </div>
        )
}

















