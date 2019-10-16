import React from 'react';
import { Layout } from 'antd';
import Panel from './panel';
import Canvas from './canvas';
import Tools from './tools';
import './index.less';

const { Header, Content, Footer, Sider } = Layout;

const Editor = () => {
  return (
    <div id="editor">
      <Layout>
        <Header id="header">
          <Tools />
        </Header>
        <Content>
          <Layout>
            <Sider className="sider">
              <Panel />
            </Sider>
            <Content className="content">
              <Canvas />
            </Content>
          </Layout>
        </Content>
        <Footer id="footer">Process ©2019 Created by chris song</Footer>
      </Layout>
    </div>
  );
};

export default Editor;
