import { React } from 'react';
import { Col, Menu, Row } from 'antd';

export default function NavbarComponent(){
    return(
        <Menu mode="horizontal" defaultSelectedKeys={['picks']}>
            <Row>
                <Col span={8} style={{ width: '100vh'}}>
                    <Menu.Item key="logo" >
                        logo
                    </Menu.Item>
                </Col>
                <Col span={8}>
                    <Col span={8} style={{ display: 'inline-flex', width: '100vh'}}>
                        <Menu.Item key="champions" >
                            champions
                        </Menu.Item>
                    </Col>
                    <Col span={8} style={{ display: 'inline-flex', width: '100vh'}}>
                        <Menu.Item key="picks" >
                            picks
                        </Menu.Item>
                    </Col>
                    <Col span={8} style={{ display: 'inline-flex', width: '100vh'}}>
                        <Menu.Item key="about" >
                            about
                        </Menu.Item>
                    </Col>
                </Col>
                <Col span={8} style={{ width: '100vh' }}>
                    <Menu.Item key="input player">
                        input player
                    </Menu.Item>
                </Col>
            </Row>
        </Menu>
    );
}

