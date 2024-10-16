import { Card, Image, Row, Col, Descriptions } from 'antd';
import { SERVICES } from '@/constants/services'


export default function Page() {    
    return (
        <div className="overflow-x-hidden">
            <Row
                align="stretch"
                gutter={[16, 24]}
                className='min-w-min'
                justify={'space-evenly'}
            >
            {SERVICES.map((service) => (
            <Col
                    sm={{
                        span: 24                        
                    }}
                    md={{
                        span: 4
                    }}
                     key={service.id}>
                    <Card
                        bordered={false}
                        size='small'
                        hoverable
                    style={{
                        width: "100%",
             }}
                        cover={<Image preview={false} alt={service.alt} src={service.src} style={{ width:'100%', height: 240, alignItems: 'center', overflow: 'hidden', objectFit: 'scale-down' }}/>}
                >
                        <Descriptions title={service.title} size='small'>
                            <p>
                            {service.description}
                            </p>
                    </Descriptions>
                        <div className='grid'>
                            <strong>

                        <p className='text-gray-500'>starting at</p>
                            <p> &#8377; {service.price}</p>
                            </strong>
                    </div>
                    </Card>
            </Col>
                )
                )}
        </Row>
        </div>

    );
}