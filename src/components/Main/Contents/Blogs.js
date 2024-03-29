import React, { useEffect } from 'react';
import { Card, CardTitle, CardBody, CardContainer, Button } from '../../../styles/Card';

const blogs = [
  {
    id: 1,
    title: 'Openstack API',
    info: 'Handling openstack through API’s',
    link: 'https://medium.com/@lalit.garghate/handling-openstack-through-apis-1dd9298b68c8',
  },
  {
    id: 2,
    title: 'Openstack Installation',
    info: 'Two node setup in virtual box for openstack installation',
    link: 'https://medium.com/@lalit.garghate/two-node-setup-in-virtual-box-for-openstack-installation-a36db75a10fe',
  },
  {
    id: 3,
    title: 'Web Socket in Golang',
    info: 'Websocket in golang to take real time data from mongodb',
    link: 'https://medium.com/@lalit.garghate/create-websocket-in-golang-to-take-data-from-mongodb-5e90651611a6',
  },
  {
    id: 4,
    title: 'Zabbix Vsphere Integration',
    info: 'Monitor VMware vSphere (vCenter) with Zabbix',
    link: 'https://medium.com/@lalit.garghate/monitor-vmware-vsphere-vcenter-with-zabbix-44e77d46c1fc',
  },
];

function Blogs() {
  const goToBlog = (link) => {
    window.open(link, '_blank');
  };
  useEffect(() => {
    document.title = 'Lalit | Blogs';
  }, []);
  return (
    <CardContainer>
      {blogs.map((item) => (
        <Card key={item.id}>
          <CardTitle>{item.title}</CardTitle>
          <CardBody fontSize={'16px'}>{item.info}</CardBody>
          <Button onClick={() => goToBlog(item.link)}>View Post</Button>
        </Card>
      ))}
    </CardContainer>
  );
}

export default Blogs;
