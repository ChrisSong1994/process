import React from 'react';
import { Collapse, Icon } from 'antd';
import { shapes } from 'src/modules/shapes/base';

const commonStyle = {
  fill: 'transparent',
  stroke: '#000',
  strokeWidth: 6
};

const Panel = () => {
  return (
    <div id="panel">
      <Collapse
        bordered
        defaultActiveKey={['1']}
        expandIcon={({ isActive }) => (
          <Icon type="caret-right" rotate={isActive ? 90 : 0} />
        )}
      >
        <Collapse.Panel header="基础图形" key="1">
          <section id="basic" className="panel-content">
            {shapes.map(shape => {
              return (
                <div className="panel-item" key={shape.key}>
                  {shape.component({
                    width: '100%',
                    height: null,
                    style: commonStyle
                  })}
                </div>
              );
            })}
          </section>
        </Collapse.Panel>
      </Collapse>
    </div>
  );
};

export default Panel;
