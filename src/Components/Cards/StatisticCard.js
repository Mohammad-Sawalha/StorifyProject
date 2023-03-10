import Card from 'react-bootstrap/Card';
import React from "react";
import './card.css';
import OrdersIcon from "./Icons/OrdersIcons";
import ProductsIcon from './Icons/ProductsIcons';
import DoughnutChart from '../Analysis/DoughnutChart';

export default function StatisticCard({info,data}) {
  return (
    <Card>
        <Card.Body className='d-flex flex-column'>
            <div className='d-flex flex-column'>
                <span className='h5 cardTitle'>{info.title}</span>
                <small className='text-muted'>{info.subTitle}</small>
            </div>
            <div className='d-flex'>
                <div className='ms-4' style={{width:"33%", padding:"2%"}}>
                    <DoughnutChart GlobalData={info.DoughnutChart} />
                </div>
                <span className='my-auto ms-auto me-3'> data </span>
            </div>
        {data.map((data)=>
            <div key={data.id} className='d-flex mt-3'>
                <div className='d-flex' key={data.id+'a'}>
                    <div style={{backgroundColor:(data.background)}} className='d-flex ordersCardIcon'>
                        {info.orderIcon ? 
                        (<OrdersIcon key={data.id} options={{ color:data.border,id: data.id }}/>) :
                        (<ProductsIcon  key={data.id} options={{color:data.border, id: data.id }}/>)
                        }
                    </div>
                    <span key={data.id+'b'} className='my-auto ms-2'>{data.name}</span>
                </div>
                <span className='text-muted my-auto ms-auto'>{data.sales}</span>
            </div>
        )}

        </Card.Body>
        </Card>
    );
}