import { Card, Image, Row, Col, Descriptions } from 'antd';
import { SERVICES } from '@/constants/services'


export default function Page() {    
    return (
        <div className="overflow-x-auto md:overflow-x-hidden pb-4">

            <Row
                align="stretch"
                gutter={[16, 24]}
                className="flex flex-nowrap sm:flex-wrap"
                style={{ minWidth: 'min-content' }}
            >
            {SERVICES.map((service) => (
                <Col
                    sm={{
                        span:24,
                    }}
                    md={{
                        span:4
                    }}
                    offset={1} key={service.id}>
                    <Card
                        bordered={false}
                        size='small'
            hoverable
                    style={{
                        width: 240,
             }}
                        cover={<Image preview={false} alt={service.alt} src={service.src} style={{ height: 240, alignItems: 'center', overflow: 'hidden', objectFit: 'scale-down' }}/>}
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