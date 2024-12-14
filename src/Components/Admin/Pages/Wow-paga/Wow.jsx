import React from 'react';
import { useSpring, animated } from '@react-spring/web';
import { LaptopOutlined, CodeOutlined, CloudServerOutlined } from '@ant-design/icons';

const Wow = () => {
  const animationProps = useSpring({
    from: { opacity: 0, transform: 'translateY(-50px)' },
    to: { opacity: 1, transform: 'translateY(0px)' },
    config: { duration: 1000 },
  });

  return (
    <animated.div style={animationProps} className="wow-container">
      <h1 style={{ textAlign: 'center', color: '#1890ff' }}>Wow</h1>
      <p style={{ textAlign: 'center', color: '#595959' }}>
        <LaptopOutlined style={{ fontSize: '32px', marginRight: '10px' }} />
        <CodeOutlined style={{ fontSize: '32px', marginRight: '10px' }} />
        <CloudServerOutlined style={{ fontSize: '32px' }} />
      </p>
    </animated.div>
  );
};

export default Wow;
