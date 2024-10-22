import React, { useState } from 'react';
import { Button, ConfigProvider, Modal, Space } from 'antd';
import { createStyles, useTheme } from 'antd-style';
import { Col } from 'antd';

const useStyle = createStyles(({ token }) => ({
  'my-modal-body': {
    background: token.blue1,
    padding: token.paddingXL,
    minHeight: '150px',
  },
  'my-modal-mask': {
    boxShadow: `inset 0 0 15px #fff`,
  },
  'my-modal-header': {
    borderBottom: `1px dotted ${token.colorPrimary}`,
  },
  'my-modal-footer': {
    color: token.colorPrimary,
  },
  'my-modal-content': {
    border: '1px solid #333',
    padding: token.paddingLG,
  },
}));

const ModalDesign = () => {
  const [isModalOpen, setIsModalOpen] = useState([false, false, false]);
  const { styles } = useStyle();
  const token = useTheme();
  const toggleModal = (idx, target) => {
    setIsModalOpen((p) => {
      p[idx] = target;
      return [...p];
    });
  };
  const classNames = {
    body: styles['my-modal-body'],
    mask: styles['my-modal-mask'],
    header: styles['my-modal-header'],
    content: styles['my-modal-content'],
  };
  const modalStyles = {
    header: {
      borderLeft: `5px solid ${token.colorPrimary}`,
      borderRadius: 0,
      paddingInlineStart: 5,
    },
    body: {
      boxShadow: 'inset 0 0 5px #999',
      borderRadius: 5,
      padding: '10px', // Increased padding
      minHeight: '40px', // Ensures the box is larger
    },
    mask: {
      backdropFilter: 'blur(10px)',
    },
    footer: {
      borderTop: '1px solid #333',
      paddingTop: '20px',
    },
    content: {
      boxShadow: '0 0 30px #999',
    },
  };

  const renderFooter = (modalIdx) => (
    <Space>
      <Button type="primary" onClick={() => toggleModal(modalIdx, false)}>
        Yes
      </Button>
      <Button onClick={() => toggleModal(modalIdx, false)}>No</Button>
    </Space>
  );

  return (
    <>
      <Col span={12}>
        <Button
          type="primary"
          style={{ padding: '25px 75px', marginBottom: '10px', marginLeft: '180px' }}
          onClick={() => toggleModal(0, true)}
        >
          Approve
        </Button>

        <Button
          type="primary"
          style={{ padding: '25px 75px', marginBottom: '10px', marginLeft: '180px' }}
          onClick={() => toggleModal(1, true)}
        >
          Decline
        </Button>

        <Button
          type="primary"
          style={{ padding: '25px 75px', marginBottom: '10px', marginLeft: '180px' }}
          onClick={() => toggleModal(2, true)}
        >
          Referral
        </Button>
      </Col>

      <Modal
        title="Approve"
        open={isModalOpen[0]}
        footer={renderFooter(0)}
        classNames={classNames}
        styles={modalStyles}
      >
        <p>Do you want to approve the application?</p>
      </Modal>

      <ConfigProvider
        modal={{
          classNames,
          styles: modalStyles,
        }}
      >
        <Modal
          title="Decline"
          open={isModalOpen[1]}
          footer={renderFooter(1)}
        >
          <p>Do you want to reject the application?</p>
        </Modal>

        <Modal
          title="Referral"
          open={isModalOpen[2]}
          footer={renderFooter(2)}
          classNames={classNames}
          styles={modalStyles}
        >
          <p>Do you want to refer the application?</p>
        </Modal>
      </ConfigProvider>
    </>
  );
};

export default ModalDesign;
