import React from 'react';
import style from './login.css'
import image from '../../assets/images/wardrobe.png';
import { Form } from 'react-final-form';
import InputField from '../form/imput-field';
import { Button, Col, Row, Icon } from 'antd';
import SubmitMsg from '../form/submitmsg';
import LogoSVG from '../../assets/svg/Logo.svg';
import GoogleImg from '../../assets/images/google.png';
import { Link } from 'react-router-dom';

function Login(props) {
    const [msg, setMsg] = React.useState(null);

    let userIcon = (
        <Icon
            type='mail'
            theme='outlined'
            style={{
                color: '#252A3D',
                fontSize: '14px',
                paddingRight: '10px!important'
            }}
        />
    );

    let lockIcon = (
        <Icon type='lock' theme='outlined' style={{ color: '#252A3D' }} />
    );

    function onSubmit(values) {
        console.log(values);
    }

    return (
        <div style={{ display: 'flex', height: '100%' }}>
            <img className={style['left']} src={image} style={{ width: '50%', objectFit: 'cover', height: '100%' }} />
            <div className={style.right} style={{ width: '50%' }}>
                <div style={{
                    width: 'fit-content',
                    margin: 'auto'
                }}>
                    <img src={LogoSVG} style={{ width: '75px' }} />
                    <div>Welcome To Fendy</div>
                </div>
                <div style={{ width: 'fit-content', margin: 'auto' }}>
                    <div>Sign Up</div>
                    <Button style={{ background: 'black', color: 'white', width: '100%' }}>
                        <img src={GoogleImg} style={{ width: 25, marginRight: 10 }} />
                        <span>Sign-up with Google</span>
                    </Button>
                    <Form
                        initialValues={{}}
                        validate={() => null}
                        onSubmit={onSubmit}
                        render={({ handleSubmit, submitting }) => (
                            <form onSubmit={handleSubmit} className={style.form}>
                                <div>
                                    <label>Email</label>
                                    <InputField
                                        className={style['login-form-input']}
                                        name='email'
                                        size='large'
                                        placeholder='Enter email address'
                                        prefix={userIcon}
                                    />
                                </div>
                                <div>
                                    <label>Password</label>
                                    <InputField
                                        className={style['form-input']}
                                        type='password'
                                        name='password'
                                        size='large'
                                        placeholder='Enter your password'
                                        prefix={lockIcon}
                                    />
                                </div>
                                <div>
                                    <label>Confirm Password</label>
                                    <InputField
                                        className={style['form-input']}
                                        type='password'
                                        name='confirmPassword'
                                        size='large'
                                        placeholder='Confirm password'
                                        prefix={lockIcon}
                                    />
                                </div>
                                <Row>
                                    <Col className='gutter-row'>
                                        <Button htmlType='submit' type='primary' disabled={submitting} loading={submitting || (msg && (msg.msg || msg.ed))} style={{ background: '#FE5351', borderColor: '#FE5351', width: '100%' }}>
                                            Create an account
                                        </Button>
                                        {
                                            msg && (msg.msg || msg.ed) && <SubmitMsg msg={msg.msg ? msg.msg : msg.ed} className={msg.msg ? 'successMsg' : 'errorMsg'} />
                                        }
                                    </Col>
                                </Row>
                            </form>
                        )}
                    />
                    <div>
                        <span>Have an account?</span>
                        <Link to='/login'>Login</Link>
                    </div>
                </div>
            </div>
        </div>
    );
}

export { Login };