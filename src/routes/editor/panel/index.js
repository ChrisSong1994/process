import React from 'react';
import { Collapse, Icon } from 'antd';
import { shapes } from 'src/modules/shapes/base';
import DragBox from 'src/components/dragBox';

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
              const data = {
                shape: shape.shape,
                name: shape.name,
                width: shape.width,
                height: shape.height,
                style: shape.style
              };
              return (
                <DragBox data={data} key={shape.shape}>
                  <div className="panel-item">
                    {shape.component({
                      width: '100%',
                      height: null
                    })}
                  </div>
                </DragBox>
              );
            })}
          </section>
        </Collapse.Panel>
      </Collapse>
    </div>
  );
};

export default Panel;
