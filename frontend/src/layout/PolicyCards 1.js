import React from 'react';
import styles from './PolicyCards.module 1.css';
import { Card, Col, Row } from 'antd';

export function PolicyCards() {
  const policies = [
    { icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/b4e5b89c7fe49a3fae359da4f36eec68945dcde61890aecd430ef4ce59a054c1?placeholderIfAbsent=true&apiKey=d51d7313bdca4fcf802b81d20b6296aa", name: "Commercial Property", active: true },
    { icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/688eeecf7f9bb910c08e4d204d0fc814d63ef100aeda5f3221d814b91089db41?placeholderIfAbsent=true&apiKey=d51d7313bdca4fcf802b81d20b6296aa", name: "Commercial Auto" },
    { icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/43e91dd543a8c6d01bf96f5db18767ca9e996dc38eaf24bc0b1821d699bba4d7?placeholderIfAbsent=true&apiKey=d51d7313bdca4fcf802b81d20b6296aa", name: "Worker Compensation" },
    { icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/b843deeb74bf6b82930f8df13bb17a40e849c878762295a9db87885d570ee9c4?placeholderIfAbsent=true&apiKey=d51d7313bdca4fcf802b81d20b6296aa", name: "General Liability" },
    { icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/3ea1e8212960372688bf642fde669f9a35c12cde8a29f1827f86d871b9328022?placeholderIfAbsent=true&apiKey=d51d7313bdca4fcf802b81d20b6296aa", name: "Personal Auto" },
  ];

  return (
    <section className={styles.policyCards}>
      <Row gutter={[16, 16]} justify="space-between" >
        {policies.map((policy, index) => (
          <Col key={index} xs={24} sm={12} md={8} lg={6} xl={4} className={`${styles.policyCard} ${policy.active ? styles.activeCard : ''}`}>
            <Card bordered={true} class='policyCard' style={{ height: '102px ', width: '236px', borderRadius: '12px', boxShadow: '0 6px 6px rgba(0, 0, 0, 0.3)', borderTopColor: 'steelblue',  }} >
                <div style={{ display: "flex", flexDirection: "row", }}>
                  <img src={policy.icon} alt="" class='policyIcon'/>
                  <p style={{ fontWeight: '700', marginLeft: '20px',marginTop:'4px' }}>{policy.name}</p>
                </div>

              </Card>
          </Col>
        ))}
      </Row>
    </section>
  );
}

export default PolicyCards;
